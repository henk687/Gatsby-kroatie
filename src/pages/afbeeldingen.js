import React from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const Bestemmingen = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips heading="Bestemmingen" />
    <Testimonials />
    <Stats />
    <Email />
  </Layout>
)

export default Bestemmingen
