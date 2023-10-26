import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fName = searchParams.get("fName");
  const lName = searchParams.get("lName");
  const email = searchParams.get("email");
  const password = searchParams.get("password");

  try {
    if (!fName || !email || !password)
      throw new Error("First name, email, and password is required");
    await sql`INSERT INTO users (first_name, last_name, email, password) VALUES (${fName}, ${lName}, ${email}, ${password});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  redirect("/");
}
