import React, { useState } from "react";
import firebase from "firebase";
import { db, auth } from "../firebase";
import { Input, Button } from "@material-ui/core";

function SendMessage({ scroll }) {
  const [message, setMessage] = useState("");
  async function sendMessage(e) {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMessage">
          <Input
            className="messageInput"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Message..."
          />
          <Button className="submitButton" type="submit">
            SEND
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
