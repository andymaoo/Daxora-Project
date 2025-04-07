export async function GET(request) {
  // In a real app, fetch user details from a database or external service
  const user = { name: "John Doe", email: "johndoe@example.com" };
  return new Response(JSON.stringify(user), { status: 200 });
}
