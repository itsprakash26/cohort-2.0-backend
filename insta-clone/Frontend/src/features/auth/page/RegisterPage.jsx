import React, { useState } from "react";
import "../styles/form.scss";
import { Link, useNavigate } from "react-router";
import { register } from "../services/auth.api";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {
  const { user, loading, handleRegister } = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function submitHandel(e) {
    e.preventDefault();

    await handleRegister(username, email, password);
    navigate("/");

    try {
      const data = await register(username, email, password);

      console.log(data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  }
  if (loading) {
    return (
      <main>
        <h1>Loading....</h1>
      </main>
    );
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>

        <form onSubmit={submitHandel}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Username"
            required
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="toggleAuthform">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
