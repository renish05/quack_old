import React, { useState } from 'react';
import '../../css/c_login.css';
import Cors from 'Cors';
 
function C_login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform client login validation here
    console.log('Email:', email, 'Password:', password); // Example for debugging
  };

  return (
    <div>
      <h2>Client Login</h2>
      <form id="clientLoginForm" onSubmit={handleSubmit}>
        <input
          type="email"
          id="clientEmail"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="clientPassword"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default C_login;
