import React from 'react'
import styled from "styled-components"
import Img from 'gatsby-image'
import {ImLocation} from "react-icons/im"
import {IoMdInformationCircleOutline} from "react-icons/io"
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
            <Topline data-sal="slide-right" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
                    Bestemming
            </Topline>
            <Description data-sal="slide-right" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
                    Turist Grabovac in Kroatië
            </Description>
            <Contentwrapper>
                <ColumnOne>
                    <Testimonial data-sal="slide-right" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
                        <ImLocation
                            css={`
                                color: #3fffa8;
                                font-size: 2rem;
                                margin-bottom: 1rem;
                            `}
                        />
                        <h3>Kroatië</h3>
                        <p>Kroatië, officieel Republiek Kroatië, is een land in Zuidoost-Europa.</p>
                        <p>Het grenst aan Slovenië en Hongarije in het noorden, Bosnië en Montenegro in het zuiden en Servië in het oosten.</p> 
                        <p>In het westen ligt de Adriatische Zee, waar de Kroatische territoriale wateren grenzen aan die van Italië.</p>
                    </Testimonial >
                    <Testimonial data-sal="slide-right" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
                        <IoMdInformationCircleOutline
                            css={`
                                color: #b210a8;
                                font-size: 2rem;
                                margin-bottom: 1rem;
                            `}
                        />
                        <h3>Turist Grabovac</h3>
                        <p>We verbleven in een bungalow op camping Turist Grabovac.</p>
                        <p>Deze terrassencamping en camping met hellend terrein heeft plaatsen met afbakening, met schaduw, zonder schaduw en met enige schaduw.</p> 
                        <p>Er is mogelijkheid tot het huren van kamers, Studio's, appartementen en bungalows.</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo data-sal="slide-down" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
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
    background: #020312;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
    z-index: 2;
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
    z-index: 2;

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
