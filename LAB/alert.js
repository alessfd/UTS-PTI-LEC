document.addEventListener('DOMContentLoaded', function () 
{
  document.getElementById('clear-history').addEventListener('click', function() 
  {
    localStorage.removeItem('transactions');
    alert('Transaction history has been cleared.');
  });
});
