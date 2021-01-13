import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import Imagehanoi from "../components/imagehanoi"
import Imagesapa from "../components/imagesapa"
import Imagehalongbay from "../components/imagehalongbay"

const Bestemmingen = () => (
  <Layout>
    <SEO title="Home" />
    <Imagehanoi />
    <Imagesapa />
    <Imagehalongbay />
    <Image />
  </Layout>
)

export default Bestemmingen
