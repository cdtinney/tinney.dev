import React from 'react';

import Footer from '../../Footer/';

import defaultStyles from './Default.module.css';

export default function Default({ children }) {
  return (
    <React.Fragment>
      <main className={defaultStyles.content} aria-label="Content">
        { children }
      </main>
      <Footer/>
    </React.Fragment>
  );
}
