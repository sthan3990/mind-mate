import Axios from 'axios';

const API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

// Function to send a message to OpenAI
export const sendMessageToOpenAI = async (conversation, prompt) => {
  try {
    const response = await Axios.post(
      OPENAI_API_URL,
      {
        prompt: prompt,
        messages: conversation,
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('OpenAI API error:', error);
  }
};
