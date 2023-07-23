// file imports
import { styled } from 'styled-components'
import { Repos, Info, User, Search, Navbar } from '../components'
import { device } from '../styles'
import { useContext } from 'react'
import { GithubContext } from '../context/context'
import Loading from '../components/Loading'

const Dashboard = () => {
  const { loading } = useContext(GithubContext)

  if(loading) {
    return (
      <MainWrapper>
        <Navbar/>
        <Search/>
        <Loading/>
      </MainWrapper>
    )
  }

  return (
    <MainWrapper>
      <Navbar/>
      <Search/>
      <Info/>
      <User/>
      <Repos/>
    </MainWrapper>
  )
}

const MainWrapper = styled.main`
  width: 100%;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.laptop} {
    width: 80%;
  }

`

export default Dashboard
