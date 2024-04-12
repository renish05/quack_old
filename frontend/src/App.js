import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import C_login from './pages/auth/c_login';
import C_signup from './pages/auth/c_signup';
import T_login from './pages/auth/t_login';
import T_signup from './pages/auth/t_signup';

import C_dashboard from './pages/client/c_dashboard';
import C_bids from './pages/client/c_bids';

import T_dashboard from './pages/tech/t_dashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/c-signup" component={C_signup} />
          <Route path="/c-login" component={C_login} />
          <Route path="/t-singup" component={T_signup} />
          <Route path="/t-login" component={T_login} />
          <Route path="/c-dashboard" component={C_dashboard} />
          <Route path="/t-dashboard" component={T_dashboard} />
          <Route path="/c-bids" component={C_bids} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
