import React from 'react'
import '../styles/form.scss'
const LoginPage = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <input type="text" name='username' placeholder="username" />
          <input type="password" name='password' placeholder="password" />
          <button type="submit" >Login</button>
        </form>
      </div>
    </main>
  )
}

export default LoginPage
