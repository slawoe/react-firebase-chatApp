import React, { useState } from "react";
import firebase from "firebase";
import { db, auth } from "../firebase";
import { Input, Button } from "@material-ui/core";

function SendMessage() {
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
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          placeholder="Message..."
        />
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
}

export default SendMessage;
