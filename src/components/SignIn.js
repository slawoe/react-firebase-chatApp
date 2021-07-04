import React from "react";
import firebase from "firebase";
import { auth } from "../firebase";
import { Button } from "@material-ui/core";

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div className="centerContainer">
      <div className="signInContainer">
        <Button className="signInButton" onClick={signInWithGoogle}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
