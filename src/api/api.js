export const getCompanies = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  // Assuming each user is a company
  return data.map(user => ({ name: user.name, id: user.id }));
};

export const getAccounts = async (companyId) => {
  // Using posts as accounts for demonstration
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${companyId}`);
  const data = await response.json();
  return data.slice(0, 2).map((post, index) => ({
    name: `Account ${index + 1}`,
    id: post.id,
    balance: Math.floor(Math.random() * 10000) + 1000  // Random balance
  }));
};

export const getTransactions = async (accountId) => {
  // Using comments as transactions for demonstration
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${accountId}`);
  const data = await response.json();
  return data.map(comment => ({
    date: new Date().toISOString(),
    credit: Math.floor(Math.random() * 1000) + 100,
    balance: Math.floor(Math.random() * 10000) + 1000,
    utr_rrn: comment.id,
    account_no_upi: `UPI/${comment.postId}`
  }));
};
