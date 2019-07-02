import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

function Signup(props) {
  const onSubmit = formProps => {
    props.signup(formProps, () => {
      props.history.push('/feature');
    });
  };

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name='email' type='text' component='input' autoComplete='none' />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name='password'
          type='password'
          component='input'
          autoComplete='none'
        />
      </fieldset>
      <div>{props.errorMessage}</div>
      <button>Sign Up!</button>
    </form>
  );
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signup);
