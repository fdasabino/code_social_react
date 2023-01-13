import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Code Social</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta facilis pariatur architecto
            totam magnam illo expedita blanditiis obcaecati animi non.
          </p>
          <span>I have an account</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h2>Register</h2>
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
