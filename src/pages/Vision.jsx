import React, { useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import Navbar from './Navbar';
function Vision() {
  const [redirectUrl, setRedirectUrl] = useState("");
  const commands = [
    {
      command: ["Go to * page", "Go to *", "Open * page", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const pages = ["home", "sign in", "sign up"];
  const urls = {
    home: "/Home",
    "sign in": "/Signin",
    "sign up": "/signup",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Speech recognition not supported</div>;
  }

  let redirectComponent = null;

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      window.location.href = urls[redirectUrl]; // Redirect using window.location
    } else {
      redirectComponent = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  return (
    <div>
        <Navbar/>
      {redirectComponent}
      <p id="transcript">Transcript: {transcript}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
    </div>
  );
}

export default Vision;



