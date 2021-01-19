import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./image.css"


const Image = () => {
  const data = useStaticQuery(graphql`
      query {
        allFile(filter: {extension: {regex: "/(jpg)|(png)|(jepg)/"}, name: {in: ["eten", "eten2", "eten3", "eten4", "eten5", "eten6", "eten7", "eten8", "eten9", "eten10"]}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxHeight: 600, maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)

  return (
    <div className="image-container">
      <h1 data-sal="slide-up" data-sal-duration= "2000" data-sal-delay="100" data-sal-easing="ease">Eten en Drinken</h1>
      <div className="image-grid">
      {data.allFile.edges.map((image, key) => (
          <Img key={key}
          className="image-item"
          fluid={image.node.childImageSharp.fluid}
          />
      ))}
      </div> 
    </div>  
  )
}

export default Image
