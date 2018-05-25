import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { signUp, clearAuthError } from '../actions';
import { renderInput } from '../helpers';

class SignUp extends Component {
    handleSignUp(values) {
        this.props.signUp(values);
    }

    componentWillUnmount() {
        this.props.clearAuthError();
    }

    render() {
        const { handleSubmit, authError } = this.props;
        return (
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="card grey darken-2">
                        <div className="card-content white">
                            <span className="card-title center">
                                Sign Up
                        </span>
                            <form onSubmit={handleSubmit(this.handleSignUp.bind(this))} action="">
                                <Field name="email" label="Email" placeholder="Email" component={renderInput} />
                                <Field name="password" label="Password" placeholder="Password" component={renderInput} type="password" />
                                <Field name="confirmPassword" label="Confirm Password" placeholder="Confirm Password" component={renderInput} type="password" />
                                <div className="row right-align">
                                    <button className="btn grey darken-4">Sign Up</button>
                                    <p className="right-align red-text text-darken-2">{authError}</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const { email, password, confirmPassword } = values;
    const errors = {};

    if (!email) {
        errors.email = 'Please enter your email.'
    }
    if (!password) {
        errors.password = 'Please choose a password.'
    }
    if (password !== confirmPassword) {
        errors.confirmPassword = 'Looks like those passwords do not match. Please re-enter.'
    }

    return errors;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

function mapStateToProps(state) {
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, { signUp, clearAuthError })(SignUp);