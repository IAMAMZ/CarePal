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
  recognition.onresult = (result) => {
    console.log(result.results[0][0].transcript);
  };

  recognition.start();
};
function App() {
  return (
    <div>
      <button onClick={GetSpeech}>Get speech</button>
    </div>
  );
}

export default App;
