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

const postBodyStyle = {
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

const postSubtitleStyle = {
  alignSelf: 'flex-end',
  margin: '1rem -8rem 0 0',
}

const Post = ({ node }) => {
  const { author, body, categories, date, dimension, title } = node.data
  const category = categories[0].category.document[0].data
  const postAuthor = author.document[0].data.body[0].primary

  const getPostSize = () => {
    switch (dimension) {
      case 3:
        return {
          width: '66.6rem',
          height: '22.2rem',
        }
      case 2:
        return {
          width: '31.3rem',
          height: '14.4rem',
        }
      default:
        return {
          width: '20.2rem',
          height: '13.8rem',
        }
    }
  }

  const getPostBodyStyle = () => (dimension === 3 ? postBodyStyle : {})
  const getPostSubtitleStyle = () => (dimension === 3 ? postSubtitleStyle : {})

  const getBackground = () => {
    let background = 'lightblue'
    if (body) {
      const image = node.data.body.filter((s) => s.slice_type === 'image')
      background = `url(${image[0].primary.image.url})`
    }
    return background
  }

  const getCategoryColor = () => (category ? category.color : '#000')
  const getCategoryName = () => (category ? category.name : 'Default')
  const getAuthorName = () => (postAuthor ? postAuthor.label.text : 'John Doe')
  const getAuthorUrl = () => (postAuthor ? postAuthor.link.url : '#')

  return (
    <StyledPost href="#" width={getPostSize().width}>
      <StyledImage bgUrl={getBackground()} height={getPostSize().height} bgc={getCategoryColor()}>
        <div>{getCategoryName()}</div>
      </StyledImage>
      <div style={getPostBodyStyle()}>
        <p>{title.text}</p>
        <StyledSubtitle style={getPostSubtitleStyle()}>
          {date ? `${date}` : '01.01.2021'} | &nbsp;
          <a href={getAuthorUrl()}>{getAuthorName()}</a>
        </StyledSubtitle>
      </div>
    </StyledPost>
  )
}

Post.propTypes = {
  node: PropTypes.object.isRequired,
}

export default Post
