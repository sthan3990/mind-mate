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
    const check = await sql`SELECT * FROM users WHERE email = ${email};`;
    console.log(check.rows[0]);
    if (!fName || !email || !password) {
      throw new Error("First name, email, and password is required");
    } else if (check.rows[0]) {
      throw new Error("Account already exists");
    } else {
      await sql`INSERT INTO users (first_name, last_name, email, password) VALUES (${fName}, ${lName}, ${email}, ${hashedPassword});`;
    }
  } catch (error) {
    console.log(error);
  }
  redirect("/");

  // const users = await sql`SELECT * FROM users;`;
  // return NextResponse.json({ users: users.rows }, { status: 200 });
}