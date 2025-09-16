const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value;

  // Basic validation example
  if (username === '' || password === '') {
    message.textContent = 'Please fill in both fields.';
    return;
  }

  // Fake login check example (for demo only)
  if (username === 'user' && password === 'password123') {
    message.style.color = 'green';
    message.textContent = 'Login successful! Redirecting...';
    // Here you could redirect or do something else
    setTimeout(() => {
      message.textContent = '';
      form.reset();
    }, 2000);
  } else {
    message.style.color = 'red';
    message.textContent = 'Invalid username or password.';
  }
});
