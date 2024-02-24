import logo from "./logo.svg";
import "./App.css";

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
function App() {
  const handleChange = async (e) => {
    const medicationName = e.target.value; // Correctly accessing the input's current value

    console.log(medicationName);

    try {
      // Setup the fetch request
      const response = await fetch("http://localhost:3001/", {
        method: "POST", // Assuming you're sending data, POST is commonly used
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({ medicationName }), // Stringify your payload
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response;
      console.log(data); // Handling the response data
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  return (
    <div>
      <label>Medication Name</label>
      <input
        type="text"
        id="medicationName"
        autoComplete="off"
        onChange={handleChange}
        required
      />
      <button onClick={GetSpeech}>Get speech</button>
    </div>
  );
}

export default App;
