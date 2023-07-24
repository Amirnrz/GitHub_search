// library imoprts
import { useState, useContext } from "react"
import { styled } from "styled-components"

// file imports
import { GithubContext } from "../context/context"

// icon imports
import { MdSearch } from "react-icons/md"


const Search = () => {
  const [user, setUser] = useState('')

  const { requests, error, searchGithubUser, loading } = useContext(GithubContext)

    
  const handleSubmit = (e) => {
    e.preventDefault()
    if(user) {
      searchGithubUser(user)
      // setUser('')
    }
  }
 
  return (
    <div>
      {
        error && <p className="error">{error.msg}</p>
      }
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
          <MdSearch/>
          <input 
            type="text" 
            placeholder="enter github user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          </div>
          {requests > 0 && !loading && (
              <button type='submit'>search</button>
            )}
        </div>
      </form>
    </Wrapper>
    </div>
  )
}

const Wrapper = styled.section`
  width: 95%;
  height: 50px;
  background-color: aliceblue;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  padding: .5rem 1rem;
  margin: 0 auto;



  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    button {
      background-color: var(--clr-main-blue);
      border: none;
      padding: .4rem .8rem;
      border-radius: 10px;
      cursor: pointer;
      color: var(--clr-white);
      transition: var(--transition);

      &:hover {
        background-color: var(--clr-main-purple);
        padding-left: 2rem;
      }

    }

  }

  input {
    border: none;
    outline: none;
    width: 90%;
    background-color: transparent;
    padding: 0.5rem;
    font-family: var(--secondary-font);
    color: gray;
  }

`

export default Search
