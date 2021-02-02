import React from "react"
import { Button } from "../components/Button"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Niet gevonden" />
    <Error>
      <h1>404</h1>
      <p>Pagina niet gevonden.</p>
      <Button to="/" round="true" big="true">Naar Startpagina</Button>
    </Error>
    <div className="wave-white">
      <svg className="svgwave" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#020312" strokeWidth="120" strokeLinecap="round"/>
      </svg>
    </div>
  </Layout>
)

export default NotFoundPage

const Error = styled.div` 
    background: #181a25;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: clamp(4rem, 10vw, 20rem);
      margin-bottom: 1rem;
      color: #fff;
    }

    p {
      font-size: clamp(2rem, 3vw, 10rem);
      margin-bottom: 2rem;
      color: #fff;
    }
`