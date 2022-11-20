import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../componets/Layout"

export default function Home() {
return (
  <Layout>
  
   <main className="page">
     <header className="hero">
       <StaticImage src="../assets/images/main.jpeg"
       alt="eggs"
       className="hero-img"
       placeholder="tracedSVG"
       layout="fullWidth"
        />
     <div className="hero-container">
       <div className="hero-text">
         <h1>Simply Recipes</h1>
         <h3>no fluff, just recipes</h3>
       </div>
     </div>
     </header>
   </main>
  
  </Layout>
)
}
