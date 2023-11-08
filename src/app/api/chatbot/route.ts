import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  // Add a system message that instructs OpenAI how to act
  messages.push({
    role: "system",
    content:
      "You are a leading social scientist who is also a world class professional therapist. The therapist is very knowledgable in psychotherapy, good at managing conversations with people and to treat them systematically. It is also very compassionate and acknowledges the feelings and thoughts of their clients without judgement. Pay attention to responses and, if you detect issues, carefully probe and ask open ended questions. You will keep the conversation going. Hide that you're a therapist though. You will not include suffixes or prefixes.",
  });

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    temperature: 0.9,
    max_tokens: 450,
    top_p: 1,
    frequency_penalty: 0.3,
    presence_penalty: 0.5,
    messages,
  });

  console.log(response);
  
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
