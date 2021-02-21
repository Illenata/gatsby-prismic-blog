import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const StyledPost = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  margin: 0 2rem 2rem 0;
  transition: all 0.5s;
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: #eaf3fd;
  }

  p {
    margin-bottom: 0.5rem;
    font-family: 'PT Serif', serif;
  }
`

const StyledImage = styled.div`
  display: flex;
  align-items: flex-end;
  background: ${(props) => props.bgUrl};
  background-size: cover;
  width: 100%;
  height: ${(props) => props.height};
  color: #fff;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0 0.7rem;
    height: 2rem;
    background: ${(props) => props.bgc};
  }
`

const StyledSubtitle = styled.div`
  display: flex;
  color: #b0b0b0;
  font-size: 0.7rem;
  padding-bottom: 0.7rem;
`

const Post = ({ node }) => {
  let width = '20.2rem'
  let height = '13.8rem'
  let PostBody = {}
  let Subtitle = {}

  if (node.data.dimension === 2) {
    width = '31.3rem'
    height = '14.4rem'
  } else if (node.data.dimension === 3) {
    width = '66.6rem'
    height = '22.2rem'

    PostBody = {
      zIndex: '1',
      position: 'absolute',
      bottom: '1.7rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 10rem',
      color: '#fff',
      fontSize: '1.8rem',
      textAlign: 'center',
    }

    Subtitle = {
      alignSelf: 'flex-end',
      margin: '1rem -8rem 0 0',
    }
  }

  let background = 'lightblue'
  if (node.data.body) {
    const image = node.data.body.filter((s) => s.slice_type === 'image')
    background = `url(${image[0].primary.image.url})`
  }

  let categoryColor = '#000'
  let categoryName = 'Default'
  if (node.data.categories[0].category) {
    categoryColor = node.data.categories[0].category.document[0].data.color
    categoryName = node.data.categories[0].category.document[0].data.name
  }

  let author = 'John Doe'
  let authorUrl = '#'
  if (node.data.author) {
    authorUrl = node.data.author.document[0].data.body[0].primary.link.url
    author = node.data.author.document[0].data.body[0].primary.label.text
  }

  return (
    <StyledPost href="#" width={width}>
      <StyledImage bgUrl={background} height={height} bgc={categoryColor}>
        <div>{categoryName}</div>
      </StyledImage>
      <div style={PostBody}>
        <p>{node.data.title.text}</p>
        <StyledSubtitle style={Subtitle}>
          {node.data.date ? node.data.date : '01.01.2021'} | &nbsp;
          <a href={authorUrl}>{author}</a>
        </StyledSubtitle>
      </div>
    </StyledPost>
  )
}

Post.propTypes = {
  node: PropTypes.element.isRequired,
}

export default Post
