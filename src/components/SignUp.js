import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });
  const handleSubmit = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "Post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log("result", result);
    if (result) {
      navigate("/");
      localStorage.setItem("user", JSON.stringify(result));
    }
  };
  return (
    <div className="sign-up">
      <h1>Register Yourself!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
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
      <button onClick={handleSubmit} className="appButton" type="submit">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
