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

      <Grid
        margin="2em"
        background={"primary.800"}
        templateAreas={`"header header"
                        "nav main"
                        "footer footer"`}
        gridTemplateRows={'80px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h='500px'  // Increased height for chat history
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='primary.800' area={'header'}>
          <Center>
          <Heading  as='h1' size='2xl'>Your CBT Chatbot </Heading>
            </Center>
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          Chat History
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          <Box p={4}>
            <Text fontSize="xl" fontWeight="bold">Response area</Text>
            
          </Box>
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'} alignSelf="end">  {/* Adjust placement of footer */}
          <Box p={4}>
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              
            />
            <Button onClick={handleSendMessage} colorScheme="blue">
              Send
            </Button>
          </Box>
        </GridItem>
      </Grid>
 
  );
}
