import React from 'react';

import DefaultLayout from '../DefaultLayout/';
import Brand from '../../components/Brand';

import pageLayoutStyles from 'Page.module.css';

export default function PageLayout({ title, children }) {
  return (
    <DefaultLayout>
      <div className={pageLayoutStyles.container}>
        <header class={pageLayoutStyles.header}>
          <span>
            <Brand />
          </span>
          <span className={pageLayoutStyles.separator}>
            /
          </span>
          <h3>
            { title }
          </h3>
        </header>
        { children }
      </div>
    </DefaultLayout>
  )
}
