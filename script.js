document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');
    var rememberCheckbox = document.getElementById('remember');
    var usernameField = document.getElementById('username');
    var passwordField = document.getElementById('password');
  
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var username = usernameField.value;
        var password = passwordField.value;

        // Basic email validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(username)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (username === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }

        // For simplicity, let's assume username and password are correct
        // In a real-world scenario, you would validate against a database or an API
        alert('Login successful!');

        // Reset the form
        loginForm.reset();
    });

    document.getElementById('forgotPassword').addEventListener('click', function (event) {
        event.preventDefault();
        alert('Forgot Password?');
    });
});
