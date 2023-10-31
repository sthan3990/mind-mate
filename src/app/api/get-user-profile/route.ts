import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Extract the user ID from the URL path
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  console.log("searchParams: ", searchParams);

  // Ensure user ID exists
  if (!userId || isNaN(Number(userId))) {
    return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
  }
  console.log("userId in api route: ", userId);
  try {
    // Fetch user from db
    const user = await sql`SELECT first_name, last_name, email FROM users WHERE id = ${userId};`;
    // const user = await sql`SELECT * FROM users;`;
    console.log("user: ", user);

    // const user = await sql`SELECT * FROM users`;

    console.log("user api route: ", user);

    // If no user, return 404
    if (user.rowCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user.rows[0], { status: 200 });

  } catch (error) {
    // Handle any unexpected errors
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

// return NextResponse.json({ user: user }, { status: 200 });