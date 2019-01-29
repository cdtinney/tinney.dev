import React from 'react';

import Brand from '../Brand/';

import aboutHeaderStyles from './AboutHeader.module.css';

export default function AboutHeader() {
  return (
    <header className={aboutHeaderStyles.header}>
        <Brand/>
      <p>
        Hi. I'm a software developer. I do things. I like other things. Click some things if you'd like.
      </p>
    </header>
  );
}
