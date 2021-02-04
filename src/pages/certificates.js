import React from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, CertificateLink } from "../components"
import { SEO, Utils } from "../utils"
import { Container, Col, Row } from "react-bootstrap"

//modeled after blog.js
export default ({ data }) => {
  const allFeaturedImages = data.allFile.edges || []

  return (
    <PageLayout>
      <SEO title="Certificates" />
      <PageTitle title="Certificates" />
      <Container
        fluid
        className="p-3 w-auto text-left d-flex flex-wrap justify-content-center"
      >
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
    allFile(filter: {extension: {eq: "jpg"}, dir: {regex: "/certificates/"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth:400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    } 
  }
`
