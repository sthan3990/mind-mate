import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId || isNaN(Number(userId))) {
    return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
  }

  // Extract the updated data from the request body
  const { first_name, last_name, email } = await request.json();

  try {
    // Update the user details in the database
    const result = await sql`
      UPDATE users
      SET first_name = ${first_name}, last_name = ${last_name}, email = ${email}
      WHERE id = ${userId}
      RETURNING first_name, last_name, email;
    `;

    // If user doesn't exist. Return a 404 error
    if (result.rowCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return the updated user details
    return NextResponse.json(result.rows[0], { status: 200 });

  } catch (error) {
    // Handle any unexpected errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
