import React from 'react'
import styled from "styled-components"
import EmailBg from "../assets/images/emailbg.jpg"
import { Button } from './Button'

const Email = () => {
    return (
        <EmailContainer>
            <div className="wave-transparent2">
      <svg className="svgwave" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="true" stroke="#181a25" strokeWidth="120" strokeLinecap="round"/>
      </svg>
    </div>
            <EmailContent>
                <h1 data-sal="slide-down"
                            data-sal-duration= "1500"
                            data-sal-delay="300"
                            data-sal-easing="ease">Deel je mooiste reis moment</h1>
                <p data-sal="slide-down"
                            data-sal-duration= "1500"
                            data-sal-delay="300"
                            data-sal-easing="ease">Deel met ons je mooiste reis of je favoriete vakantie moment</p>
                <form action="#">
                    <FomWrap data-sal="zoom-in"
                            data-sal-duration= "500"
                            data-sal-delay="400"
                            data-sal-easing="ease">
                        <label htmlFor="email">
                            <input type="email" placeholder="Vul je email adres in" id="email"/>
                        </label>
                        <Button 
                            as="button" 
                            type="submit" 
                            primary="true" 
                            round="true" 
                            css={`
                                height: 48px;

                                @media screen and (max-width: 768px) {
                                    width: 100%;
                                    min-width: 350px;
                                }  
                                
                                @media screen and (max-width: 400px) {
                                    width: 100%;
                                    min-width: 250px;
                                } 
                            `}
                        >
                            verzenden
                        </Button>
                    </FomWrap>
                </form>
            </EmailContent>
            <div className="wave-transparent">
      <svg className="svgwave" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#020312" strokeWidth="120" strokeLinecap="round"/>
      </svg>
    </div>
        </EmailContainer>
    )
}

export default Email

const EmailContainer = styled.div`
    position: relative;
    background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%,  rgba(0,0,0,0.5) 35%,  rgba(0,0,0,0.1) 100%), url(${EmailBg}) no-repeat center;
    background-size: cover;
    height: 450px;
    width: 100%;
    padding: 25rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EmailContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
    }

    form {
        z-index: 10;
    }
`

const FomWrap = styled.div`
    input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 350px;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
    }    

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            padding: 0 1rem;

            input {
                margin-bottom: 1rem;
                width: 100%;
                margin-right: 0;
            }
        }
`