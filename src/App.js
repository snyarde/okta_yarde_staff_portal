import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";

import "./App.css";

const config = {
  issuer: 'https://dev-999896.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa26kok566LysAAm357',
  onAuthRequired: onAuthRequired,
  pkce: true
}

function onAuthRequired({history}) {
  history.push('/login');
}

function App() {
  return (
    <Router>
      <Security {...config}>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/staff" exact={true} component={Staff} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-999896.okta.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
          </div>
        </div>
      </Security>
    </Router>
  );
}

export default App;
