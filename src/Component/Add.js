import React,{useState} from "react";
import './add.css'

export default function Add() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact,setContact ] = useState('');
    const [email,setEmail ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/employee/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
          body: JSON.stringify({name,email,contact,address})
        })
        .then(response => response.json())
        .then(data => {
            console.log('User added:', data);
           
          setName('');
          setEmail('');
          setContact('');
            setAddress('');
            alert("data submitted");
        })
        .catch(error => console.error('Error adding user:', error));
      };
    return (
        <div>
            
            <div className="user-form">
            <h1>Add employee details</h1>
            <form >
                <input type="text"  placeholder="Enter employee Name" id="name1" value={name} onChange={(e) => setName(e.target.value)} required/><br />
               <input type="address" placeholder="Address:" id="address"  value={address}onChange={(e) => setAddress(e.target.value)} required/><br/>
                <input type="number"placeholder="Enter your contact number:" id="number" value={contact} onChange={(e) => setContact(e.target.value)} required/><br />
                <input type="email" placeholder="Please enter your email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />   
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            </div>
           
        </div>
    )
}
//value={userData.name} onChange={handleChange}
