import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
const GetRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await   axios.get('http://localhost:5000/api/books/getrequest');
          const data = response.data;
            setRequests(response.data.getreq);

        } catch (error) {
            console.log(error);
        }
    }
     fetchData();
  }, []);

  return (
   <>
   <Navbar/>
   <div className="container mt-4">
      <h2 style={{color:"orange"}}>User Requests</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th style={{color:"blue"}}>Username</th>
            <th style={{color:"blue"}}>Book Name</th>
            <th style={{color:"blue"}}>Email</th>
            <th style={{color:"blue"}}>Author</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request._id}>
              <td>{request.username}</td>
              <td>{request.name}</td>
              <td>{request.email}</td>
              <td>{request.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
   </>
  );
};

export default GetRequest;
