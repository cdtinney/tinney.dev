module.exports = {
  siteMetadata: {
    siteUrl: 'https://tinney.dev',
    title: 'colin tinney',
    contact: {
      name: 'Colin Tinney',
      email: 'colintinney@gmail.com',
      displayedEmail: 'colintinney [at] gmail.com',
      resumeUrl: 'https://drive.google.com/file/d/1TKfDYPRYclBrcLUoGJB5jMW-zvcR40_A/view?usp=sharing',
    },
    social: {
      github: 'cdtinney',
      linkedin: 'cdtinney',
    },
  },
  plugins: [
    'gatsby-plugin-sitemap', {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://tinney.dev',
        sitemap: 'https://www.tinney.dev/sitemap.xml',
        policy: [{
          userAgent: '*',
          allow: '/',
        }],
      },
    }, 'gatsby-plugin-eslint',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json', {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/posts`,
        name: 'posts',
        ignore: [
          process.env.NODE_ENV === 'production' && ['**/_drafts/**'],
        ],
      },
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data/projects/projects.json`,
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
          // Adds support for custom Markdown blocks.
          resolve: 'gatsby-remark-custom-blocks',
          options: {
            blocks: {
              boxShadow: {
                classes: 'box-shadow',
              },
            },
          },
        },
        ],
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
