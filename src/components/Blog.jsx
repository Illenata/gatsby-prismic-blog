import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import Post from './Post'

const StyledBlog = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem -2rem 0 0;
  width: 66.6rem;
`

const Blog = ({ posts }) => (
  <StyledBlog>
    {posts.map((post) => (
      <Post key={post.uid} node={post} />
    ))}
  </StyledBlog>
)

Blog.propTypes = {
  posts: PropTypes.object.isRequired,
}

export default Blog
