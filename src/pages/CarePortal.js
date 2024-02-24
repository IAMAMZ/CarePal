// CarePortal.js

import React from "react";
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
  return (
    <div className="container-mt-5">
      <h2 className="text-center mb-4 care-portal-header">
        <FontAwesomeIcon icon={faHeartbeat} /> Care Portal
      </h2>

      <div className="row">
        <div className="col-md-6">
          <div className="card p-4 wellbeing-card card-item-custom">
            <h2 className="text-center mb-4 wellbeing-header">
              <FontAwesomeIcon icon={faSmile} /> Wellbeing Functions
            </h2>
            <button className="btn btn-primary btn-block mb-2 wellbeing-button">
              <FontAwesomeIcon icon={faLaugh} /> Send a Joke
            </button>
            <button className="btn btn-primary btn-block mb-2 wellbeing-button">
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
          <div className="card p-4 reminders-card card-item-custom">
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
              />
            </div>

            <button className="btn btn-success btn-block mb-2 reminders-button">
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
