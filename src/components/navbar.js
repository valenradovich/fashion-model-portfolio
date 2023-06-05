import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query NavbarQuery {
        site {
            siteMetadata {
            author {
                name
                summary
            }
            social {
                twitter
            }
            }
        }
        }
    `)
    
    return (
        <div>
            <nav className="menu">
                <input type="checkbox" id="check"></input>
                <label for="check" className="checkbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/></svg>
                </label>  
                <div className="enlace">
                    <a href="/"className="logo">MATEO RADOVICH</a>
                </div>                                  
                    <ul>
                        <li className="item">
                            <Link to="/about">ABOUT</Link>                           
                        </li>
                        <li className="item">
                            <a href="mailto:mateofernandezrado@gmail.com" target="_blank" rel="noopener noreferrer">CONTACT</a>
                        </li>
                        <li className="item">
                            <a href="https://www.instagram.com/mateorado_" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#060606" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>                                
                            </a>
                        </li>
                    </ul>
            </nav>
        </div>

    )
}

export default Navbar





