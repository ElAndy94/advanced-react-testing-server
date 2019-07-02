import React, { useEffect } from 'react';

import requireAuth from './requireAuth';

function Feature() {
  return <div>This is the feature!</div>;
}

export default requireAuth(Feature);
