import React, { useState } from 'react';
import './add.css'
function Edit() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log('Update button clicked');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Contact:', contact);
    console.log('Address:', address);

    fetch(`http://localhost:3001/employee/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        contact,
        address,
      }),
    })
      .then(response => {
        if (response.ok) {
          
          alert('User updated successfully');
          setId('');
          setName('');
          setEmail('');
          setContact('');
          setAddress('');
        } else {
          
            console.error('Error updating user:');
          
          
        }
      })
      .catch((error) => {
        console.error(' error:', error);
        
      });
  };

  return (
    <div className='edit'>
      <h1>Update User</h1>
      <form onSubmit={handleUpdate}>
       <label>ID:</label>
          <input type="text" value={id} onChange={e => setId(e.target.value)} required /><br/>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required /><br/>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required /><br/>
          <label>Contact:</label>
          <input type="text" value={contact} onChange={e => setContact(e.target.value)} required /><br/>
          <label>Address:</label>
          <input type="text" value={address} onChange={e => setAddress(e.target.value)} required /><br/>
        <button type="submit" >Update User</button>
      </form>
    </div>
  );
}

export default Edit;
