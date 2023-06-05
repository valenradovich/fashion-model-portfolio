import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"


const About = ({ data, location }) => {  

  return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="body-global-wrapper">
          <br></br>
          <p className="titleimage">Nací y resido en la ciudad de Mar del Plata, tengo 19 años y estoy incursionando en el mundo de la moda. Soy estudiante de Marketing, y me apasiona la posibilidad de poder conocer nuevas personas, lugares y culturas. 
            <br></br>
            <br></br>
            <u>Medidas:</u>
            <br></br>
            Altura: 1.86 m
            <br></br>
            Talle de zapatos: 42.5
            <br></br>
            <br></br>
            <a href="mailto:mateofernandezrado@gmail.com" target="_blank" rel="noopener noreferrer">Enviame un email</a> para contactarme o escribime por <a href="https://www.instagram.com/mateorado_" target="_blank" rel="noopener noreferrer">Instagram</a>.
          </p>
        </div>
        <div>
          <Footer></Footer>
        </div>        
      </div>    
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
