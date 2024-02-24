import logo from "./logo.svg";
import "./App.css";

const { CohereClient } = require("cohere-ai");

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
    const cohere = new CohereClient({
      token: "Ln7VwcdZMEZkvCOTDyHnZ7LxBbSjxTkaGwQzfGf4",
    });

    (async () => {
      const chatStream = await cohere.chatStream({
        chatHistory: [
          { role: "USER", message: "Who discovered gravity?" },
          {
            role: "CHATBOT",
            message:
              "The man who is widely credited with discovering gravity is Sir Isaac Newton",
          },
        ],
        message: "What year was he born?",
        // perform web search before answering the question. You can also use your own custom connector.
        connectors: [{ id: "web-search" }],
      });

      for await (const message of chatStream) {
        if (message.eventType === "text-generation") {
          console.log(message);
        }
      }
    })();

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
