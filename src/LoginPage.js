import React, { useState } from "react";
import logo from "./assets/Group 3.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "user@gmail.com" && password === "pass") {
      // Redirect to dashboard on successful login
      window.location.href = "/dashboard";
    } else {
      // Show popup for invalid credentials
      alert("Invalid credentials. Please provide valid username and password.");
    }
  };

  return (
    <div
      style={{
        background: "#fafafa",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          background: "linear-gradient(90deg, #000000 0%, #000E09 100%)",
          borderRadius: "10px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "90px",
            height: "90px",
            mixBlendMode: "normal",
            opacity: "1",
          }}
        />
        <p
          style={{
            width: "146px",
            height: "20px",
            textAlign: "center",
            font: "normal normal normal 16px/21px Mulish",
            letterSpacing: "0.02px",
            color: "#36A546CC",
            opacity: "1",
          }}
        >
          We are Electric
        </p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            marginTop: "20px",
            padding: "10px",
            width: "250px",
            background: "#1F191966",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
            mixBlendMode: "normal",
            opacity: "1",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginTop: "20px",
            padding: "10px",
            width: "250px",
            background: "#1F191966",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            boxShadow: "inset 0px 3px 3px #FFFDFD40, 3px 3px 3px #4A494947",
            mixBlendMode: "normal",
            opacity: "1",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            marginTop: "20px",
            padding: "10px",
            height: "42px",
            width: "238px",
            background:
              "transparent linear-gradient(180deg, #00FF2580 0%, #000000 100%, #36A54680 100%) 0% 0% no-repeat padding-box",
            color: "#FFFFFF8C",
            letterspacing: "0.02px",
            font: "normal normal bold 16px/21px Mulish",
            border: "2px solid #8CFF0026",
            borderRadius: "25px",
            mixBlendMode: "normal",
            opacity: "1",
          }}
        >
          Login
        </button>
        <button
          onClick={() =>
            alert("Please enter user for email and pass for password fields")
          }
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            color: "#36A546",
            border: "none",
            borderRadius: "5px",
            background: "transparent",
          }}
        >
          Forgot Password ?
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
