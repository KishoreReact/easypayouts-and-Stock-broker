import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import TransactionsTable from './components/TransactionsTable';
import { getCompanies, getAccounts, getTransactions } from './api/api';
import './App.css';

function App() {
  const [companies, setCompanies] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function fetchCompanies() {
      const companiesData = await getCompanies();
      setCompanies(companiesData);
      setSelectedCompany(companiesData[0].name);
    }
    fetchCompanies();
  }, []);

  useEffect(() => {
    async function fetchAccounts() {
      if (selectedCompany) {
        const company = companies.find(company => company.name === selectedCompany);
        const accountsData = await getAccounts(company.id);
        setAccounts(accountsData);
        setSelectedAccount(accountsData[0].name);
      }
    }
    fetchAccounts();
  }, [selectedCompany]);

  useEffect(() => {
    async function fetchTransactions() {
      if (selectedAccount) {
        const account = accounts.find(account => account.name === selectedAccount);
        const transactionsData = await getTransactions(account.id);
        setTransactions(transactionsData);
        setBalance(account.balance);
      }
    }
    fetchTransactions();
  }, [selectedAccount]);

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header
          companies={companies}
          accounts={accounts}
          selectedCompany={selectedCompany}
          selectedAccount={selectedAccount}
          handleCompanyChange={(e) => setSelectedCompany(e.target.value)}
          handleAccountChange={(e) => setSelectedAccount(e.target.value)}
        />
        <BalanceCard balance={balance} />
        <TransactionsTable transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
