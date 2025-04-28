document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // Normally you would send this data to a server for authentication
  // For now, we'll just simulate a successful login
  console.log('Login attempt:', { email, password });
  
  // Redirect to dashboard after successful login
  window.location.href = 'dashboard.html';
});
  