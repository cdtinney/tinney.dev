import React from 'react';
import PropTypes from 'prop-types';

import DefaultLayout from '../../layouts/DefaultLayout';

import Brand from '../../components/Brand';
import ContactCard from '../../components/ContactCard';
import PageLinks from '../../components/PageLinks';

import classes from './Home.module.css';

export default function Home({
  data = {},
}) {
  const {
    allMarkdownRemark: {
      edges = [],
    } = {},
    site: {
      siteMetadata: {
        title = '',
        contact = {},
        social = {},
      } = {},
    } = {},
  } = data;

  if (!title) {
    return null;
  }

  const pageDescription = 'A personal website';
  const pageLinks = [{
    to: '/blog',
    name: 'blog',
  }, {
    to: '/projects',
    name: 'projects',
  }];
  const aboutHtml = edges.length ? edges[0].node.html : null;

  return (
    <DefaultLayout
      pageTitle={title}
      pageDescription={pageDescription}
    >
      <div className={classes.container}>
        <header>
          <Brand
            className={classes.brand}
            large
            title={title}
          />
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: aboutHtml }}
          />
          <PageLinks links={pageLinks} />
        </header>
        <main className={classes.contactCard}>
          <ContactCard contact={contact} social={social} />
        </main>
      </div>
    </DefaultLayout>
  );
}

Home.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          html: PropTypes.string.isRequired,
        }).isRequired,
      })).isRequired,
    }).isRequired,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        contact: PropTypes.shape({
          email: PropTypes.string.isRequired,
          displayedEmail: PropTypes.string.isRequired,
          resumeUrl: PropTypes.string.isRequired,
        }).isRequired,
        social: PropTypes.shape({
          github: PropTypes.string.isRequired,
          linkedin: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
