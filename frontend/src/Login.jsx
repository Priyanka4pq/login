import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="min-h-screen flex">
      
    {/*  */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-700 to-blue-900 items-center justify-center">
        <div className="text-white text-center px-10">
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-lg opacity-80">
            Login to continue managing your dashboard
          </p>
        </div>
      </div>

   {/*  */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Login
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Please login to your account
          </p>

          <div className="mb-4">
            <label className="block text-sm text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter password"
            />
          </div>

          <button className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
            Login
          </button>

        </div>
      </div>
    </div>
  );
}
