import React from 'react';

import Brand from '../Brand';

import aboutHeaderStyles from './AboutHeader.module.css';

export default function AboutHeader() {
  return (
    <header className={aboutHeaderStyles.header}>
      <Brand />
      <p>
        {"Hi! I'm a software developer, specializing in web technologies."}
      </p>
      <p>
        {"Let's work together."}
      </p>
    </header>
  );
}
