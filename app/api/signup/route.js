// app/api/signup/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  const { email, password, name } = await request.json();

  // Check if the user exists in database
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  // If new user
  const newUser = await prisma.user.create({
    data: { email, password, name },
  });

  return NextResponse.json({ user: newUser }, { status: 201 });
}
