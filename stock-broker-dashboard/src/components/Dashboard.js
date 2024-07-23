import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import StockCard from './StockCard';
import '../styles/Dashboard.css';

const socket = io('http://localhost:4000'); 

const Dashboard = ({ user1, user2, onLogout }) => {
  const [stocks, setStocks] = useState({
    GOOG: 0,
    TSLA: 0,
    AMZN: 0,
    META: 0,
    NVDA: 0,
  });

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('stockUpdate', (updatedStocks) => {
      setStocks(updatedStocks);
    });

    return () => {
      socket.off('stockUpdate');
    };
  }, []);

  return (
    <div className="dashboard-container">
      {user1 && (
        <div className="user-dashboard">
          <h3>User 1 Dashboard</h3>
          <StockCard user={user1} stocks={stocks} />
          <button onClick={() => onLogout(false)}>Logout</button>
          {!user2 && (
            <button onClick={() => window.location.href = '/login'}>Login as Second User</button>
          )}
        </div>
      )}
      {user2 && (
        <div className="user-dashboard">
          <h3>User 2 Dashboard</h3>
          <StockCard user={user2} stocks={stocks} />
          <button onClick={() => onLogout(true)}>Logout</button>
          {!user1 && (
            <button onClick={() => window.location.href = '/login'}>Login as First User</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
