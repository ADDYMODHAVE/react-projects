import { useHistory } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import AuthContext from "../Context/Auth-Context/Auth-Context";
import classes from "./Login.module.css";

const LogIn = () => {
  const emailItnputRef = useRef();
  const passwordInputRef = useRef();

  const history = useHistory();

  const ctx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredemail = emailItnputRef.current.value;
    const enteredpassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwYMs-t9xN-Hk0q-RPAUaV_iQMTI2IHOA";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwYMs-t9xN-Hk0q-RPAUaV_iQMTI2IHOA";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredemail,
        password: enteredpassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(async res => {
        setIsLoading(false);
        if (res.ok) {
          emailItnputRef.current.value="";
          passwordInputRef.current.value="";
          return res.json();
        } else {
          const data = await res.json();
            let errmessage = "Authentication Failed";
            if (data && data.error && data.error.message) {
                errmessage = data.error.message;
            }
            throw new Error(errmessage);
        }
      })
      .then(data=>{
         ctx.Login(data.idToken);
         localStorage.setItem("tokenid",data.idToken)
         history.replace("/")
         setTimeout(()=>{
          localStorage.removeItem("tokenid");
          console.log("logedout with timer")
         },300000)
      }).catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailItnputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending Request....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default LogIn;