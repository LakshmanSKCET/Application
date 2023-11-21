

import React, { useState } from 'react';
import './SignUp.css';
import Footer from './Footer';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    
    console.log('Signing up with:', username, email, password);
  };

  return (
    <>
    <div className="signup-container">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button" onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
    <Footer></Footer>
    </>

  );
};


export default SignUp;
