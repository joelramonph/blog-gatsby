/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

  siteMetadata: {
   title: "Simply Recipes",
   description: "Nice and clean recipes sites",
   author: "@joelparra",
   person: {name: "Joel", age:52},
   simpleData: ["item 1", "item 2"],
   complexData: [
     {name: "Joel", age:52},
     {name: "Stephani", age:12},
   ],

  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  
  ],
}
