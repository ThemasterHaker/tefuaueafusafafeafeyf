document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform basic validation
    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '' || username.trim() === '' || password.trim() === '') {
        document.getElementById('message').innerText = 'Please fill in all fields.';
        return;
    }

    // Check if username or email already exists in local storage
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var userExists = users.some(function(user) {
        return user.username === username || user.email === email;
    });

    if (userExists) {
        document.getElementById('message').innerText = 'Username or email already exists.';
        return;
    }

    // Save new user to local storage
    var newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Display success message
    document.getElementById('message').style.color = '#007bff';
    document.getElementById('message').innerText = 'Signup successful. Redirecting...';

    // Redirect the user after a short delay
    setTimeout(function() {
        window.location.href = 'login.html'; // Redirect to login page
    }, 2000); // 2 seconds delay
});
