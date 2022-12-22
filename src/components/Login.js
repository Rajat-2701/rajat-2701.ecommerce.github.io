import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async () => {
    let result = await fetch("http://localhost:5000/login", {
      method: "Post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn("result", result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("please enter correct details");
    }
  };
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  return (
    <div className="sign-up">
      <h1>Login to Explore!</h1>

      <input
        type="text"
        placeholder="Enter your email"
        className="inputBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="inputBox"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="loginButton" type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
