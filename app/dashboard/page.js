"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Check if user is logged in (using localStorage)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(storedUser);
      // Fetch active subscriptions from the API
      fetch("/api/subscriptions")
        .then((res) => res.json())
        .then((data) => setSubscriptions(data.subscriptions));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome, {user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Active Subscriptions</h2>
          {subscriptions.length > 0 ? (
            <ul>
              {subscriptions.map((sub, index) => (
                <li key={index} className="border-b py-2">
                  {sub}
                </li>
              ))}
            </ul>
          ) : (
            <p>No active subscriptions.</p>
          )}
        </div>
      </div>
    </div>
  );
}
