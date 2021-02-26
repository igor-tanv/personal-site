import React, { useState } from "react"
import { graphql } from "gatsby"
import { PageLayout, PageTitle, CertificateLink } from "../components"
import { SEO, Utils } from "../utils"
import { Container, Col, Row, Modal, Image } from "react-bootstrap"

//modeled after blog.js
export default ({ data }) => {
  const allFeaturedImages = data.allFile.edges || []
  const [showedImage, setShowedImage] = useState(false);
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
              handleClickImage={() => {
                setShowedImage(node.childImageSharp.fluid)
              }}
            />
          </div>
        ))}
        <Modal show={!!showedImage} onHide={() => setShowedImage(false)} centered dialogClassName="modal-certificate">
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Image srcSet={showedImage.srcSet} width="100%"></Image>
            </Container>
          </Modal.Body>
        </Modal>
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
            fluid(maxWidth:400, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    } 
  }
`
