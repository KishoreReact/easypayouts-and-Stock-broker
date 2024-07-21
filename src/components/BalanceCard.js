import React from 'react';
import './styles/BalanceCard.css';
import balanceImage from './images/BalanceImage.png';

const BalanceCard = ({ balance }) => {
  return (
    <div className="balance-card">
      <img src={balanceImage} alt="Logo"/>
      <div className='bal-avl'>
      <h3>Available Balance</h3>
      <p>₹ {balance.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
};

export default BalanceCard;
