import React from "react";
import { hot } from "react-hot-loader";
import { PropTypes } from "prop-types";
import classnames from 'classnames';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirmation: "",
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    this.setState({isLoading:true , errors: {} });
    e.preventDefault();
    this.props
      .userSignupRequest(this.state)
      .then(
        () => {},
        ({ response }) => this.setState({ errors: response.data , isLoading:false})
      );
  }

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join US </h1>

        <div className={classnames("form-group",{'has-error': errors.username})}>
          <label className="control-label">Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.onChange}
            name="username"
            className="form-control"
          />
          {errors.passwordConfirmation && <span className="help-block">{errors.username}</span>}
        </div>

        <div className={classnames("form-group",{'has-error': errors.password})}>
          <label className="control-label">Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            name="password"
            className="form-control"
          />
          {errors.passwordConfirmation && <span className="help-block">{errors.password}</span>}
        </div>

        <div className={classnames("form-group",{'has-error': errors.passwordConfirmation})}>
          <label className="control-label">Retype Password</label>
          <input
            type="password"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            name="passwordConfirmation"
            className="form-control"
          />
          {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Signup</button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired
};

export default hot(module)(SignupForm);
