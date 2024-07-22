import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [user1, setUser1] = useState(null);
  const [user2, setUser2] = useState(null);

  useEffect(() => {
    const savedUser1 = JSON.parse(localStorage.getItem('user1'));
    const savedUser2 = JSON.parse(localStorage.getItem('user2'));
    if (savedUser1) setUser1(savedUser1);
    if (savedUser2) setUser2(savedUser2);
  }, []);

  const handleLogin = (user, isSecondUser) => {
    if (isSecondUser) {
      localStorage.setItem('user2', JSON.stringify(user));
      setUser2(user);
    } else {
      localStorage.setItem('user1', JSON.stringify(user));
      setUser1(user);
    }
  };

  const handleLogout = (isSecondUser) => {
    if (isSecondUser) {
      localStorage.removeItem('user2');
      setUser2(null);
    } else {
      localStorage.removeItem('user1');
      setUser1(null);
    }
  };

  return (
    <Routes>
      <Route path="/login" element={<Login setUser={handleLogin} />} />
      <Route
        path="/dashboard"
        element={user1 || user2 ? <Dashboard user1={user1} user2={user2} onLogout={handleLogout} /> : <Navigate to="/login" />}
      />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
