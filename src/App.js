import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Home from "./pages/Home";
import CarePortal from "./pages/CarePortal";

const GetSpeech = () => {
  console.log("clicked microphone");
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new SpeechRecognition();

  recognition.onstart = () => {
    console.log("starting listening, speak in microphone");
  };
  recognition.onspeechend = () => {
    console.log("stopped listening");
    recognition.stop();
  };
  recognition.onresult = async (result) => {
    console.log(result.results[0][0].transcript);
  };

  recognition.start();
};

const SpeechRecognitionPage = () => {
  // Assuming this component wraps your speech recognition feature
  return (
    <button onClick={GetSpeech}>Get speech</button>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech-recognition" element={<SpeechRecognitionPage />} />
        <Route path="/carePortal" element={<CarePortal />} />
      </Routes>
    </Router>
  );
}

export default App;
