import React, { useState } from 'react';
import styled from '@emotion/styled';
import searchImg from '../utils/img/13.png';
import dotsImg from '../utils/img/14.png';

const StyledBg = styled.div`
  width: 50vw;
  height: 4rem;
  background: ${props => props.bgColor};
`

const StyledHeader = styled.header`
  z-index: 1;
  position: absolute;
  top: 0;
  display: flex;
  width: 66.6rem;
  height: 100%;
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: ${props => props.bgColor};

  a {
    margin: 0 1rem;
    color: ${props => props.linkColor};
    text-decoration: none;

    img {
      margin-top: .5rem;
    }
  }
`

const Categories = ({ names }) => {
  const { active, setActive } = useState('people');

  return (
    names.nodes.map(item => {
      return <a href="/">{item.data.name}</a>
    })
  )
}


const Header = ({data, categories}) => {
    return(
      <>
        <div style={{ display: "flex" }}>
          <StyledBg bgColor="#1a53e7" />
          <StyledBg bgColor="#fff" />
        </div>
        <StyledHeader>
          <StyledNav bgColor="#1a53e7" linkColor="#fff">
            <a href='/'>{data}</a>
          </StyledNav>
          <StyledNav bgColor="#fff" linkColor="gray">
            <a href='/'><img src={searchImg} alt="search" width="30"/></a>
            <a href='/'>About</a>
            <a href='/'>Cooperation</a>
            <a href='/'>Contact</a>
          </StyledNav>
          <StyledNav bgColor="#fff" linkColor="#1a54e7">
            <Categories names={categories} />
            <a href="/"><img src={dotsImg} alt="misc" width="35"/></a>
          </StyledNav>
        </StyledHeader>
      </>
    )
}

export default Header;
