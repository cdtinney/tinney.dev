import React from 'react';
import Helmet from 'react-helmet';

import DefaultLayout from '../../layouts/DefaultLayout';

import Brand from '../../components/Brand';
import ContactCard from '../../components/ContactCard';
import PageLinks from '../../components/PageLinks';

import classes from './Home.module.css';

export default function Home() {
  return (
    <DefaultLayout>
      <Helmet>
        <title>colin tinney</title>
      </Helmet>
      <div className={classes.container}>
        <header>
          <Brand />
          <PageLinks />
        </header>
        <main className={classes.contactCard}>
          <ContactCard />
        </main>
      </div>
    </DefaultLayout>
  );
}
