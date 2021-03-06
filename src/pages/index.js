import React from "react"
import Hero from "../components/Hero"
import Info from "../components/Info"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Bestemmingen" />
    <div className="wave-white">
      <svg className="svgwave" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#020312" strokeWidth="120" strokeLinecap="round"/>
      </svg>
    </div>
    <Info />
    <div className="wave">
      <svg className="svgwave" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#181a25" strokeWidth="120" strokeLinecap="round"/>
      </svg>
    </div>
    <Stats />
    <div className="wave-white">
      <svg className="svgwave" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#020312" strokeWidth="120" strokeLinecap="round"/>
      </svg>
    </div>
  </Layout>
)

export default IndexPage
