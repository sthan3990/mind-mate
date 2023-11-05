import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId } = await request.json();

    if (!userId) {
      return new NextResponse("User id needs to be provided", {
        status: 400,
      });
    }
    const check = await sql`SELECT * FROM users WHERE id = ${userId};`;
    if (!check.rows[0]) {
      return new NextResponse("No user", {
        status: 400,
      });
    }

    await sql`INSERT INTO cbt_chatsessions (user_id) VALUES (${userId});`;
    return NextResponse.json(
      { message: "Chat CBT Session Created" },
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

    const sessions =
      await sql`SELECT users.id, timestamp FROM users JOIN cbt_chatsessions ON users.id = cbt_chatsessions.user_id WHERE users.id = ${userId};`;
    return NextResponse.json({ sessions: sessions.rows }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}
