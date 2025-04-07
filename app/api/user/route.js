export async function GET(request) {
  const user = { name: "John Doe", email: "johndoe@example.com" };
  return new Response(JSON.stringify(user), { status: 200 });
}
