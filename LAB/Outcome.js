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

function handleFormSubmit(formId, type) 
{
  const form = document.getElementById(formId);
  form.addEventListener('submit', function(event) 
  {
    event.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const price = parseFloat(form.querySelector('input[type="number"]').value);
    const category = form.querySelector('select').value;
    if (name && price && category) 
    {
      transactions.push({ name, price, category, type });
      displayTransactions();
      form.reset();
      document.getElementById(`${type}-notification`).innerText = 'Transaction successful!';
      document.getElementById(`${type}-notification`).classList.add('success');
      setTimeout(function() 
      {
        document.getElementById(`${type}-notification`).innerText = '';
        document.getElementById(`${type}-notification`).classList.remove('success');
      }, 3000);
    } 
    else 
    {
      document.getElementById(`${type}-notification`).innerText = 'Transaction incomplete, please fill out all fields!';
      document.getElementById(`${type}-notification`).classList.add('error');
      setTimeout(function() {
        document.getElementById(`${type}-notification`).innerText = '';
        document.getElementById(`${type}-notification`).classList.remove('error');
      }, 3000);
    }
  });
}
handleFormSubmit('outcome-form', 'outcome');
displayTransactions(transactions);