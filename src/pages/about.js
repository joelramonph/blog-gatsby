import React from "react";
import Layout from "../componets/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>
              I'm baby godard Brooklyn gastropub.
              
            </h2>
            <p>
              Fashion axe literally plaid authentic polaroid. Adaptogen
              aesthetic edison bulb, wayfarers shaman celiac normcore mukbang
              four dollar toast plaid tote bag.
            </p>
            <p>
              Four dollar toast activated charcoal mukbang health goth tofu.
              Readymade man bun flexitarian four dollar toast.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>

          <StaticImage
            src="../assets/images/about.jpeg"
            alt="persont salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
