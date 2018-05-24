import React from "react";
import { hot } from "react-hot-loader";

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join US </h1>

        <div className="form-group">
          <label className="control-label">Username</label>
          <input type="text" value={this.state.username} onChange={this.onChange} name="username" className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <input type="password" value={this.state.password} onChange={this.onChange} name="password" className="form-control" />
        </div>

        <div className="form-group">
          <label className="control-label">Retype Password</label>
          <input type="password" value={this.state.passwordConfirmation} onChange={this.onChange} name="passwordConfirmation" className="form-control" />
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Signup</button>
        </div>
      </form>
    );
  }
}

export default hot(module)(SignupForm);
