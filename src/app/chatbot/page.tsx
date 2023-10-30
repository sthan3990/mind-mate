import React, { useState } from 'react';
import { sendMessageToOpenAI } from './chat';

export default function ChatPage() {
  const [messages, setMessages] = useState<String[]>([]); 
  const [conversation, setConversation] = useState([]);
  const [prompt, setPrompt] = useState('You can configure the OpenAI prompt here.');

  const handleSendMessage = () => {
    if (input.trim() === '') return;
  
    setConversation([...conversation, { role: 'user', content: input }]);
    setMessages([...messages, { text: input, user: 'user' }]);
    setInput('');
  };
  

  const handleChatGPTResponse = async () => {
    if (conversation.length === 0) return;

    const response = await sendMessageToOpenAI(conversation, prompt);
    setConversation([...conversation, { role: 'assistant', content: response.choices[0].text }]);
    setMessages([...messages, { text: response.choices[0].text, user: 'chatGPT' }];
  };

  return (
    // JSX structure remains the same
    <div>
      <div>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
        <button onClick={handleChatGPTResponse}>Get OpenAI Response</button>
      </div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.user === 'user' ?
              (
                <div>User: {message.text}</div>
              ) :
              (
                <div>ChatGPT: {message.text}</div>
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
}
