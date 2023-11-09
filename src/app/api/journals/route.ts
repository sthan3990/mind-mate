import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId, preMoodState, postMoodState, numQuestions } =
      await request.json();
    if (!userId || !preMoodState || !postMoodState || !numQuestions) {
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

    await sql`INSERT INTO journals (user_id, emotion_pre, emotion_post, num_questions) VALUES (${userId}, ${preMoodState}, ${postMoodState}, ${numQuestions});`;
    const journalId =
      await sql`SELECT id FROM journals WHERE id=(SELECT max(id) FROM journals);
    `;
    return NextResponse.json(
      { message: "Journal Created", journalId: journalId.rows[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  try {
    if (!userId) {
      return new NextResponse("ID not provided.", {
        status: 400,
      });
    }

    const journals =
      await sql`SELECT journals.id, emotion_pre, emotion_post, num_questions, timestamp FROM users join journals ON users.id = journals.user_id WHERE users.id = ${userId};`;
    return NextResponse.json({ journals: journals.rows }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
