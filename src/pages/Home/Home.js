import React from 'react';

import DefaultLayout from '../../layouts/DefaultLayout';

import Brand from '../../components/Brand';
import ContactCard from '../../components/ContactCard';
import PageLinks from '../../components/PageLinks';

import classes from './Home.module.css';

export default function Home() {
  const pageTitle = 'colin tinney';
  const pageDescription = 'A personal website';
  const pageLinks = [{
    to: '/blog',
    name: 'blog',
  }, {
    to: '/projects',
    name: 'projects',
  }];

  return (
    <DefaultLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className={classes.container}>
        <header>
          <Brand />
          <PageLinks links={pageLinks} />
        </header>
        <main className={classes.contactCard}>
          <ContactCard />
        </main>
      </div>
    </DefaultLayout>
  );
}
