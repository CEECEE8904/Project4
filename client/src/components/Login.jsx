import React from 'react';
import { Link } from 'react-router-dom';


// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
    <div className="auth-container">
      <img src={require('./images/logo_final.png')} />
      <h2>SNKR HEDZ </h2>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();
      }} >
        <p>Username:</p>
        <input name="username" type="text" value={props.formData.username} placeholder="Enter Username" onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} placeholder="Enter Password" onChange={props.handleChange} />
        <hr />
        <div className="log-reg-button">
          <button>Login</button>
          &nbsp;
          <button><Link to="/register">Register</Link></button>
        </div>
      </form>
    </div>
  );
}

export default Login;