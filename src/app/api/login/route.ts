import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const password = searchParams.get("password");
  try {
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

    // let response = NextResponse.next()

    let response = NextResponse.json(
      { message: "User logged in", userID: login.rows[0].id },
      { status: 200 }
    );
    response.cookies.set("User", login.rows[0].id)
    console.log("cookkies: ", response.cookies);
    return response;

  } catch (error) {
    console.log(error);
  }
}
