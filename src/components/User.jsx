// library imports
import { styled } from "styled-components"

// file imports
import Card from './Card'
import Followers from './Followers'

// main component
const User = () => {
  return (
    <Wrapper>
      <Card/>
      <Followers/>
    </Wrapper>
  )
}

// styled 
const Wrapper = styled.div`
  
`

export default User
