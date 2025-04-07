// app/api/login/route.js
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request) {
  const { email, password } = await request.json();

  // Look for user in database
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || user.password !== password) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ user });
}
