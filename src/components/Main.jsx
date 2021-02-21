import React from 'react';
import styled from '@emotion/styled';
import img from '../utils/img/10.png';
import photo from '../utils/img/12.png'
import arrow from '../utils/img/15.png'

const StyledBackground = styled.div`
  width: 100%;
  height: 45rem;
  background: url(${img}) no-repeat;
  background-size: cover;
  background-position: center;
`

const StyledOverlay = styled.div`
  z-index: 1;
  position: absolute;
  top: 4rem;
  background: #000;
  opacity: .5;
  width: 100%;
  height: 45rem;
`

const StyledMain = styled.div`
  z-index: 2;
  position: absolute;
  top: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45rem;
  color: #fff;

  img {
    margin-bottom: 2rem;
    width: 7.7rem;
  }

  h2 {
    font-size: 2.6rem;
    text-align: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const SliderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  cursor: pointer;

  img {
    margin: 0;
    width: 1.8rem;
    height: 1.8rem;
    transition: all .5s;
  }

  &:hover img {
    width: 2.3rem;
    height: 2.3rem;
  }
`

const Main = ({data}) => {
  const createMarkup = () => {
    return {__html: data};
  }

  return (
    <>
      <StyledOverlay />
      <StyledBackground />
      <StyledMain>
        <SliderButton>
          <img src={arrow} alt="arrow" />
        </SliderButton>
        <div>
          <img src={photo} alt="photo" />
          <h2 dangerouslySetInnerHTML={createMarkup()} />
        </div>
        <SliderButton style={{ transform: "rotate(180deg)" }}>
          <img src={arrow} alt="arrow" />
        </SliderButton>
      </StyledMain>
    </>
  )
}

export default Main;