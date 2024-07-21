import React from 'react';
import './styles/TransactionsTable.css';

const TransactionsTable = ({ transactions }) => {
  return (
    <div className="transactions-table">
      <h4>Latest Loads are displayed here</h4>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Credit</th>
            <th>A/c Balance</th>
            <th>UTR/RRN</th>
            <th>A/c No / UPI</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td className='credit'>₹ {transaction.credit}</td>
              <td>{transaction.balance}</td>
              <td>{transaction.utr_rrn}</td>
              <td>{transaction.account_no_upi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
