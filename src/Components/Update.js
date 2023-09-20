import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Update = () => {
  const { id, Name, Email } = useParams();
  const [updateName, setUpdateName] = useState(Name || "");
  const [updateEmail, setUpdateEmail] = useState(Email || "");

  const handleUpdate = () => {
    axios.put(`https://6508099456db83a34d9b9ea0.mockapi.io/crud-youtube/${id}`, {
      Name: updateName,
      Email: updateEmail
    })
    .then((response) => {
      console.log("Data updated successfully:", response.data);
      // Optionally, you can redirect to another page after successful update
      window.location.href = '/Read'; 
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });
  }

  return (
    <>
      <form>
        <div className="mb-3">
          <label className="form-label"><h2>Name: </h2></label>
          <input
            type="text"
            className="form-control"
            aria-describedby="textHelp"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label"><h2>Email address</h2></label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={updateEmail}
            onChange={(e) => setUpdateEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button type="button" className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>

        <Link to="/">
          <button type="button" className="btn btn-primary mx-5">
            Home
          </button>
        </Link> 
      </form>
    </>
  )
}

export default Update;
