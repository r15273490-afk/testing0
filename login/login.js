// Simple Login Script

// Mock user database
const users = [
  { username: 'user1', password: 'password123' },
  { username: 'admin', password: 'adminpass' }
];

// Login function
function login(username, password) {
  if (!username || !password) {
    return { success: false, message: 'Username and password are required' };
  }

  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    return { success: true, message: `Welcome, ${username}!` };
  } else {
    return { success: false, message: 'Invalid username or password' };
  }
}

// Handle form submission
function handleLoginForm(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  const result = login(username, password);
  const messageDiv = document.getElementById('message');
  
  if (result.success) {
    messageDiv.style.color = 'green';
    messageDiv.textContent = result.message;
    document.getElementById('loginForm').reset();
  } else {
    messageDiv.style.color = 'red';
    messageDiv.textContent = result.message;
  }
}

// Attach event listener when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('loginForm');
  if (form) {
    form.addEventListener('submit', handleLoginForm);
  }
});
