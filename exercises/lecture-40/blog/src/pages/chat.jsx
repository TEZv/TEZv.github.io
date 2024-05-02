import React, { useState } from "react";
import axios from "axios";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  // Function to send a message to OpenAI API and get a response
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add the user input message to the messages array
    setMessages([...messages, { text: input, sender: "user" }]);

    // API endpoint URL
    const apiUrl =
      "https://api.openai.com/v1/engines/davinci-codex/completions";

    // Request data
    const requestData = {
      prompt: input,
      max_tokens: 50,
      temperature: 0.5,
    };

    // Request headers
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    // Send the request to OpenAI API
    try {
      const response = await axios.post(apiUrl, requestData, { headers });

      // Add the OpenAI response message to the messages array
      setMessages([
        ...messages,
        { text: input, sender: "user" },
        { text: response.data.choices[0].text.trim(), sender: "openai" },
      ]);

      // Clear the input
      setInput("");
    } catch (error) {
      console.error("Error calling OpenAI API:", error);
    }
  };

  return (
    <div className="chat-container">
      <h2 className=" bg-kindaBlack text-lightGreen">Chat with OpenAI</h2>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="border border-y-redRose -purple mr-4 mt-24 rounded pl-2 pt-1 pb-1"
        />
        <button
          className="border border-y-redRose bg-purple rounded p-1 text-kindaBlack"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
