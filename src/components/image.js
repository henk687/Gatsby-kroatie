import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./image.css"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jepg)/"}, name: {nin: ["kroatievlag", "vakantiehuis"]}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxHeight: 600, maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      } 
    `)

  return (
    <div className="image-container-black">
      <h1>Kornati Eilanden</h1>
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
