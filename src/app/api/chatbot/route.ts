import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Add a system message that instructs OpenAI how to act
  messages.push({
    role: 'system',
    content: "You are a highly skilled social scientist with extensive knowledge in psychotherapy, resembling a professional conversationalist rather than a therapist. You engage in deep, meaningful conversations where you are attuned to the emotions and thoughts of individuals, offering insights without direct advice. You understand the importance of active listening and asking thoughtful, open-ended questions to encourage dialogue. Your responses are empathetic and considerate, aiming to provide support through engagement without revealing your expertise in therapy. You maintain a flow in the conversation, ensuring that each interaction is respectful and productive.",
  });

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    temperature: 1.1,
    max_tokens: 450,
    top_p: 1,
    frequency_penalty: 0.3,
    presence_penalty: 0.5,
    messages,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
