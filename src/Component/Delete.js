import React, { useState } from 'react';
import './add.css'

function Delete() {
  const [name, setName] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3001/employee/users/${name}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          console.log('User deleted successfully');
          alert('User deleted successfully');
          setName(''); // Clear the input field
        } else if (response.status === 404) {
          console.error('User not found');
          alert('User not found');
        } else {
          console.error('Error deleting user:', response.statusText);
          alert('Error deleting user');
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
        alert('Network error');
      });
  };

  return (
    <div className='delete'>
      <h1>Delete User</h1>
      <form >
     
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      <br/>
        <button type="submit" onClick={handleDelete}>Delete User</button>
      </form>
    </div>
  );
}

export default Delete;
