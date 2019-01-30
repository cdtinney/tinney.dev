import React from 'react';

import DefaultLayout from '../../layout/DefaultLayout/';
import AboutHeader from '../../components/AboutHeader/';

import homeStyles from './Home.module.css';

export default function Home() {
  return (
    <DefaultLayout>
      <div className={homeStyles.container}>
        <AboutHeader/>
      </div>
    </DefaultLayout>
  );
}
