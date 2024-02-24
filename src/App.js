import logo from "./logo.svg";
import "./App.css";
const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

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
    // send request to open AI
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Translate the following English text to French: 'Hello, world!'",
      temperature: 0.7,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    // get response
    console.log(response.data.choices[0].text.trim());

    //console.log(result.results[0][0].transcript);
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
