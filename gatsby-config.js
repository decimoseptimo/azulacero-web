require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const CONTENTFUL_HOST = (process.env.NODE_ENV === 'production') ? "cdn.contentful.com" : "preview.contentful.com"
console.log(CONTENTFUL_HOST)

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `./src/favicon.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-112633310-3",
        // Puts tracking script in the head instead of the body
        // head: false,
        // Setting this parameter is optional
        // anonymize: true,
        // Setting this parameter is also optional
        // respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
      },
    },
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     contentTypes: [
    //       // List of the Content Types you want to be able to request from Gatsby.
    //       `article`,
    //       `user`,
    //     ],
    //   },
    // }
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0iq1qo4qtprv`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
		host: CONTENTFUL_HOST
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              {
                  resolve: `gatsby-remark-images-contentful`,
                  options: {
                      // It's important to specify the maxWidth (in pixels) of
                      // the content container as this plugin uses this as the
                      // base for generating different widths of each image.
                      maxWidth: 1200,
                      linkImagesToOriginal: false,
                  },
              },
          ],
      },
    },
  ],
};
