import { Fragment} from "react";
import { Route , Routes } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import SignUp  from "./Pages/SignUp";
import Home from "./Pages/Home";
import { UpdateProfile } from "./components/UpdateProfile";
import { ForgotPassword } from "./components/ForgotPassword";
import Expenses from "./Pages/Expenses";
import Premium from "./components/Premium";
import { useSelector } from "react-redux";
import './App.css'

function App() {

  const themeMode = useSelector((state) => state.theme.theme);
  const isLogedIn = useSelector((state)=>state.auth.isAuthenticated);
  return (
    <Fragment>
      <MainNavigation   />
      <div className={themeMode === 'dark' ? 'dark' : ''}>
      {isLogedIn && <Premium />}
       <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/expenses" element={<Expenses/>} />

        <Route path="/login" element={<SignUp />} />
        <Route path="/update" element={<UpdateProfile />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />


        
      </Routes> 
      </div>
    </Fragment>
    
  );
}

export default App;
