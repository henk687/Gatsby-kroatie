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
                Velebit Gebergte
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
                        <h3>Locatie</h3>
                        <p>Velebit is een gebergte in het midden van Kroatië, langs de Dalmatische kust van de Adriatische Zee.</p> 
                        <p>Het massief loopt van het Noordwesten nabij Senj tot 145 km Zuidwesterlijker bij de bron van de rivier Zrmanja.</p>
                    </Testimonial>
                    <Testimonial data-sal="slide-right" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
                        <IoMdInformationCircleOutline
                            css={`
                                color: #b210a8;
                                font-size: 2rem;
                                margin-bottom: 1rem;
                            `}
                        />
                        <h3>Informatie</h3>
                        <p>Velebit heeft zijn status als nationaal park gekregen vanwege de vele diersoorten die hier leven zoals bijvoorbeeld de bruine beer en de verscheidenheid aan planten waaronder een groot aantal inheemse.  </p>
                        <p>Daarnaast is het berggebied met bergtoppen die boven de 1600/1700 meter uitkomen en van waar je een uitkijkt over de Adriatische zee ook echt prachtig.</p> 
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
