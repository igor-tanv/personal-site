import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, CertificateLink } from "../components"
import { SEO, Utils } from "../utils"
import Container from "react-bootstrap/Container"

//modeled after blog.js
export default ({ data }) => {
  const allFeaturedImages = data.allFile.edges || []
  console.log(allFeaturedImages, 10)

  return (
    <PageLayout>
      <SEO title="Certificates" />
      <PageTitle title="Certificates" />
      <Container className="text-left">
        {allFeaturedImages.map(({ node }) => (
          <div key={node.id} className="p-3">
            <CertificateLink
              featuredImage={node.childImageSharp.fluid}
            />
          </div>
        ))}
      </Container>

    </PageLayout>
  )
}

export const query = graphql`
  query {
    allDirectory(filter: {relativePath: {eq: "content/certificates"}}) {
      edges {
        node {
          id
        }
      }
    }
    allFile(filter: {extension: {eq: "jpg"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`
