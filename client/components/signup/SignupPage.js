import React from "react";
import { hot } from 'react-hot-loader'
import SignupForm from './SignupForm';
import { connect } from "react-redux";
import {PropTypes} from 'prop-types';
import {userSignupRequest} from '../../actions/signupActions';
import {addFlashMessage} from '../../actions/flashMessages';

class SignupPage extends React.Component{
  render(){
    const { userSignupRequest, addFlashMessage} = this.props;

    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage} />
        </div>
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default hot(module)(connect(null ,{userSignupRequest,addFlashMessage}) (SignupPage))
