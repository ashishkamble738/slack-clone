import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider"

function Login() {
    const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
          alt=""
        />
        <h1>Sign in to DevOps Programmers</h1>
        <p>devopsprogrammer.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
