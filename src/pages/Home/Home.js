import React from 'react';

import AboutHeader from '../../components/AboutHeader/';

import homeStyles from './Home.module.css';

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <AboutHeader/>
    </div>
  );
}
