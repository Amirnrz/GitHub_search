import { styled } from 'styled-components'


const Login = () => {
  return (
    <Wrapper>
      <div> 
        <h1>Github User</h1>
        <Button>
          Login
        </Button>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  min-height:100vh;
  display: grid;
  place-items:center;

  div{
    text-align: center;
    padding: 1rem;
  }

`

const Button = styled.button`
  padding:1rem;
  width: 30%;
  border-radius: 10px;
  border:none;
  box-shadow: 0px 0px 10px blue;
  cursor:pointer;
  transition: (--transition);
  

  &:hover {
    box-shadow: inset 0px 0px 10px blue;
  }

`

export default Login
