import React from 'react';

import Default from '../Default/';
import Brand from '../../Brand/';

import pageStyles from 'Page.module.css';

export default function Page({ title, children }) {
  return (
    <Default>
      <div className={pageStyles.container}>
        <header class={pageStyles.header}>
          <span>
            <Brand />
          </span>
          <span className={pageStyles.separator}>
            /
          </span>
          <h3>
            { title }
          </h3>
        </header>
        { children }
      </div>
    </Default>
  )
}
