import React, { useState } from 'react';
import '../../css/c_signup.css';


function C_signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); // For image upload

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform client-side validation (optional but recommended)
    if (!username || !email || !password) {
      alert('Please fill in all required fields.');
      return; // Prevent form submission if validation fails
    }

    // Handle form submission logic here
    console.log('Signup details:', username, email, password); // Example for debugging

    // Handle uploaded image (optional)
    if (selectedFile) {
      // Implement logic to handle the uploaded file (e.g., upload to server)
      console.log('Uploaded file:', selectedFile);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <h2>Client Signup</h2>
      <div id="clientSketch">
        {/* Option 1: Image upload input (recommended) */}
        <input type="file" id="clientSketchPhoto" onChange={handleFileChange} />
        {/* Option 2: Display a placeholder image (for display only) */}
        {/* <img src="path/to/placeholder_image.jpg" alt="Client Sketch Placeholder" /> */}
      </div>
      <form id="clientSignupForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="clientUsername"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default C_signup;
