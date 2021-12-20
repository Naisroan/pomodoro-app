import React from 'react';

import {
  Route,
  Redirect
} from "react-router-dom";

import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/reducer';

const OnlyAuthRoute = ({ component : Component, ...rest } : any) => {

  const auth = useSelector((state : GlobalState) => state.users.authUser);

  return (
    <Route
      {...rest}
      render={props => !auth || auth.email === "" ? (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
        ) : (
            <Component {...props} />
          )
        }
  />);
}

export default OnlyAuthRoute;