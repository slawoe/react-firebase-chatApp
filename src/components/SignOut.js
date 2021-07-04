import React from "react";
import { auth } from "../firebase";
import { Button } from "@material-ui/core";

function SignOut() {
  return (
    <div className="signOutContainer">
      <Button className="signOutButton" onClick={() => auth.signOut()}>
        Sign out
      </Button>
    </div>
  );
}

export default SignOut;
