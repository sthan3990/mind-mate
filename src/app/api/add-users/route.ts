import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

const bcrypt = require("bcrypt");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fName = searchParams.get("fName");
  const lName = searchParams.get("lName");
  const email = searchParams.get("email");
  const password = searchParams.get("password");

  const salt = bcrypt.genSaltSync(8);
  const hashedPassword = bcrypt.hashSync(password, salt);

  try {
    if (!fName || !email || !password)
      throw new Error("First name, email, and password is required");
    await sql`INSERT INTO users (first_name, last_name, email, password) VALUES (${fName}, ${lName}, ${email}, ${hashedPassword});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  redirect("/");

  // const users = await sql`SELECT * FROM users;`;
  // return NextResponse.json({ users: users.rows }, { status: 200 });
}
