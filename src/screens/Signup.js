import React from "react";

import "./Signup.css";

const Signup = () => {
  return (
    <div className='Signup'>
      <h2>Sign Up</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </p>
      <div className='Signup-form'>
        <div>
          <h3>Sign up</h3>
          <form>
            <input
              className='first-name'
              type='text'
              placeholder='First name'
            />
            <input className='last-name' type='text' placeholder='Last name' />
            <input className='email' type='email' placeholder='Email address' />
            <input type='Password' placeholder='Create password' />
            <button>Sign Un</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
