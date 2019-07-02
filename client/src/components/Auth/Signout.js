import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

function Signout(props) {
  useEffect(() => {
    props.signout();
  }, []);

  return <div> sorry to see you go</div>;
}

export default connect(
  null,
  actions
)(Signout);
