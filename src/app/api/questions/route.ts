import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { journalId, question } = await request.json();
    if (!journalId || !question) {
      return new NextResponse("Journal Id and question need to be provided", {
        status: 400,
      });
    }
    const check = await sql`SELECT * FROM journals WHERE id = ${journalId};`;
    if (!check.rows[0]) {
      return new NextResponse("No user", {
        status: 400,
      });
    }

    await sql`INSERT INTO questions (journal_id, question) VALUES (${journalId}, ${question});`;
    return NextResponse.json(
      { message: "Question entry created" },
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
  try {
    if (!userId) {
      return new NextResponse("User ID not provided.", {
        status: 400,
      });
    }

    if (!journalId) {
      return new NextResponse("Journal ID not provided.", {
        status: 400,
      });
    }

    const questions =
      await sql`SELECT users.id, journals.id, question, questions.timestamp FROM users JOIN journals ON users.id = journals.user_id JOIN questions ON journals.id = questions.journal_id WHERE users.id = ${userId} AND journals.id = ${journalId};`;
    return NextResponse.json({ questions: questions.rows }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
