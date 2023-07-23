// library imports
import { useContext } from "react"
import { styled } from "styled-components"

// file imports
import { GithubContext } from "../context/context"

// icon imports
import { GoRepo} from "react-icons/go"
import { FiUsers, FiUserPlus } from "react-icons/fi"
import { BiLogoDigitalocean } from "react-icons/bi"

// main component
const Info = () => {

  // destructing the data from context
  const { 
    githubUser:{
      public_repos,
      followers,
      following,
      public_gists
    } 
  } = useContext(GithubContext)

  // item for each data
  const items = [
    { 
      id:1,
      icon:<GoRepo className="icon"/>,
      label:'repos',
      value:public_repos,
    },
    { 
      id:2,
      icon:<FiUsers className="icon"/>,
      label:'followers',
      value:followers,
      color:'green'
    },
    { 
      id:3,
      icon:<FiUserPlus className="icon"/>,
      label:'public_repos',
      value:public_repos,
      color:'orange'
    },
    { 
      id:4,
      icon:<BiLogoDigitalocean className="icon"/>,
      label:'gists',
      value:public_gists,
      color:'purple'
    },
  ]

  const RenderedItems = ({ icon, label, value, color }) => {
    return (
      <article>
        <Span className={color} color={color}>{icon}</Span>
        <div>
          <h3>{value}</h3>
          <p>{label}</p>
        </div>
      </article>
    )
  }

  //UI
  return (
    <StyledSection>
      {
        items.map(item => <RenderedItems key={item.id} {...item} />  )
      }
    </StyledSection>
  )
}

const StyledSection = styled.section`
  width: 95%;
  margin: 1rem auto;
  display:flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0.4rem;
  background-color: white;
  border-radius: 10px;
  box-shadow: var(--light-shadow);

  article {
    margin: .5rem;
    background-color: var(--clr-sky-blue);
    color: #f7f5f5;
    padding: .2rem 0;
    border-radius: 10px;
    box-shadow: 0px 0px 11px gray;
    width: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 255,.5);
      transform: scale(1.12);
    }

    &>*{
      margin-bottom: .3rem;
    }

  }

`

const Span = styled.span`
  background-color: ${props => props.color || 'gray'};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  padding: .3rem;
`

export default Info
