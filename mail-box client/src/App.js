import React from "react";
import "./App.css";
import AuthPage from "./component/Pages/AuthPage";
import { Route } from "react-router-dom";
import Inbox from "./component/Mail/Inbox";

import ManagedMails from "./component/Mail/ManagedMails";
import ShowsentMail from "./component/Mail/SentMails";
import { Button } from "react-bootstrap";


function App() {
  return (
    <main>
     <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
         addy-mailbox
        </Button>
      </div>
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
