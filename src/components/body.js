/* Create Body component using react, it's a responsive body, with 2 columns */
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const Body = () => {
    const data = useStaticQuery(graphql`
        query BodyQuery {
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
    
    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author
    const social = data.site.siteMetadata?.social
    
    return (
        <div>
            <div  className="body-global-wrapper">
                <div className="row column">
                    <div className="image-container titleimage">
                        <StaticImage 
                                    layout="constrained"
                                    src="../images/mateo_title.JPG"
                                    alt="Header picture"
                                    backgroundColor="transparent"
                                    placeholder="none"                                    
                                    quality={95}
                                    transformOptions={{fit: "fill"}}                                                                    
                        />                            
                    </div>
                </div>                    
                <br></br>
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid1.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid2.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid3.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid4.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>                                                                     
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid5.jpeg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid6.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>                                                                     
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid7.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid8.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>                                                                     
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid9.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid10.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>                                                                     
                <div className="row">
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid11.jpeg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                            />
                        </div>
                    </div>
                    <div className="column">
                        <div className="image-container">
                            <StaticImage 
                                        layout="constrained"
                                        src="../images/mateo_grid12.jpg"
                                        alt="Model picture"
                                        backgroundColor="transparent"
                                        placeholder="none"
                                        quality={95}
                                        transformOptions={{fit: "fill"}}

                                />
                        </div>                        
                    </div>
                </div>                                                                                    
            </div> 
            <div  className="footer-body">
                <h6>Built with 🖤 by <a href="https://www.instagram.com/valenradovich">Valen Radovich</a></h6>
            </div>
        </div>
    )
}

export default Body
