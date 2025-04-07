"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      router.push("/login");
    } else {
      setUser(storedUser);
      fetch("/api/subscriptions")
        .then((res) => res.json())
        .then((data) => setSubscriptions(data.subscriptions))
        .catch((err) => console.error("Error fetching subscriptions:", err));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-lg text-gray-600">Welcome, {user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded">
            Logout
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Active Subscriptions</h2>
          {subscriptions.length > 0 ? (
            <ul className="space-y-3">
              {subscriptions.map((sub, index) => (
                <li key={index} className="p-4 border rounded-lg hover:shadow-lg transition duration-200">
                  {sub}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No active subscriptions found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
