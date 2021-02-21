import React from 'react';
import styled from '@emotion/styled';

const StyledPost = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${props => props.width};
  margin: 0 2rem 2rem 0;
  transition: all .5s;
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: #eaf3fd;
  }

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
  padding-bottom: .7rem;
`

const Post = ({ node }) => {
  let width = '20.2rem',
      height = '13.8rem',
      PostBody = {},
      Subtitle = {};

  if (node.data.dimension === 2) {
    width = '31.3rem';
    height = '14.4rem';
  } else if (node.data.dimension === 1) {
    width = '66.6rem';
    height = '22.2rem';

    PostBody = {
      zIndex: "1",
      position: "absolute",
      bottom: "1.7rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0 10rem",
      color: "#fff",
      fontSize: "1.8rem",
      textAlign: "center",
    };

    Subtitle = {
      alignSelf: "flex-end",
      margin: "1rem -8rem 0 0"
    }
  }

  const image = node.data.body.filter((s) => {
    return s.slice_type === 'image';
  })

  return (
    <StyledPost  href="#" width={width}>
      <StyledImage bgUrl={image[0].primary.image.url} height={height} bgc={node.data.categories[0].category.document[0].data.color}>
        <div>{node.data.categories[0].category.document[0].data.name}</div>
      </StyledImage>
      <div style={PostBody}>
        <p>{node.data.title.text}</p>
        <StyledSubtitle style={Subtitle}>
          {node.data.date} | &nbsp;
          <a
            href={node.data.author.document[0].data.body[0].primary.link.url}>
            {node.data.author.document[0].data.body[0].primary.label.text}
          </a>
        </StyledSubtitle>
      </div>
    </StyledPost>
  )
}

export default Post;