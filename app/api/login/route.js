import { NextResponse } from "next/server";

// Mock "database" of users
const users = [
  { email: "user1@example.com", password: "password1", name: "Alice" },
  { email: "user2@example.com", password: "password2", name: "Bob" }
];

export async function POST(request) {
  const { email, password } = await request.json();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }
  
  // In a real app, you would return a token or session details.
  return NextResponse.json({ user });
}
