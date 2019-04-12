module.exports = {
  siteMetadata: {
    siteUrl: 'https://tinney.dev',
    title: 'colin tinney',
    contact: {
      name: 'Colin Tinney',
      email: 'colintinney@gmail.com',
      displayedEmail: 'colintinney [at] gmail.com',
      resumeUrl: 'https://drive.google.com/open?id=1pBYBPWx7LyOyUcabGnse4_ItVXkwoufG',
    },
    social: {
      github: 'cdtinney',
      linkedin: 'cdtinney',
      fiveHundredPx: 'colintinney',
    },
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-eslint',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/posts`,
        name: 'posts',
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/projects`,
        name: 'projects',
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/about/about.md`,
        name: 'about',
      },
    }, {
      resolve: 'gatsby-transformer-remark',
      options: {
        // File excerpts will start at the beginning
        // and end at the custom separator.
        excerpt_separator: '<!-- end -->',
        plugins: [{
          // IMPORTANT: This must be before `prism`.
          // See: https://github.com/gatsbyjs/gatsby/issues/5764
          resolve: 'gatsby-remark-autolink-headers',
        }, {
          resolve: 'gatsby-remark-prismjs',
        }, {
          resolve: 'gatsby-remark-images',
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 590,
            // Quality level of generated images (1-100).
            // The default is 50.
            quality: 100,
            // Wrapper <div> styles.
            wrapperStyle:
              'margin: 1rem;'
              + 'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);',
          },
        }],
      },
    }, {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-87415138-3',
        // Puts tracking script in the head instead of the body
        head: false,
        // Anonymizes users and respects do-not-track
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
