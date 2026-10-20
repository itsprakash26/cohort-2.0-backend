<<<<<<< HEAD
import React, { useState } from "react";
import "../styles/form.scss";
import { Link } from "react-router";
import axios from "axios";
=======
import React from 'react'
import '../styles/form.scss'
import { Link } from "react-router";
>>>>>>> f09323534822a7693c124dbd3787f15bedb32998

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submithandler(e) {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/api/auth/login",
        {
          username,
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
        <h1>Login</h1>
        <form onSubmit={submithandler}>
          <input
            onInput={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            placeholder="username"
          />
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
        <p>
<<<<<<< HEAD
          Alraedy have an account?{" "}
          <Link to="/register" className="toggleAuthform">
            {" "}
            Register
          </Link>
=======
          Alraedy have an account? <Link to="/register" className="toggleAuthform"> Register</Link>
>>>>>>> f09323534822a7693c124dbd3787f15bedb32998
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
