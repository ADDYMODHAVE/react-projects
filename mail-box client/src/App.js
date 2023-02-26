import React from "react";
import "./App.css";
import AuthPage from "./component/Pages/AuthPage";

import Inbox from "./component/Mail/Inbox";
import { Route,Redirect } from "react-router-dom";

import ManagedMails from "./component/Mail/ManagedMails";
import ShowsentMail from "./component/Mail/SentMails";
import { Button } from "react-bootstrap";


function App() {
  return (
    <main>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Route path="/inbox" exact>
        <Inbox />
      </Route>
      <Route path="/inbox/details" exact>
        <ShowsentMail />
      </Route>
      <Route path="/mail">
        <ManagedMails />
      </Route>
    </main>
  );
}

export default App;
