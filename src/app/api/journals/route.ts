import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId, emotionPre, emotionPost, numQuestions } =
      await request.json();
    if (!userId || !emotionPre || !emotionPost || !numQuestions) {
      return new NextResponse(
        "User id, emotion pre and post, and number of questions need to be provided",
        {
          status: 400,
        }
      );
    }
    const check = await sql`SELECT * FROM users WHERE id = ${userId};`;
    if (!check.rows[0]) {
      return new NextResponse("No user", {
        status: 400,
      });
    }

    await sql`INSERT INTO journals (user_id, emotion_pre, emotion_post, num_questions) VALUES (${userId}, ${emotionPre}, ${emotionPost}, ${numQuestions});`;
    return NextResponse.json({ message: "Journal Created" }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function GET(request: Request) {
  try {
    const { id } = await request.json();
    if (!id) {
      return new NextResponse("ID not provided.", {
        status: 400,
      });
    }

    const journals =
      await sql`SELECT users.id, emotion_pre, emotion_post, timestamp FROM users join journals ON users.id = journals.user_id WHERE users.id = ${id};`;
    return NextResponse.json({ journals: journals.rows }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
