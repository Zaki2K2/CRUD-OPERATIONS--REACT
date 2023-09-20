import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);

  const setToLocalStorage = (id, Name, Email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", Name);
    localStorage.setItem("Email", Email);
  }

  const handleDelete = (id) => {
    axios.delete(`https://6508099456db83a34d9b9ea0.mockapi.io/crud-youtube/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        console.error("Error deleting data: ", error);
      });
  }

  const getData = () => {
    axios.get("https://6508099456db83a34d9b9ea0.mockapi.io/crud-youtube")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>Read Operation</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.Name}</td>
              <td>{item.Email}</td>
              <td>
                <Link to={`/update/${item.id}/${item.Name}/${item.Email}`}>
                  <button className="btn btn-success" onClick={() => setToLocalStorage(item.id, item.Name, item.Email)}>Edit</button>
                </Link>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <div>
      <Link to="/">
          <button type="button" className="btn btn-primary mx-5">
            Home
          </button>
        </Link> 
      </div>
    </>
  )
}

export default Read;
