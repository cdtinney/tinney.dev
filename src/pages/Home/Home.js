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
    site: {
      siteMetadata: {
        title,
      } = {},
    } = {},
  } = data;

  const pageDescription = 'A personal website';
  const pageLinks = [{
    to: '/about',
    name: 'about',
  }, {
    to: '/blog',
    name: 'blog',
  }, {
    to: '/projects',
    name: 'projects',
  }];

  return (
    <DefaultLayout
      pageTitle={title}
      pageDescription={pageDescription}
    >
      <div className={classes.container}>
        <header>
          <Brand large />
          <PageLinks links={pageLinks} />
        </header>
        <main className={classes.contactCard}>
          <ContactCard />
        </main>
      </div>
    </DefaultLayout>
  );
}

Home.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
