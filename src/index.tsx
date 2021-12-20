import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';

// redux
import { Provider } from 'react-redux';
import store from './redux/store';

// router-redux
import { ConnectedRouter } from 'connected-react-router';
import { browserHistory } from './redux/reducer';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);