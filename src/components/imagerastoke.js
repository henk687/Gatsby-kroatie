import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./image.css"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
        allFile(filter: {extension: {regex: "/(jpg)|(png)|(jepg)/"}, name: {in: ["rastoke", "rastoke2", "rastoke3", "rastoke4", "rastoke5", "rastoke6", "rastoke7", "rastoke8", "rastoke9", "rastoke10"]}}) {
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
      <h1>Rastoke</h1>
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
