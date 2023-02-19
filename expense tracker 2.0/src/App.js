import { Fragment } from "react";

import { Route, Routes } from "react-router-dom";

import MainNavigation from "./components/MainNavigation";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import UpdateProfile from "./components/UpdateProfile";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/update" element={<UpdateProfile />} />
      </Routes>
    </Fragment>
  );
}

export default App;
