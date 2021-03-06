module.exports = {
  siteMetadata: {
    title: 'Fx Concepts',
    description: 'Quickly stub out landing pages for product concepts',
    author: 'jgruen@mozilla.com',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'concepts',
        path: `${__dirname}/src/concepts`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/firefox-logo.png', // This path is relative to the root of the site.
      },
    },
  ],
};
