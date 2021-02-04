import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import Card from "react-bootstrap/Card"

// modeled after BlogLink.js
export default props => {
  return (
    <Card className="card-container">
      <Card.Img as={Img} fluid={props.featuredImage} className="h-50" />
    </Card>
  )
}