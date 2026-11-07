import React, { useState } from "react";
import "../styles/form.scss";
import { Link, useNavigate } from "react-router";
import { login } from "../services/auth.api";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {
  const { user, loading, handleLogin } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function submithandler(e) {
    e.preventDefault();

    await handleLogin(username, password);
    navigate("/");

    try {
      const data = await login(username, password);

      console.log(data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }

  }

  if(loading){
    return (<main>
      <h1>Loading....</h1>
    </main>)
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>

        <form onSubmit={submithandler}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            placeholder="Username"
            required
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            required
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="/register" className="toggleAuthform">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
