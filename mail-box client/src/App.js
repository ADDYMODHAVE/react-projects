import React from "react";
import "./App.css";
import AuthPage from "./component/Pages/AuthPage";
import { Route } from "react-router-dom";
import Mailfirst from "./component/Mail/ComposeMail";
import Inbox from "./component/Mail/Inbox";

function App() {
  return (
    <main>
      <h1>MailBox</h1>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Route path="/inbox" exact>
        <Inbox />
      </Route>
      <Route path="/mail">
        <Mailfirst />
      </Route>
    </main>
  );
}

export default App;
