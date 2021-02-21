import React from 'react';
import styled from '@emotion/styled';
import img from '../utils/img/11.png';

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 20rem;
  background-image: url(${img});

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    color: #fff;

    h2 {
      margin-bottom: .4rem;
    }

    p {
      color: #8baeff;
      font-size: 1.3rem;
    }
  }
`

const themeInput = () => {
  return `
    border-radius: 2rem;
    border: none;
    outline: none;
    height: 2.5rem;
  `
}

const StyledInput = styled.input`
  ${themeInput}
  width: 17rem;
  padding: 0 3rem 0 1rem;
  background: #2c6bff;
  color: #fff;
`

const StyledSubmit = styled.input`
  ${themeInput};
  position: relative;
  left: -2rem;
  width: 5rem;
  background: #fff;
  color: #2c6bff;
  font-weight: bold;
  cursor: pointer;
`

const Signin = () => {
  return (
    <StyledDiv>
      <div>
        <h2>Newsletter</h2>
        <p>Donec elementum dui semper, pretium dui quis, pretium nisl.</p>
        <form action="sign">
          <StyledInput type="email" />
          <StyledSubmit type="submit" value="Sign up" />
        </form>
      </div>
    </StyledDiv>
  )
}

export default Signin;