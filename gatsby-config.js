module.exports = {
  siteMetadata: {
    siteTitle: `HUSTLUG`,
    defaultTitle: `HUSTLUG`,
    siteTitleShort: `HUSTLUG`,
    siteDescription: `HUSTLUG DOC`,
    siteUrl: `https://doc.hlug.cn`,
    siteAuthor: `@HUSTLUG`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#FFA33C`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/jiajun-c/A2-doc`,
        baseDir: ``,
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocket Docs`,
        short_name: `Rocket Docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
