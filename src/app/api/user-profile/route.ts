import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  // Extract the user ID from the URL path
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  // Ensure user ID exists
  if (!userId || isNaN(Number(userId))) {
    return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
  }
  console.log("userId in api route: ", userId);
  try {
    // Fetch user from db
    const user = await sql`SELECT first_name, last_name, email, password FROM users WHERE id = ${userId};`;

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

export async function PATCH(request: Request) {
  // Extract the updated data from the request body
  const { first_name, last_name, email, userId, password } = await request.json();
  console.log("password in route: ", password);

  if (!userId || isNaN(Number(userId))) {
    return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
  }


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
    return NextResponse.json({ error: error }, { status: 500 });
  }

}


export async function DELETE(request: Request) {
  // Extract the updated data from the request body

  const userId = cookies().get("User")?.value;

  console.log("userId in delete route: ", userId);

  if (!userId || isNaN(Number(userId))) {
    return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
  }

  try {
    // Delete the user in the database
    const result = await sql`
      DELETE FROM users
      WHERE id = ${userId}
    `;

    // If user doesn't exist. Return a 404 error
    if (result.rowCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Return success message if user deleted
    return NextResponse.json({ message: "User successfully deleted" }, { status: 200 });

  } catch (error) {
    console.error("Error in DELETE route:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }

}