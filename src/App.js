import React, { useEffect } from "react";
import firebaseInit from "./firebaseInit";

export default function App() {
  const { onMessageListener, getMessageToken } = firebaseInit;

  if (onMessageListener) {
    onMessageListener().then(data => console.log("foreground data", data))
  }


  useEffect(() => {
    let data;
    if (getMessageToken) {
      getMessageToken((data) => console.log("token---->", data));
    }
  }, [])
  return (<div>App is Loading</div>)
}