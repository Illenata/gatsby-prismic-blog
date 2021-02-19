import React from 'react';
import styled from '@emotion/styled';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  margin: 0 2rem 1rem 0;
  padding-bottom: .7rem;
  transition: all .5s;

  &:hover {
    background-color: #eaf3fd;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #000;

  p {
    margin-bottom: .5rem;
  }
`

const StyledImage = styled.div`
  display: flex;
  align-items: flex-end;
  background: url(${props => props.bgUrl});
  background-size: cover;
  width: 100%;
  height: ${props => props.height};
  color: #fff;

  div {
    display: flex;
    align-items: center;  
    margin-bottom: 1rem;
    padding: 0 .7rem;
    height: 2rem;
    background: ${props => props.bgc}
  }
`

const StyledSubtitle = styled.div`
  display: flex;
  color: #b0b0b0;
  font-size: .7rem;
`

const Post = ({ node, index }) => {
  let width = '20.2rem';
  let height= '13.8rem';
  if (index < 2 || index > 8) {
    width = '31.3rem';
    height = '14.4rem';
  } else if (index === 2) {
    width = '66.6rem';
    height = '22.2rem';
  }
  const image = node.data.body.filter((s) => {
    return s.slice_type === 'image';
  })

  return (
    <StyledPost width={width}>
      <StyledLink href={node.uid}>
        <StyledImage bgUrl={image[0].primary.image.url} height={height} bgc={node.data.categories[0].category.document[0].data.color}>
          <div>{node.data.categories[0].category.document[0].data.name}</div>
        </StyledImage>
        <p>{node.data.title.text}</p>
      </StyledLink>
      <StyledSubtitle>
        {node.data.date} | &nbsp;
        <a
          href={node.data.author.document[0].data.body[0].primary.link.url}>
          {node.data.author.document[0].data.body[0].primary.label.text}
        </a>
      </StyledSubtitle>
    </StyledPost>
  )
}

export default Post;