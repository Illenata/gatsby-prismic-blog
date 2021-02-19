import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const StyledHeader = styled.nav`
  padding-bottom: 2rem;
  background-color: #1a53e7;
  a {
    color: #fff;
    font-weight: 400;
    font-style: normal;
    font-family: 'Source Sans Pro', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial',
      sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`

const Header = () => {
  // const { invert } = props
  return (
    <StyledHeader>
      <Link to="/" aria-label="Back to Home">
        Blog template
      </Link>
    </StyledHeader>
  )
}

export default Header

// Header.propTypes = {
//   invert: PropTypes.bool,
// }

// Header.defaultProps = {
//   invert: false,
// }
