document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validate username (alphabets only)
    if (!/^[a-zA-Z]+$/.test(username)) {
        alert('Username must contain only alphabets!');
        return;
    }
    
    // Accept any password
    if (username && password) {
        // Store login status
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);
        
        // Redirect to game
        window.location.href = 'index.html';
    } else {
        alert('Please enter both username and password!');
    }
});