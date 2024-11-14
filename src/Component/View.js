import React from "react";
import Navbar2 from "./Navbar2";
import './Table.css';
import { useEffect, useState } from "react";

export default function View() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch('http://localhost:3001/employee/users')
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <div>
          <h1>View Employee Details</h1>
            <Navbar2 />
            <div>
        <h2>Employee List</h2>
        <table>
        <thead>
        
              <tr>
              <th></th>
              <th> ID</th>
            <th> Name</th>
            <th>Email</th>
            <th>Address</th>
                <th>Contact</th>
                
                <th></th>
             </tr>
           
          </thead>
          <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td><button className="b1">edit</button></td>
                  <td>{ user.id}</td>
                  <td>{ user.name}</td>
                  <td>{ user.email}</td>
                  <td>{ user.address}</td>
              <td>{user.contact}</td>
              
              <td><button className="b1">delete</button></td>
              </tr>
             ))}
          </tbody>
        </table>
      </div>
        </div>
    )
}