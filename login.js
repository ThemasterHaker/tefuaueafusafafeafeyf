document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var emailOrUsername = document.getElementById('emailOrUsername').value;
    var password = document.getElementById('password').value;

    // Perform basic validation
    if (emailOrUsername.trim() === '' || password.trim() === '') {
        document.getElementById('message').innerText = 'Please fill in all fields.';
        return;
    }

    // Check if the entered credentials match the predefined values
    if ((emailOrUsername === 'holmege@ccookschool.org' || emailOrUsername === 'Admin') && password === 'george1') {
        // Redirect to the verification page
        window.location.href = 'verify.html';
    } else {
        // Display an error message for invalid credentials
        document.getElementById('message').innerText = 'Invalid email/username or password.';
    }

    // Clear form fields
    document.getElementById('emailOrUsername').value = '';
    document.getElementById('password').value = '';
});
