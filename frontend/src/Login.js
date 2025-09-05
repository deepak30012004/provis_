import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      if (res.data.user.role === "warden") {
        navigate("/warden");
      } else if (res.data.user.role === "staff") {
        navigate("/staff");
      } else {
        alert("Unknown role");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Sticker Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 items-center justify-center text-white p-10">
        <div className="max-w-md text-center">
          {/* Sticker / Illustration */}
          {/* <img
            src="https://undraw.co/api/illustrations/approved_re_8h7g.svg"
            alt="Visitor Illustration"
            className="mx-auto mb-6 w-72 drop-shadow-2xl"
          /> */}
    <img
  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
  alt="Visitor ID"
  className="mx-auto mb-6 w-32 drop-shadow-2xl"
/>


          <h1 className="text-5xl font-extrabold mb-4">Visitor Manager</h1>
          <p className="text-lg opacity-90">
            Securely manage visitors with approvals, real-time updates, and
            smart dashboards.
          </p>
        </div>
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50">
        <div className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Welcome Back 👋
          </h2>
         

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email Input */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 shadow-sm">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full focus:outline-none bg-transparent"
              />
            </div>

            {/* Password Input */}
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500 shadow-sm relative">
              <Lock className="text-gray-400 mr-2" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full focus:outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all"
            >
              Login
            </button>
          </form>

          {/* Extra Links */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            
            <span className="hover:text-blue-600 cursor-pointer">Need help?</span>
          </div>

         
          
        </div>
      </div>
    </div>
  );
}

export default Login;
