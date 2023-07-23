import { useState} from "react";
import { createContext } from "react"
import mockUser from './data/mockUser'
import mockRepos from './data/mockRepos'
import mockFollowers from './data/mockFollower'

import { GithubApi} from "../api/apiInstances"
import { useEffect } from "react";
import axios from 'axios'

const GithubContext = createContext();

const rootUrl = "https://api.github.com"

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  const [requests, setRequests] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    show:false,
    msg:""
  })

  const searchGithubUser = async (user) => {
    setLoading(true)
    toggleError()
    const response = await axios(`${rootUrl}/users/${user}`).catch((err => console.log(err)))

    if(response) {
      setGithubUser(response.data)
      const { login, followers_url } =  response.data

      await axios(`${rootUrl}/users/${login}/repos?per_page=100`)
        .then(response => setRepos(response.data))

      await axios(`${followers_url}?per_page=100`)
        .then(response => setFollowers(response.data))

      await Promise.allSettled([])

    }

    checkRequest()
    setLoading(false)
  }

  const checkRequest = async () => {
    try {
      let {data:{rate:{remaining}}} = await GithubApi.get('/rate_limit')
      setRequests(remaining)
      if(remaining === 0) {
        toggleError(true, 'sorry you have used all of your requests')
      }
    } catch(err) {
      console.log(err);
    }
  } 

  useEffect(() => {
    checkRequest()
  },[])

  function toggleError(show, msg) {
    setError({show,msg})
  }

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests, 
        error,
        searchGithubUser,
        loading
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }