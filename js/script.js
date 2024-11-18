document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Check if both username and password are empty
    if (username === '' && password === '') {
        errorMessage.textContent = 'Both username and password are required.';
    }
    // Check if username is empty
    else if (username === '') {
        errorMessage.textContent = 'Username is required.';
    }
    // Check if password is empty
    else if (password === '') {
        errorMessage.textContent = 'Password is required.';
    }
    // Simulate login check with correct credentials
    else if (username === 'student' && password === 'password123') {
        errorMessage.textContent = ''; // Clear error message
        alert('Login successful!');
    }
    // Invalid username or password
    else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});

