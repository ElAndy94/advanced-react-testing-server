import React, { useEffect } from 'react';

import { connect } from 'react-redux';

export default ChildComponent => {
  const ComposedComponent = props => {
    useEffect(() => {
      shouldNavigateAway();
    }, [props]);

    const shouldNavigateAway = () => {
      if (!props.auth) {
        props.history.push('/');
      }
    };

    return <ChildComponent {...props} />;
  };

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
