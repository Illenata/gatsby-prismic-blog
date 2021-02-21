import React, { useState } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import searchImg from '../../static/img/13.png'
import dotsImg from '../../static/img/14.png'

const StyledBg = styled.div`
  width: ${(props) => props.width};
  height: 4rem;
  background: ${(props) => props.bgColor};
`

const StyledHeader = styled.header`
  z-index: 1;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 66.6rem;
  height: 4rem;
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  height: 4rem;
  background-color: ${(props) => props.bgColor};

  a {
    margin: 0 1rem;
    color: ${(props) => props.linkColor};
    text-decoration: none;
    transition: all 0.5s;

    img {
      margin-top: 0.5rem;
    }
  }

  a:hover {
    color: ${(props) => props.colorHover};
  }
`

const Logo = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
`

const Categories = ({ names }) => {
  const [activeLink, setActiveLink] = useState('people')

  const click = (e) => {
    setActiveLink(e.target.textContent.toLowerCase())
  }

  const Category = styled.a`
    line-height: 3.7rem;
    border-bottom: 0.3rem solid ${(props) => props.borderColor};
  `

  return names.nodes.map((item) => (
    <Category
      href="#"
      onClick={click}
      borderColor={activeLink === item.data.name.toLowerCase() ? '#1a54e7' : 'transparent'}
    >
      {item.data.name}
    </Category>
  ))
}

const Header = ({ data, categories }) => (
  <>
    <div style={{ display: 'flex' }}>
      <StyledBg bgColor="#1a53e7" width="30vw" />
      <StyledBg bgColor="#fff" width="70vw" />
    </div>
    <StyledHeader>
      <div style={{ display: 'flex' }}>
        <StyledNav bgColor="#1a53e7" linkColor="#fff" colorHover="#ddf0f8">
          <Logo href="#">{data}</Logo>
        </StyledNav>
        <StyledNav bgColor="#fff" linkColor="gray" colorHover="#171732">
          <a href="#">
            <img src={searchImg} alt="search" width="30" />
          </a>
          <a href="#">About</a>
          <a href="#">Cooperation</a>
          <a href="#">Contact</a>
        </StyledNav>
      </div>
      <StyledNav bgColor="#fff" linkColor="#1a54e7" colorHover="#171732">
        <Categories names={categories} />
        <a href="#">
          <img src={dotsImg} alt="misc" width="35" />
        </a>
      </StyledNav>
    </StyledHeader>
  </>
)

Header.propTypes = {
  data: PropTypes.element.isRequired,
  categories: PropTypes.element.isRequired,
}

export default Header
