import React, { useState } from "react";
import "../styles/form.scss";
import { Link } from "react-router";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandel(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/api/auth/register",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={submitHandel}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="Username"
          />
          <input
            onInput={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="Password"
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Alraedy have an account?{" "}
          <Link to="/login" className="toggleAuthform">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
