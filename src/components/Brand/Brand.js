import React from 'react';

import brandStyles from './Brand.module.css';

export default function Brand() {
  // TODO Use siteMetadata
  const siteUrl = 'https://colintinney.com';
  const brand = 'colin tinney';

  return (
    <h1 class={brandStyles.header}>
      <a
        href={siteUrl}
        class={brandStyles.link}
      >
        {brand}
      </a>
    </h1>
  );
}
