import React, { useState } from 'react';
import { ref, get } from 'firebase/database';
import { db } from '../../firebase/firebase'; // Ensure correct path
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SuperAdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const superadminRef = ref(db, 'superadmin');
      const snapshot = await get(superadminRef);

      if (snapshot.exists()) {
        const superadminData = snapshot.val();

        // Check if the entered email and password match
        if (superadminData.email === email && superadminData.password === password) {
          toast.success('Login successful!');
          navigate('/branchreg');
        } else {
          toast.error('Invalid email or password.');
        }
      } else {
        toast.error('No data found.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error signing in. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Super Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>

        {error && <p>{error}</p>}
        <ToastContainer />
      </div>
    </div>
  );
};

export default SuperAdminLogin;
