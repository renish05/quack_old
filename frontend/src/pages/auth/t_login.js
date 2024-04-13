import React, { useState } from 'react';
import '../../css/t_login.css';


function T_login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform technician login validation here
    console.log('Email:', email, 'Password:', password); // Example for debugging
  };

  return (
    <div>
      <h2>Technician Login</h2>
      <form id="technicianLoginForm" onSubmit={handleSubmit}>
        <input
          type="email"
          id="technicianEmail"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="technicianPassword"
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

export default T_login;
