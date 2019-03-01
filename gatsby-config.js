module.exports = {
  siteMetadata: {
    title: 'colin tinney',
    url: 'https://colintinney.com',
    contact: {
      name: 'Colin Tinney',
      email: 'colintinney@gmail.com',
      displayedEmail: 'colintinney [at] gmail.com',
      resumeUrl: 'https://drive.google.com/open?id=1l5p9B44vyGf0fjST5Tm-I-zXBwQd2GXtUj_RUunx3MU', 
    },
    social: {
      github: 'cdtinney',
      linkedin: 'cdtinney',
      fiveHundredPx: 'colintinney',
    },
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet', {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/posts`,
        name: 'posts',
      },
    },{ 
      resolve: 'gatsby-transformer-remark',
    },
  ],
};
