import { keyframes, styled } from "styled-components"

const Loading = () => {
  return (
    <Wrapper>
      <div className="loader">
        <Span num={1}></Span>
        <Span num={2}></Span>
        <Span num={3}></Span>
        <Span num={4}></Span>
        <Span num={5}></Span>
        <Span num={6}></Span>
        <Span num={7}></Span>
        <Span num={8}></Span>
        <Span num={9}></Span>
        <Span num={10}></Span>
        <Span num={11}></Span>
        <Span num={12}></Span>
        <Span num={13}></Span>
        <Span num={14}></Span>
        <Span num={15}></Span>
        <Span num={16}></Span>
        <Span num={17}></Span>
        <Span num={18}></Span>
        <Span num={19}></Span>
        <Span num={20}></Span>
      </div>
    </Wrapper>
  )
}

const rotate = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
`

const spanAnimate = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 10rem auto;
  /* animation: ${rotate} 10s linear infinite ; */

  .loader {
    position: relative;
    width: 120px;
    height: 120px;
  }
`

const Span = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * ${props => props.num}));

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 15px;
      height: 15px;
      background-color: #ffffff;
      border-radius: 50%;
      box-shadow: 0 0 10px var(--clr-main-blue),
        0 0 20px var(--clr-main-blue),
        0 0 40px var(--clr-main-blue),
        0 0 60px var(--clr-main-blue),
        0 0 80px var(--clr-main-blue),
        0 0 100px var(--clr-main-blue)
      ;
      animation: ${spanAnimate} 2s linear infinite;
      animation-delay: calc(.1s * ${props => props.num});
    }
`

export default Loading
