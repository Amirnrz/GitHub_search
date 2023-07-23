import axios from "axios";

export const GithubApi = axios.create({
  baseURL:"https://api.github.com"
})

export const getUser = async (user) => {
  const response = await GithubApi.get(`/users/${user}`)
  return response.data
}

export const checkRequests = async () => {
  const { data:{rate} } = await GithubApi.get('/rate_limit')
  return rate
}

export const getRepos = async (login) => {
  const {data} = await GithubApi(`/users/${login}/repos/per_page=100`)
  return data
}