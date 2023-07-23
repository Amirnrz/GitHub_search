// library imports
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

// UI
const Error = () => {
  return (
    <ErrorWrapper>
      <div>
        <h1>404</h1>
        <h3>
          sorry, the page you tried cannot be found
        </h3>
        <Link to='/' >
          Back Home
        </Link>
      </div>
    </ErrorWrapper>
  )
}

const ErrorWrapper = styled.div`
  width:100vw;
  height:100vh;
  padding:1rem;
  display:flex;
  align-items:center;
  justify-content:center;

  div{
    background-color: var(--clr-main-blue);
    border-radius:20px;
    padding:2rem;
    color: var(--clr-font);
    box-shadow: 0px 0px 50px var(--clr-sky-blue);
    transition: all .4s ease;

    &:hover {
      transform: scale(.99);
      border-radius: 35px;
    }

    &>* {
      margin-bottom:20px;
    }

    a {
      background: transparent;
      color:white;
      padding:.5rem;
      border-radius:10px;
      box-shadow: 0px 0px 10px rgba(0,0,0,.3);
      transition: var(--transition);
    
      &:hover {
        background: rgba(0,0,0,.1)
      }

    }

  }

`

export default Error
