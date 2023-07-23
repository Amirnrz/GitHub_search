// library imports
import { useContext } from "react"
import { styled } from "styled-components"

// file imports
import { GithubContext } from "../context/context"

const Followers = () => {
  const { followers } = useContext(GithubContext)

  return (
    <Wrapper>
      <h3>Followers</h3>
      {
        followers.map((follower,index) => {
          const { avatar_Url:img,html_url,login } = follower;
          return (
            <article key={index} >
              <img src={img} alt={login}/>
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank" rel="noreferrer">   {html_url}
                </a>
              </div>
            </article>
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 95%;
  margin: var(--wrapper-margin);
  padding: var(--wrapper-padding);
  background-color: var(--clr-white);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 22vh;
  box-shadow: var(--dark-shadow);
  overflow-y: auto;
  overflow-x: hidden;

  article {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 1rem 0;

    div {
      margin: 0 2rem;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 10px;
    }

  }

`

export default Followers
