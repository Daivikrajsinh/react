import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
  
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
  
    axios
      .get("http://localhost:3005/user")
      .then((res) => {
        const user = res.data.find(
          (user) => user.email === email && user.password === password
        );
  
        if (user) {
          alert("Login Successful");
          localStorage.setItem("userStorage", JSON.stringify(user));
          setEmail("");
          setPassword("");
          setError("");
          navigate("/welcome")
        } else {
          setError("Username or password incorrect.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("An error occurred. Please try again.");
      });
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Sign In
        </h2>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

   
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign In
            </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
