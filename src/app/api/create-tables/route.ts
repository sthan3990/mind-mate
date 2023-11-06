import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const users = await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255),
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      );`;

    const journals = await sql`
      CREATE TABLE IF NOT EXISTS journals (
        id SERIAL PRIMARY KEY NOT NULL,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        emotion_pre INTEGER NOT NULL,
        emotion_post INTEGER NOT NULL,
        timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        num_questions INTEGER NOT NULL
      );`;

    const questions = await sql`
      CREATE TABLE IF NOT EXISTS questions (
        id SERIAL PRIMARY KEY NOT NULL,
        journal_id INTEGER REFERENCES journals(id) ON DELETE CASCADE,
        question INTEGER NOT NULL,
        timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );`;

    const responses = await sql`
      CREATE TABLE IF NOT EXISTS responses (
        id SERIAL PRIMARY KEY NOT NULL,
        question_id INTEGER REFERENCES questions(id) ON DELETE CASCADE,
        answer INTEGER NOT NULL,
        timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );`;

    const cbtChatSessions = await sql`
      CREATE TABLE IF NOT EXISTS cbt_chatsessions (
        id SERIAL PRIMARY KEY NOT NULL,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      );`;

    const cbtChatHistory = await sql`
      CREATE TABLE IF NOT EXISTS cbt_chathistory (
        id SERIAL PRIMARY KEY NOT NULL,
        user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
        timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        message CHAR NOT NULL 
      );`;


    return NextResponse.json(
      { users, journals, questions, responses, cbtChatSessions, cbtChatHistory },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
