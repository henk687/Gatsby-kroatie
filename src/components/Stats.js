import React from 'react'
import styled from "styled-components"
import {GiEarthAfricaEurope} from "react-icons/gi"
import {MdAirplanemodeActive, MdDirectionsCar} from "react-icons/md"
import {BsFillPeopleFill} from "react-icons/bs"

const StatsData = [
    {
        icon: (
            <GiEarthAfricaEurope 
                css={`
                    color: #047bf1;
                `}
            />
        ),
        title: "Republiek Kroatië",
        desc: "Hoofdstad: Zagreb (792.875 inwoners)"
    },
    {
        icon: (
            <BsFillPeopleFill 
                css={`
                    color: #3af576;
                `}
            />
        ),
        title: "Aantal inwoners",
        desc: "4,4 miljoen"
    },
    {
        icon: (
            <MdAirplanemodeActive 
                css={`
                    color: #f3a82e;
                `}
            />
        ),
        title: "Vliegen",
        desc: "Kroatië is ongeveer 2 uur vliegen vanaf amsterdam"
    },
    {
        icon: (
            <MdDirectionsCar 
                css={`
                    color: #f34f2e;
                `}
            />
        ),
        title: "Huurauto",
        desc: "We hebben in Kroatië ongeveer 1250 km afgelegd met onze huurauto"
    },
]

const Stats = () => {
    return (
        <StatsContainer>
            <Heading data-sal="slide-right"
                            data-sal-duration= "2000"
                            data-sal-delay="300"
                            data-sal-easing="ease">Statistieken</Heading>
            <Wrapper data-sal="slide-right"
                            data-sal-duration= "2000"
                            data-sal-delay="300"
                            data-sal-easing="ease">
                {StatsData.map((item, index) => {
                    return (
                        <StatsBox key={index}>
                            <Icon>{item.icon}</Icon>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                        </StatsBox>
                    )
                })}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats

const StatsContainer = styled.div`
    width: 100%;
    /*background: #fff;*/
    background: #181a25;
    /*color: #000;*/
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4rem calc((100vw - 1300px) / 2);   
`
const Heading = styled.h1`
    text-align: start;
    font-size: clamp(1.5rem, 5vw, 2rem);
    margin-bottom: 3rem;
    padding: 0 2rem;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const StatsBox = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
`

const Icon = styled.div`
    font-size: 3rem;
    margin-bottom: 1rem;  
`

const Title = styled.p`
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    margin-bottom: 0.5rem;  
    color: #f26a2e;  
`

const Description = styled.p`
    color: #fff;
`