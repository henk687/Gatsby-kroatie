import React from 'react'
import styled from "styled-components"
import Img from 'gatsby-image'
import {ImLocation} from "react-icons/im"
import {useStaticQuery, graphql} from 'gatsby'

const Testimonials = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {ext: {regex: "/(jpg)|(png)|(jepg)/"}, name: {in: ["kroatievlag", "vakantiehuis"]}}) {
          edges {
            node {
              childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      } 
    `)
    return (
        <TestimonialsContainer>
            <Topline>
                Bestemming
            </Topline>
            <Description>
                Plitvice Meren
            </Description>
            <Contentwrapper>
                <ColumnOne>
                    <Testimonial>
                        <ImLocation
                            css={`
                                color: #3fffa8;
                                font-size: 2rem;
                                margin-bottom: 1rem;
                            `}
                        />
                        <h3>Locatie</h3>
                        <p>Het Nationaal Park Plitvicemeren is een nationaal park in de provincie Lika-Senj dicht bij Plitvička Jezera in Kroatië.</p>
                    </Testimonial>
                    <Testimonial>
                        
                        <h3>Informatie</h3>
                        <p>Plitvice staat bekend om de 90 prachtige watervallen, de 16 smaragdgroene meren en de ongerepte natuur. </p>
                        <p>Vanwege deze bijzondere natuur hebben de Plitvice meren dan ook de status nationaal park gekregen. </p> 
                        <p>Het park heeft een oppervlakte van bijna 300 km2. Dit is dan ook het grootste en oudste nationaal park van Kroatië.</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    {data.allFile.edges.map((image, key) => (
                        <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                    ))}
                    
                </ColumnTwo>
            </Contentwrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    /*background: #fcfcfc;*/
    background: #181a25;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
`

const Topline = styled.p`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`

const Description = styled.p`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 6vw, 4rem);
    font-weight: bold;
    color: #fff;
`

const Contentwrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
        color: #f26a2e;
    }

    p {
        /*color: 3b3b3b;*/
        color: #fff;
    }
`

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const Images = styled(Img)`
    border-radius: 10px;
    height: 100%;
`
