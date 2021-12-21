import React from 'react';
import { useDispatch } from 'react-redux';
import USERS_ACTION from '../../redux/users/actions';

// styles
import './SignInUp.css';

// pages
import Login from './Login/Login';
import Register from './Register/Register';

export const EMAIL_REGEX : string = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';

function SignInUp() {

  const dispatch = useDispatch();

  const handleTabClick = (e : any) => {
    dispatch(USERS_ACTION.setError(''));
    dispatch(USERS_ACTION.setSuccess(''));
  };

  return (
    <>
      <div className="container mt-3 mt-lg-5">
        <div className="row">
          <div className="col-11 col-lg-4 col-xl-4 mx-auto text-center p-3 bg-white shadow border">
            <ul className="nav nav-pills nav-justified" id="signInUpTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button onClick={handleTabClick} className="nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">
                  Login
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button onClick={handleTabClick} className="nav-link" id="signup-tab" data-bs-toggle="tab" data-bs-target="#signup" type="button" role="tab" aria-controls="signup" aria-selected="false">
                  Register
                </button>
              </li>
            </ul>
            <div className="tab-content mt-5" id="signInUpTabContent">
              <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                <Login></Login>
              </div>
              <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                <Register></Register>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInUp;