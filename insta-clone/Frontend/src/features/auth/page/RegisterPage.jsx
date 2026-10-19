import React from "react";
import "../styles/form.scss";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Enter Your Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>
          Alraedy have an account? <Link to="/login" className="toggleAuthform"> Login</Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
