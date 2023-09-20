import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if Name and Email are not empty
    if (!Name || !Email) {
      alert("Both Name and Email fields are required.");
      return;
    }

    axios.post('https://6508099456db83a34d9b9ea0.mockapi.io/crud-youtube', {
      Name: Name,
      Email: Email
    })
    .then((response) => {
      console.log("Data sent successfully:", response.data);
      setName("");
      setEmail("");
      navigate('/read');
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
  }

  return (
    <div>
      <h2>CREATE</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="textHelp"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address:</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Create;


