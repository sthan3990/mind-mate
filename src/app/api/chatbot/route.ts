import {
  OpenAIStream,
  StreamingTextResponse,
  experimental_StreamData,
} from 'ai';
import OpenAI from 'openai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-0613',
    stream: true,
    messages,
  });

  const data = new experimental_StreamData();
  const stream = OpenAIStream(response, {
    experimental_onFunctionCall: async (
      { name, arguments: args },
      createFunctionCallMessages,
    ) => {
      if (name === 'chat') {
        // Simulate a supportive conversation
        const userMessage = messages[messages.length - 1].content;
        let assistantResponse = '';

        if (userMessage.includes('How are you?')) {
          assistantResponse = "I'm just a computer program, but I'm here to chat with you!";
        } else if (userMessage.includes('Tell me a joke.')) {
          assistantResponse = "Sure, here's one: Why did the computer catch a cold? Because it had Windows!";
        } else {
          assistantResponse = "I'm here to chat, so feel free to ask me anything!";
        }

        data.append({ text: assistantResponse });

        return createFunctionCallMessages([{ content: assistantResponse, role: 'assistant' }]);
      }
    },
    onCompletion(completion) {
      console.log('completion', completion);
    },
    onFinal(completion) {
      data.close();
    },
    experimental_streamData: true,
  });

  return new StreamingTextResponse(stream, {}, data);
}
