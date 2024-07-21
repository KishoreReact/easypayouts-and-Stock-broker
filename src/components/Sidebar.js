import React from 'react';
import './styles/Sidebar.css';
import logo from './images/EasyPayoutLogo.png';
import loadsLogo from './images/LoadLogo.png'; 
import statementsLogo from './images/StatementsLogo.png'; 
import transactionsLogo from './images/TransactionsLogo.png'; 
import logoutLogo from './images/LogoutLogo.png';



const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" />
      <ul className="nav">
        <li><img src={loadsLogo} alt="Logo" className='nav-logo '/>Loads</li>
        <li><img src={statementsLogo} alt="Logo" className='nav-logo'/>Statements</li>
        <li><img src={transactionsLogo} alt="Logo" className='nav-logo'/>Transactions</li>
      </ul>
      <button className="logout"><img src={logoutLogo} alt="Logo" className='nav-logo'/>Logout</button>
    </div>
  );
};

export default Sidebar;
