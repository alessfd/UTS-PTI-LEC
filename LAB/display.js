let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
function displayTransactions() 
{
  const transactionList = document.getElementById('transaction-list');
  transactionList.innerHTML = '';
  transactions.forEach(transaction => 
  {
    const item = document.createElement('div');
    item.innerText = `${transaction.name} - Rp.${transaction.price}.000 (${transaction.category})`;
    if (transaction.type === 'income') 
    {
      item.style.color = 'green';
    } 
    else 
    {
      item.style.color = 'red';
    }
    transactionList.appendChild(item);
  });

  const balance = transactions.reduce((total, transaction) => 
  {
    return transaction.type === 'income' ? total + transaction.price : total - transaction.price;
  }, 0);
  document.getElementById('balance').innerText = `Balance: Rp.${balance}.000`;
  localStorage.setItem('transactions', JSON.stringify(transactions));
  
}
displayTransactions(transactions);

document.addEventListener('DOMContentLoaded', function () {
  const username = localStorage.getItem('username');
  const usernameElement = document.getElementById('username');
  if (username) {
    usernameElement.textContent = username;
  } 
  else 
  {
    usernameElement.textContent = 'Guest';
  }
});
