export async function GET(request) {
  const subscriptions = [
    "Subscription A",
    "Subscription B",
    "Subscription C",
  ];
  return new Response(JSON.stringify({ subscriptions }), {
    status: 200,
  });
}
