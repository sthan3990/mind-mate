import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { questionId, answer } = await request.json();
    if (!questionId || !answer) {
      return new NextResponse("Journal Id and question need to be provided", {
        status: 400,
      });
    }
    const check = await sql`SELECT * FROM journals WHERE id = ${questionId};`;
    if (!check.rows[0]) {
      return new NextResponse("No user", {
        status: 400,
      });
    }

    await sql`INSERT INTO responses (question_id, answer) VALUES (${questionId}, ${answer});`;
    return NextResponse.json(
      { message: "Responses entry created" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");
  const journalId = searchParams.get("journalId");
  const questionId = searchParams.get("questionId");
  try {
    //const { userId, journalId, questionId } = await request.json();
    if (!userId) {
      return new NextResponse("User ID not provided.", {
        status: 400,
      });
    }

    if (!journalId) {
      return new NextResponse("User ID not provided.", {
        status: 400,
      });
    }

    if (!questionId) {
      return new NextResponse("User ID not provided.", {
        status: 400,
      });
    }

    const responses =
      await sql`SELECT users.id, journals.id, questions.id, answer, responses.timestamp FROM users JOIN journals ON users.id = journals.user_id JOIN questions ON journals.id = questions.journal_id JOIN responses ON questions.id = responses.question_id WHERE users.id = ${userId} AND journals.id = ${journalId} AND questions.id = ${questionId};`;
    return NextResponse.json({ responses: responses.rows }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
