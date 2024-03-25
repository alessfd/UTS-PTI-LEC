document.addEventListener('DOMContentLoaded', function () 
{
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function (event) 
  {
    event.preventDefault();
    window.location.href = 'index.html';
  });
});

document.addEventListener('DOMContentLoaded', function () 
{
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function (event) 
  {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value;
    localStorage.setItem('username', username);
    window.location.href = 'Index.html';
  });
});
