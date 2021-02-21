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
    {posts.map((post) => {
      let categories = false
      if (post.data.categories[0].category) {
        categories = post.data.categories.map((c) => c.category.document[0].data.name)
      }
      return <Post key={post.uid} node={post} categories={categories} />
    })}
  </StyledBlog>
)

Blog.propTypes = {
  posts: PropTypes.element.isRequired,
}

export default Blog
