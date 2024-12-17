// gatsby-node.js

module.exports = {
  siteMetadata: {
    title: `Igor Tatarinov`,
    author: `Igor Tatarinov`,
    firstName: `Igor`,
    lastName: `Tatarinov`,
    description: `Igor Tatarinov's personal site`,
    occupation_one: `Fullstack Developer`,
    occupation_two: `AWS Solutions Architect`,
    keywords: [`Igor`, `Tatarinov`, `Personal`, `Blog`, `Resume`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `Software Engineer`,
      `Business Development Manager`,
      `Real Martial Artist`
    ],
    readingList: [
      {
        title: `The Intelligent Investor`,
        author: `Benjamin Graham`,
        link: `https://www.goodreads.com/book/show/106835.The_Intelligent_Investor`,
      },
      {
        title: `It Doesn't Have to be Crazy at Work`,
        author: `David Heinemeier Hansson`,
        link: `https://www.goodreads.com/book/show/38900866-it-doesn-t-have-to-be-crazy-at-work`,
      },
      {
        title: `Chronicles of the Crusades`,
        author: `Jean de Joinville`,
        link: `https://www.goodreads.com/book/show/409573.Chronicles_of_the_Crusades`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Igor Tatarinov's Personal Site`,
        short_name: `I.Tatarinov`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
  pathPrefix: "/personal-site"
}
