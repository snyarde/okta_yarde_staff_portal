import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";
import Table from "./components/pages/Table";

import "./App.css";

const config = {
  issuer: 'https://dev-999896.okta.com/oauth2/default',
  // Settings for localhost dev
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa26kok566LysAAm357', // localhost:3000

  // Attempts to get GitHub pages to work
  // redirectUri: window.location.origin + '/okta_yarde_staff_portal/implicit/callback', // seems like it gets to the redirect URL
  // redirectUri: process.env.PUBLIC_URL + '/implicit/callback',
  // redirectUri: 'https://snyarde.github.io/okta_yarde_staff_portal/implicit/callback', // seems like it gets to the redirect URL
  // clientId: '0oa26yany9zLArphj357', // https://snyarde.github.io/okta_yarde_staff_portal/
  // redirectUri: window.location.origin + '/implicit/callback', // seems like it gets to the redirect URL when using custom domain
  // redirectUri: 'https://okta.mcwho.xyz/implicit/callback', // seems like it gets to the redirect URL when using custom domain
  onAuthRequired: onAuthRequired,
  // pkce: true
}

function onAuthRequired({history}) {
  history.push('/login');
}

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Security {...config}>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/table" exact={true} component={Table} />
            <SecureRoute path="/staff" exact={true} component={Staff} />
            <Route path='/login' render={() => <Login baseUrl='https://dev-999896.okta.com' />} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
            {/* <Route path='/implicit/callback' component={Table} /> */}
          </div>
        </div>
      </Security>
    </Router>
  );
}

export default App;
