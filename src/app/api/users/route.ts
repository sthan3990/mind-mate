import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export async function POST(request: Request) {
  try {
    const { fName, lName, email, password } = await request.json();
    if (!fName || !email || !password) {
      return new NextResponse("First name, email, and password is required", {
        status: 400,
      });
    }
    const check = await sql`SELECT * FROM users WHERE email = ${email};`;
    if (check.rows[0]) {
      return new NextResponse("Account already exists", {
        status: 400,
      });
    }

    const salt = bcrypt.genSaltSync(8);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = await sql`INSERT INTO users 
    (first_name, last_name, email, password) 
    VALUES (${fName}, ${lName}, ${email}, ${hashedPassword}) 
    RETURNING *;`;
    let response = NextResponse.next()
    response.cookies.set("User", user.rows[0].id)
    return NextResponse.json({ message: "user Created" }, { status: 200 });
  } catch (error) {
    console.error(error);
  }
}

export async function GET(request: Request) {
  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users: users.rows }, { status: 200 });
}
