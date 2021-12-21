import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import USERS_ACTIONS from '../../../redux/users/actions';
import User from '../../../models/User';
import { GlobalState } from '../../../redux/reducer';

import { EMAIL_REGEX } from '../SignInUp';

import './Register.css';

const Register = () => {

  const dispatch = useDispatch();
  const status = useSelector((state : GlobalState) => state.users.status);
  const isLoading = useSelector((state : GlobalState) => state.users.status.isLoading);

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [userError, setUserError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleBtnSignUpClick = () => {
    const nodo : User = {
      email: email,
      userName: user,
      password: password,
      secondsRested: 0,
      secondsWorked: 0
    }

    if (!validate(nodo)) {
      return;
    }

    dispatch(USERS_ACTIONS.signup(nodo));
  };

  const handleUserChange = (e : any) => {
    if (userError !== '') {
      setUserError('');
    }
    setUser(e.target.value)
  };

  const handleEmailChange = (e : any) => {
    if (emailError !== '') {
      setEmailError('');
    }
    setEmail(e.target.value)
  };

  const handlePasswordChange = (e : any) => {
    if (passwordError !== '') {
      setPasswordError('');
    }
    setPassword(e.target.value)
  };

  const validate = (user : User) : boolean => {

    let isValid : boolean = true;
    
    setUserError('');
    setEmailError('');
    setPasswordError('');

    if (!user.userName|| user.userName === '') {
      setUserError('Enter your user');
      isValid = false;
    }

    if (!user.email|| user.email === '') {
      setEmailError('Enter your email');
      isValid = false;
    }

    if (!user.email.match(EMAIL_REGEX)) {
      setEmailError('Email is not valid');
      isValid = false;
    }
    
    if (!user.password || user.password === '') {
      setPasswordError('Enter your password');
      isValid = false;
    }

    isValid = !isValid ? false : true;

    return isValid;
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row g-3 mb-4">
          <div className="col-12 mb-4">
            <h1>Register</h1>
            <small className="text-muted">Enter your information</small>
          </div>
          <div className="col-12">
            <input
              type="text"
              placeholder="user"
              className="form-control form-control-lg"
              value={user}
              onChange={(e) => handleUserChange(e)}
            ></input>
            <small className="text-danger" hidden={userError === ''}>
              {userError}
            </small>
          </div>
          <div className="col-12">
            <input
              type="email"
              placeholder="fake@email.com"
              className="form-control form-control-lg"
              value={email}
              onChange={(e) => handleEmailChange(e)}
            ></input>
            <small className="text-danger" hidden={emailError === ''}>
              {emailError}
            </small>
          </div>
          <div className="col-12">
            <input
              type="password"
              placeholder="password"
              className="form-control form-control-lg"
              value={password}
              onChange={(e) => handlePasswordChange(e)}
            ></input>
            <small className="text-danger" hidden={passwordError === ''}>
              {passwordError}
            </small>
          </div>
          <div className="col-12 mt-4">
          </div>
          <div className="col-12" hidden={!status.msg || status.msg === ""}>
            <p className={ !status.isError ? 'text-success' : 'text-danger' }>
              {status.msg}
            </p>
          </div>
          <div className="col-12 text-center">
            <button 
              type="submit" 
              className="btn btn-lg btn-block btn-dark w-100"
              hidden={isLoading}
              onClick={handleBtnSignUpClick}
            >
              <i className="fas fa-user-edit me-2"></i>
              Sign Up
            </button>
            <div className="spinner-border" role="status" hidden={!isLoading}>
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;