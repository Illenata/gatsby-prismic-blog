// import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
// import styled from '@emotion/styled'
// import { Layout, Listing, Wrapper, SliceZone, Title, SEO, Header } from '../components'
// import Categories from '../components/Listing/Categories'
// import Header from '../components/Header';
// import Post from '../components/Post';

// const PostPage = ({data}) => {
//   const {
//     homepage, posts, categories
//   } = data;

//   return (
//     <>
//       <Header data={homepage.data.title.text} categories={categories} />
//       <Post key={post.uid} node={post} categories={categories} />
//     </>
//   )
// }

// export default PostPage;

// const PostWrapper = Wrapper.withComponent('main')

// const Post = ({ data: { prismicPost, posts }, location }) => {
//   const { data } = prismicPost
//   let categories = false
//   if (data.categories[0].category) {
//     categories = data.categories.map((c) => c.category.document[0].data.name)
//   }
//   return (
//     <Layout customSEO>
//       <SEO
//         title={`${data.title.text} | ${website.titleAlt}`}
//         pathname={location.pathname}
//         desc={data.description}
//         node={prismicPost}
//         article
//       />
//       <Hero>
//         <Wrapper>
//           <Header />
//           <Headline>
//             {data.date} — {categories && <Categories categories={categories} />}
//           </Headline>
//           <h1>{data.title.text}</h1>
//         </Wrapper>
//       </Hero>
//       <PostWrapper id={website.skipNavId}>
//         <SliceZone allSlices={data.body} />
//         <Title style={{ marginTop: '4rem' }}>Recent posts</Title>
//         <Listing posts={posts.nodes} />
//       </PostWrapper>
//     </Layout>
//   )
// }

// export default Post

// Post.propTypes = {
//   data: PropTypes.shape({
//     prismicPost: PropTypes.object.isRequired,
//     posts: PropTypes.shape({
//       nodes: PropTypes.array.isRequired,
//     }),
//   }).isRequired,
//   location: PropTypes.object.isRequired,
// }

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
query PostQuery {
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
