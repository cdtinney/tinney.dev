import React from 'react';

import theme from '../styles/theme.module.css';

export default function withTheme(Component) {
  return function ThemedComponent(props) {
    return (
      <Component
        theme={theme}
        {...props}
      />
    );
  };
}
