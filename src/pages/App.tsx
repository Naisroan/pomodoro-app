import React from 'react';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// pages
import Layout from './Layout/Layout';
import SignInUp from './SignInUp/SignInUp';

// router
import { Route, Switch } from "react-router-dom";
import OnlyAuthRoute from '../components/OnlyAuthRoute';

function App() {
  return (
    <>
      <Switch>

        <OnlyAuthRoute exact path='/' component={Layout} />
        <Route exact path='/login' component={SignInUp} />
        
      </Switch>
    </>
  );
}

export default App;
