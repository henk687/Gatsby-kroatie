import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const Bestemmingen = () => (
  <Layout>
    <SEO title="Home" />
    <Trips heading="Bestemmingen" />
    <Testimonials />
    <Testimonials />
    <Testimonials />
    <Testimonials />
  </Layout>
)

export default Bestemmingen
