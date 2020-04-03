module.exports = {
  siteMetadata: {
    title: 'Weekly | Budget on a week',
    author: 'Weekly, LLC',
    description:
      "Weekly is an app that helps you stick to a budget by making it simple to understand what you have to spend.  Discover your weekly allowance then track your daily spending to stay within your allowance amount. Get out of debt, save for a goal, but most importantly stop wondering what's happening with your money.",
    siteUrl: 'https://weeklybudgeting.com/',
  },
  pathPrefix: '/gatsby-starter-blog',
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'content',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-139975716-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Weekly Budgeting`,
        short_name: `Weekly`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/weekly_icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat\:300,400,500,600,700`,
          // `source sans pro\:300,400,400i,500,600,700`,
        ],
        display: 'swap',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
};
