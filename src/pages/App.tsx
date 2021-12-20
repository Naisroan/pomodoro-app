import React from 'react';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

// redux
import { useSelector } from 'react-redux';
import { GlobalState } from '../redux/reducer';

// pages
import SignInUp from './SignInUp/SignInUp';
import Pomodoro from './Pomodoro/Pomodoro';
import Statistic from './Statistic/Statistic';

// components
import Sidebar from '../components/Sidebar/Sidebar';

// router
import { Route, Switch, Redirect } from "react-router-dom";
import OnlyAuthRoute from '../components/OnlyAuthRoute';

function App() {

  const auth = useSelector((state : GlobalState) => state.users.authUser);

  return (
    <>
      <div id="main">
        <Sidebar userName={auth.userName} isVisible={auth && auth.email !== ""} ></Sidebar>
        <div id="home" className={auth && auth.email !== "" ? "auth" : ""}>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path='/login' component={SignInUp} />
            <OnlyAuthRoute exact path='/home' component={Pomodoro} />
            <OnlyAuthRoute exact path='/statistic' component={Statistic} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
