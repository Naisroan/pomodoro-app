import React from 'react';

import {
  Route,
  Redirect
} from "react-router-dom";

import store from "../redux/store";
import User from '../models/User';

let auth : User;

store.subscribe(() => {
  //debugger;
  auth = store.getState().users.authUser;
}); 

const OnlyAuthRoute = ({ comp : Component, ...rest } : any) => {

  return (
    <Route
      {...rest}
      render={props => auth.email !== "" ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }
  />);
}

export default OnlyAuthRoute;