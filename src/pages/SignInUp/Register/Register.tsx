import React from 'react';
import { useState } from 'react';

import './Register.css';

const Register = () => {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <form className="container-fluid">
        <div className="row g-3">
          <div className="col-12">
            <h1>Register</h1>
            <small className="text-muted">Enter your infomration</small>
          </div>
          <div className="col-12">
            <input
              type="text"
              placeholder="user"
              className="form-control"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            ></input>
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
              value="Sign Up" 
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;