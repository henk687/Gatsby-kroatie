import React from 'react'
import styled from "styled-components"
import {GiEarthAfricaEurope} from "react-icons/gi"
import {MdAirplanemodeActive, MdDirectionsCar} from "react-icons/md"
import {FaMoneyCheck} from "react-icons/fa"

const StatsData = [
    {
        icon: (
            <GiEarthAfricaEurope 
                css={`
                    color: #047bf1;
                `}
            />
        ),
        title: "Meer dan 100 bestemmingen",
        desc: "Reis naar meer dan 100 bestemmingen"
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
    {
        icon: (
            <FaMoneyCheck 
                css={`
                    color: #3af576;
                `}
            />
        ),
        title: "De beste aanbiedingen",
        desc: "Wij bieden de beste prijzen"
    },
]

const Stats = () => {
    return (
        <StatsContainer>
            <Heading>Statistieken</Heading>
            <Wrapper>
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
    background: #fff;
    color: #000;
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
`

const Description = styled.p`
     
`