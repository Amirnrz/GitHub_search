// library imports
import { styled } from "styled-components"
import { useContext } from "react"

// file imports
import { GithubContext } from "../context/context"

// icon imports
import { MdBusiness, MdLocationOn} from 'react-icons/md'

// main component
const Card = () => {

  const {
    githubUser : {
      avatar_url,
      html_url,
      name,
      company,
      blog,
      bio,
      location,
      twitter_username
    }
  } = useContext(GithubContext)

  return (
    <Wrapper>
      <header>
        <div className="avatar-container">
          <img src={avatar_url} alt={name} />
          <div>
            <h5>{name}</h5>
            <h6>@{twitter_username}</h6>
          </div>
        </div>
        <div className="btn-container">
          <a href={html_url}>follow</a>
        </div>
      </header>
      <h6 className="bio">{bio || ''}</h6>
      <div className="info-container">
        <h6> <MdBusiness/> {company}</h6>
        <h6> <MdLocationOn/> {location}</h6>
        <a href={html_url} className="blog_url">{blog}</a>
      </div>
    </Wrapper>
  )
}

// styles
const Wrapper = styled.article`
  width: 95%;
  margin: var(--wrapper-margin);
  background-color: var(--clr-white);
  padding: var(--wrapper-padding);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);

  header {
    height: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a {
        background-color: var(--clr-sky-blue);
        color: white;
        box-shadow: 0px 0px 3px gray;
        padding: .4rem 1rem;
        border-radius: 10px;
        transition: all .4s ease;

        &:hover {
          background-color: #7e7eff;
          padding-left: 2rem;
        }

      }

    .avatar-container {
      display: flex;

      div {
        display: flex;
        flex-direction: column;
        margin: 1rem .3rem;

        h6 {
          color: #5d5b5b;
        }
      }
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    .btn-container {
      margin-top: 20px;
    }

  }

  .info-container{
    margin-top: 1rem;
    margin-left: 1rem;

    a {
      font-size: .8rem;
      text-align: center;
      font-family: var(--secondary-font);
      color: #7e7eff;
    }

  }

  .bio {
    margin: .5rem .1rem;
    color: #2f2f2f;
    font-family: var(--secondary-font);
    width: 100%;
    padding: 0.5rem;
    background-color: rgba(126, 126, 255,.1);
    border-radius: 10px;
  }

`

export default Card
