import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header';
import Main from '../components/Main';
import Blog from '../components/Blog';
import Signup from '../components/Signup';
import Footer from '../components/Footer';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  font-family: 'PT Sans', sans-serif;
`

const Index = ({data}) => {
    const {
      homepage, posts, categories
    } = data;
    return (
      <StyledWrapper>
        <Header data={homepage.data.title.text} categories={categories}/>
        <Main data={homepage.data.content.html} />
        <Blog posts={posts.nodes} />
        <Signup />
        <Footer data={homepage.data.footer.html} />
      </StyledWrapper>
    )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    homepage: prismicHomepage {
      data {
        title {
          text
        }
        content {
          text
          html
        }
        footer {
          text
          html
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      nodes {
        uid
        data {
          author {
            document {
              data {
                body {
                  primary {
                    link {
                      url
                    }
                    label {
                      text
                    }
                  }
                }
              }
            }
          }
          dimension
          body {
            ... on PrismicPostBodyImage {
              id
              slice_type
              primary {
                image {
                  url
                }
              }
            }
            ... on PrismicPostBodyCodeBlock {
              id
            }
            ... on PrismicPostBodyQuote {
              id
            }
            ... on PrismicPostBodyText {
              id
            }
          }
          title {
            text
          }
          date(formatString: "DD.MM.YYYY")
          categories {
            category {
              document {
                data {
                  color
                  name
                }
              }
            }
          }
        }
      }
    }
    categories: allPrismicCategory {
      nodes {
        data {
          name
        }
      }
    }
  }
`
