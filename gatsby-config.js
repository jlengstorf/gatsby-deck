const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Gatsby MDX Deck'
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-mdx',
      options: {
        extensions: ['.mdx'],
        decks: [path.resolve('./decks')],
        root: __dirname,
        defaultLayouts: {
          default: require.resolve('./src/templates/slide.js'),
          slides: require.resolve('./src/templates/slide.js')
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'slides',
        path: `${__dirname}/decks/`
      }
    }
  ]
};
