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
      {/* <Navbar /> */}
      <nav className='home-nav'>
        <div className='nav-bar-1'>
          <div className='company-title'>CarePal</div>
        </div> 
        <div className='nav-bar-2'>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/carePortal" className="nav-link">Care Portal</Link>
          <Link to="" className="nav-link">About</Link>
          <Link to="" className="nav-link">FAQ</Link>
          <Link to="" className="nav-link">Contact Us</Link>
        </div>
        <div className='nav-bar-3'>
        <button className='login'>Login</button>
        <button className='register'>Register</button>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speech-recognition" element={<SpeechRecognitionPage />} />
        <Route path="/carePortal" element={<CarePortal />} />
      </Routes>
    </Router>
  );
}

export default App;
