import React, { useState } from 'react';
import '../styles/StockCard.css';

const StockCard = ({ user, stocks }) => {
  const [subscribedStocks, setSubscribedStocks] = useState([]);

  const handleSubscribe = (stock) => {
    if (!subscribedStocks.includes(stock)) {
      setSubscribedStocks([...subscribedStocks, stock]);
    }
  };

  return (
    <div className="stock-card">
      <h4>{user.email}'s Subscribed Stocks</h4>
      <div className="subscribe-section">
        {Object.keys(stocks).map((stock) => (
          <button key={stock} onClick={() => handleSubscribe(stock)}>
            Subscribe to {stock}
          </button>
        ))}
      </div>
      <div className="stocks-section">
        {subscribedStocks.map((stock) => (
          <div key={stock} className="stock-info">
            <p>{stock}: ${stocks[stock]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockCard;
