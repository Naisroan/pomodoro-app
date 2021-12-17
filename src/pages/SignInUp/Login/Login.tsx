import React from 'react';
import { useState } from 'react';

import './Login.css';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form className="container-fluid">
        <div className="row g-3">
          <div className="col-12">
            <h1>Login</h1>
            <small className="text-muted">Enter your credentials</small>
          </div>
          <div className="col-12">
            <input
              type="email"
              placeholder="fake@email.com"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="col-12">
            <input
              type="password"
              placeholder="••••••••"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="col-12 text-end">
            <input 
              type="submit" 
              className="btn btn-block btn-dark"
              value="Sign In"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;