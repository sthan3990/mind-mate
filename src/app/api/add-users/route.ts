import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const fName = "Alice";
  const lName = "Smith";
  const email = "smith@gmail.com";
  const password = "password";

  try {
    if (!fName || !email || !password)
      throw new Error("First name, email, and password is required");
    await sql`INSERT INTO users (first_name, last_name, email, password) VALUES (${fName}, ${lName}, ${email}, ${password});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users: users.rows }, { status: 200 });
}
