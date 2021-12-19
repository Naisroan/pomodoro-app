import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import USERS_ACTIONS from '../../../redux/users/actions';
import User from '../../../models/User';
import { GlobalState } from '../../../redux/reducer';

import './Login.css';

const Login = () => {

  const dispatch = useDispatch();
  const status = useSelector((state : GlobalState) => state.users.status);
  const isLoading = useSelector((state : GlobalState) => state.users.status.isLoading);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlBtnSignInClick = () => {
    const nodo : User = {
      email: email,
      password: password
    };
    if (!validate(nodo)) {
      return;
    }
    dispatch(USERS_ACTIONS.signin(nodo));
  };

  const validate = (user : User) : boolean => {

    let isValid : boolean = true;
    
    setEmailError('');
    setPasswordError('');

    if (!user.email|| user.email === '') {
      setEmailError('Enter your email');
      isValid = false;
    }
    
    if (!user.password || user.password === '') {
      setPasswordError('Enter your password');
      isValid = false;
    }

    isValid = !isValid ? false : true;

    return isValid;
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

  return (
    <>
      <div className="container-fluid">
        <div className="row g-3 mb-4">
          <div className="col-12 mb-4">
            <h1>Login</h1>
            <small className="text-muted">Enter your credentials</small>
          </div>
          <div className="col-12 text-start">
            <input
              type="email"
              placeholder="fake@email.com"
              className="form-control form-control-lg"
              value={email}
              onChange={handleEmailChange}
            ></input>
            <small className="text-danger" hidden={emailError === ''}>
              {emailError}
            </small>
          </div>
          <div className="col-12 text-start">
            <input
              type="password"
              placeholder="password"
              className="form-control form-control-lg"
              value={password}
              onChange={handlePasswordChange}
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
              onClick={handlBtnSignInClick}
            >
              <i className="fas fa-sign-in-alt me-2"></i>
              Sign In
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

export default Login;