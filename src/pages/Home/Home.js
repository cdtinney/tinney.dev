import React from 'react';

import DefaultLayout from '../../layouts/DefaultLayout';

import AboutHeader from '../../components/AboutHeader';
import ContactCard from '../../components/ContactCard';

import homeStyles from './Home.module.css';

export default function Home() {
  return (
    <DefaultLayout>
      <div className={homeStyles.container}>
        <AboutHeader />
        <ContactCard />
      </div>
    </DefaultLayout>
  );
}
