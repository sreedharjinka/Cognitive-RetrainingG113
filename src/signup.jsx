import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup =  (e) => {
    e.preventDefault();
    try {
      
      const response = axios.post('http://localhost:3001/register', {
        username,
        email,
        password,
      });
      console.log('Signup successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error during signup:', error.message);
      
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      <form>
        <div style={styles.formGroup}>
          <label htmlFor="username" style={styles.label}>
            Full Name:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="button" onClick={handleSignup} style={styles.button}>
          Register
        </button>
      </form>
      <p style={styles.link}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    backgroundImage: "url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',

},
  container: {
    width: '400px',
    margin: 'auto',
    padding: '20px',
    border: '2px solid #555', 
    borderRadius: '10px', 
    backgroundColor: '#C2E4F9', 
},
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  link: {
    textAlign: 'center',
    marginTop: '15px',
  },
};

export default Signup;
