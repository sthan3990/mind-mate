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

    let response = NextResponse.json({ message: "user Created" }, { status: 200 });
    response.cookies.set("User", user.rows[0].id)
    return response;

  } catch (error) {
    console.error(error);
  }
}

export async function GET(request: Request) {
  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users: users.rows }, { status: 200 });
}

export async function PATCH(request: Request) {
  // Extract the updated data from the request body
  const { userId, password } = await request.json();
  console.log("password in route: ", password);

  if (!userId || isNaN(Number(userId))) {
    return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
  }


  try {

    const salt = bcrypt.genSaltSync(8);
    const hashedPassword = bcrypt.hashSync(password, salt)
    console.log("hashed: ", hashedPassword)
    // Update the user details in the database
    const result = await sql`
      UPDATE users
      SET password = ${hashedPassword}
      WHERE id = ${userId}
      RETURNING password;
    `;

    // If user doesn't exist. Return a 404 error
    if (result.rowCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the updated user details
    return NextResponse.json(result.rows[0], { status: 200 });

  } catch (error) {
    // Handle any unexpected errors
    return NextResponse.json({ error: error }, { status: 500 });
  }

}
