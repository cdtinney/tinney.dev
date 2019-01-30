import React from 'react';

import Footer from '../../components/Footer/';

import defaultLayoutStyles from './DefaultLayout.module.css';

export default function DefaultLayout({ children }) {
  return (
    <React.Fragment>
      <main className={defaultLayoutStyles.content} aria-label="Content">
        { children }
      </main>
      <Footer/>
    </React.Fragment>
  );
}
