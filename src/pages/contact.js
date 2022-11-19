import React from "react";
import Layout from "../componets/Layout";

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
        <article className="contact-info">

          <h3>Quiero contactarte</h3>
          <p>
            I'm baby bitters tbh skateboard, actually hashtag vinyl occupy
            portland pitchfork put a bird on it enamel pin intelligentsia
            
            </p>
            <p>

            salvia. Distillery bodega boys organic XOXO affogato activated
            charcoal pickled single-origin coffee try-hard austin raclette.
            </p>

            <p>
            salvia. Distillery bodega boys organic XOXO affogato activated
            charcoal pickled single-origin coffee try-hard austin raclette.
            </p>
           
        </article>

       <article >
        <form className="form contac-form">
          <div className="form-row">
            <label htmlFor="name">your name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="form-row">
            <label htmlFor="email">email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="form-row">
            <label htmlFor="message">message</label>
            <textarea name="message" id="message"></textarea>
          </div>
            <button type="submit" className="btn block"> 
              submit
            </button>
        </form>
       </article>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
