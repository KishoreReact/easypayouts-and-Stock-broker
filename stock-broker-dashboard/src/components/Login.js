import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [isSecondUser, setIsSecondUser] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email) {
      setUser({ email }, isSecondUser);
      navigate('/dashboard');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isSecondUser ? 'Login as Second User' : 'Login'}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <div className="switch-user">
          <button onClick={() => setIsSecondUser(!isSecondUser)}>
            {isSecondUser ? 'Login as First User' : 'Login as Second User'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
