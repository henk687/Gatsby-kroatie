import React from 'react'
import styled from "styled-components"
import Img from 'gatsby-image'
import {ImLocation} from "react-icons/im"
import {IoMdInformationCircleOutline} from "react-icons/io"
import {useStaticQuery, graphql} from 'gatsby'

const Info = () => {
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
        <InfoContainer>
            <Topline data-sal="slide-right" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
                Bestemming
            </Topline>
            <Description data-sal="slide-right" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
                Rastoke
            </Description>
            <Contentwrapper>
                <ColumnOne>
                    <Info data-sal="slide-right" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
                        <ImLocation
                            css={`
                                color: #3fffa8;
                                font-size: 2rem;
                                margin-bottom: 1rem;
                            `}
                        />
                        <h3>Locatie</h3>
                        <p>Rastoke is een dorp, gelegen in de stad Slunj. Op zo’n 1,5 rijden van Zagreb in de regio Kordun.</p>
                    </Info>
                    <Info data-sal="slide-right" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
                        <IoMdInformationCircleOutline
                            css={`
                                color: #b210a8;
                                font-size: 2rem;
                                margin-bottom: 1rem;
                            `}
                        />
                        <h3>Informatie</h3>
                        <p>Rastoke staat bekend om de goed bewaarde molens, de vele watervallen en de Slunjčica-rivier die hier samenkomt met de rivier de Korana. </p>
                        <p>De Korana rivier ontstaat in het nationaal park Plitvice dat maar 33 km verderop ligt. Het is dan ook niet gek dat Rastoke ook wel “klein Plitvice” wordt genoemd!</p> 
                    </Info>
                </ColumnOne>
                <ColumnTwo data-sal="slide-down" data-sal-duration= "2000" data-sal-delay="300" data-sal-easing="ease">
                    {data.allFile.edges.map((image, key) => (
                        <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                    ))}
                    
                </ColumnTwo>
            </Contentwrapper>
        </InfoContainer>
    )
}

export default Info

const InfoContainer = styled.div`
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

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const Info = styled.div`
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
