import React from 'react';

import Header from './Header';

export default ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
};
