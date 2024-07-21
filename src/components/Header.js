import React from 'react';
import './styles/Header.css';

const Header = ({ companies, accounts, selectedCompany, selectedAccount, handleCompanyChange, handleAccountChange }) => {
  return (
    <div className="header">
      <select value={selectedCompany} onChange={handleCompanyChange}>
        {companies.map((company, index) => (
          <option key={index} value={company.name}>
            {company.name}
          </option>
        ))}
      </select>
      <select value={selectedAccount} onChange={handleAccountChange}>
        {accounts.map((account, index) => (
          <option key={index} value={account.name}>
            {account.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Header;
