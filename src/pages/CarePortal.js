// CarePortal.js

import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faSmile,
  faLaugh,
  faBrain,
  faLightbulb,
  faBell,
  faPills,
  faCheckCircle,
  faExclamationCircle,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./CarePortal.css";

export default function CarePortal() {
  const inputRef = useRef();
  const [transcript, setTranscript] = useState("");

  // Function to start speech recognition and update transcript state
  const startSpeechRecognition = async (url, prompt) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = new SpeechRecognition();

    recognition.onstart = () => {
      console.log("Voice recognition started. Speak into the microphone.");
    };

    recognition.onspeechend = () => {
      recognition.stop();
      console.log("Voice recognition stopped.");
    };

    recognition.onresult = async (event) => {
      const transcribedText = await event.results[0][0].transcript;

      console.log("HLEKJFD" + transcribedText);
      // pass trascribed text to the model
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Indicate that we're sending JSON data
        },
        body: JSON.stringify({ text: transcribedText }), // Convert the payload to a JSON string
      });
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      const data = await result.json(); // This is how you parse the JSON response
      console.log(data);
      console.log("Server response:", data);

      // Assuming the server sends back a JSON object that you want to speak
      speakText(data.message); // Use the parsed datan
    };

    recognition.start();
  };

  // Function to speak the text
  const speakText = (text) => {
    let synth = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  // Function to handle button click for speaking out the medication input or recognized text
  const handleMedicationButtonClick = () => {
    const medicationValue = inputRef.current.value;
    speakText(medicationValue); // Speak out the medication value
  };

  return (
    <div className="container-mt-5">
      <h2 className="text-center mb-4 care-portal-header" id="header-portal">
        Care Portal
      </h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card wellbeing-card card-item-custom" id="card-size">
            <h2 className="text-center mb-4 wellbeing-header">
              <FontAwesomeIcon icon={faHeartbeat} /> Wellbeing Functions
            </h2>
            <button className="btn btn-primary btn-block mb-2 wellbeing-button">
              <FontAwesomeIcon icon={faLaugh} /> Send a Joke
            </button>
            <button
              onClick={() => {
                speakText("how was your day?");
                startSpeechRecognition("http://localhost:3001/general");
              }}
              className="btn btn-primary btn-block mb-2 wellbeing-button"
            >
              <FontAwesomeIcon icon={faBrain} /> Prompt for Mental Health
              Check-up
            </button>
            <button className="btn btn-primary btn-block mb-2 wellbeing-button">
              <FontAwesomeIcon icon={faLightbulb} /> Tell a Random Fact
            </button>
            <button className="btn btn-primary btn-block mb-2 wellbeing-button">
              <FontAwesomeIcon icon={faWalking} /> Recommend Outdoor Activity
            </button>
            <button className="btn btn-primary btn-block wellbeing-button">
              Positive Affirmation
            </button>
          </div>
        </div>

        <div className="col-md-6 ">
          <div className="card reminders-card card-item-custom" id="card-size1">
            <h2 className="text-center mb-4 reminders-header">
              <FontAwesomeIcon icon={faBell} /> Reminders
            </h2>
            <div className="form-group">
              <label htmlFor="medicationInput" className="label">
                <FontAwesomeIcon icon={faPills} /> Medication:
              </label>
              <input
                type="text"
                id="medicationInput"
                className="form-control mb-2 reminders-input"
                placeholder="Enter medication"
                ref={inputRef}
              />
            </div>

            <button
              onClick={() => {
                speakText("Did you take your medication today?");
                startSpeechRecognition("http://localhost:3001/firstresponse");
              }}
              className="btn btn-success btn-block mb-2 reminders-button"
            >
              <FontAwesomeIcon icon={faCheckCircle} /> Did you take your
              medications?
            </button>

            <p className="mb-1 reminders-info">
              <FontAwesomeIcon icon={faExclamationCircle} /> Other reminders:
            </p>
            <ul className="list-unstyled reminders-list">
              <li>
                <button className="btn btn-primary btn-block mb-2 wellbeing-button">
                  <FontAwesomeIcon icon={faWalking} /> It's time to go for your
                  daily walk.
                </button>
              </li>
              <li>
                <button className="btn btn-primary btn-block mb-2 wellbeing-button">
                  Schedule Doctor's Appointment
                </button>
              </li>
              {/* Add more reminders as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
