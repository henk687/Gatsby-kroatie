import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const Bestemmingen = () => (
  <Layout>
    <SEO title="Home" />
    <Testimonials />
    <div className="wave">
      <svg className="svgwave" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#181a25" strokeWidth="120" strokeLinecap="round"/>
      </svg>
    </div>
    <Testimonials />
    <div className="wave-white">
      <svg className="svgwave" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#020312" strokeWidth="120" strokeLinecap="round"/>
      </svg>
    </div>
    <Testimonials />
    <div className="wave">
      <svg className="svgwave" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#181a25" strokeWidth="120" strokeLinecap="round"/>
      </svg>
    </div>
    <Testimonials />
    <div className="wave-white">
      <svg className="svgwave" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
      <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="#020312" strokeWidth="120" strokeLinecap="round"/>
      </svg>
    </div>
  </Layout>
)

export default Bestemmingen
