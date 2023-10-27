import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return new NextResponse("Email, and password is required", {
        status: 400,
      });
    }
    const login = await sql`SELECT * FROM users WHERE email = ${email};`;
    if (!login.rows[0]) {
      return new NextResponse("No account with that email", {
        status: 400,
      });
    }

    const comparePassword = await bcrypt.compare(
      password,
      login.rows[0].password
    );

    if (!comparePassword) {
      return new NextResponse("password not correct");
    }

    return NextResponse.json(
      { message: "User logged in", userID: login.rows[0].id },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}
