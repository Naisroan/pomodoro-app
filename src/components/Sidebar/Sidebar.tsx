import React from 'react';

import './Sidebar.css';
import logo from '../../assets/logo.png';
import userImage from '../../assets/user.jpg';

import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../../redux/reducer';
import USERS_ACTIONS from '../../redux/users/actions';

interface SidebarType {
  userName?: string,
  isVisible?: boolean
}

const Sidebar = ({ userName, isVisible } : SidebarType) => {

  const dispatcher = useDispatch();
  const location = useSelector((state : GlobalState) => state.router.location.pathname);

  const handleSignOut = () => {
    dispatcher(
      USERS_ACTIONS.logout()
    );
  };

  return (
    <>
      <div id="sidebar" className={"d-flex flex-column flex-shrink-0 bg-light shadow " + (!isVisible ? "d-none" : "")}>
        <Link to="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
          <img id="logo" src={logo}></img>
        </Link>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <Link to="/home" className={"nav-link py-3 border-bottom " + (location === "/home" ? "active" : "")} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/statistic" className={"nav-link py-3 border-bottom " + (location === "/statistic" ? "active" : "")} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Statistic">
              <span className="icon">
                <i className="fas fa-chart-bar"></i>
              </span>
            </Link>
          </li>
        </ul>
        <div className="dropdown border-top">
          <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="user" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={userImage} alt="mdo" width="24" height="24" className="rounded-circle" />
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="user">
            <li>
              <h6 className="dropdown-header">{userName}</h6>
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={handleSignOut}>Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;