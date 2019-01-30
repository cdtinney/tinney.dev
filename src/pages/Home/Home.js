import React from 'react';

import Default from '../../components/layout/Default/';
import AboutHeader from '../../components/AboutHeader/';

import homeStyles from './Home.module.css';

export default function Home() {
  return (
    <Default>
      <div className={homeStyles.container}>
        <AboutHeader/>
      </div>
    </Default>
  );
}
