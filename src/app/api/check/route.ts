import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users: users.rows }, { status: 200 });
}
