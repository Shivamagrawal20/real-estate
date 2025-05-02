// Authentication functionality for login and signup
document.addEventListener('DOMContentLoaded', function() {
  // Login form handling
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      // In a real application, you would send this data to a server
      // For demo purposes, we'll just show an alert
      alert(`Login attempt with email: ${email}\nIn a real application, this would connect to a backend service.`);
      
      // Simulate successful login
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      
      // Redirect to home page after successful login
      window.location.href = 'index.html';
    });
  }
  
  // Signup form handling
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      
      // Basic validation
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      
      // In a real application, you would send this data to a server
      // For demo purposes, we'll just show an alert
      alert(`Account created for: ${fullname} (${email})\nIn a real application, this would be saved to a database.`);
      
      // Simulate successful signup and login
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', fullname);
      
      // Redirect to home page after successful signup
      window.location.href = 'index.html';
    });
  }
  
  // Check login status (for all pages)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userEmail = localStorage.getItem('userEmail');
  
  // Update navigation based on login status
  const loginBtn = document.querySelector('.login-btn');
  const signupLink = document.querySelector('.signup-link');
  
  if (isLoggedIn && loginBtn && signupLink) {
    // If user is logged in, change the login button to a logout button
    // and the signup link to show the user's email
    loginBtn.textContent = 'Logout';
    loginBtn.href = '#!';
    loginBtn.addEventListener('click', function(e) {
      e.preventDefault();
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      window.location.reload();
    });
    
    signupLink.textContent = userEmail;
    signupLink.href = '#!';
    signupLink.style.pointerEvents = 'none';
  }
});