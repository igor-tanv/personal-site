import React from "react"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"

// modeled after BlogLink.js
export default props => {
  return (
    <Card className="card-container" onClick={props.handleClickImage}>
      <Card.Img as={Img} fluid={props.featuredImage} />
    </Card>
  )
}