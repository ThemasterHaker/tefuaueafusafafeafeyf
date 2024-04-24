document.getElementById('verifyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form value
    var verificationCode = document.getElementById('verificationCode').value;

    // Perform basic validation
    if (verificationCode.trim() === '') {
        document.getElementById('message').innerText = 'Please enter the hack code.';
        return;
    }

    // Check if the verification code is correct (for demonstration purposes, the correct code is assumed to be '1337')
    if (verificationCode === '1337') {
        document.getElementById('message').style.color = '#0f0';
        document.getElementById('message').innerText = 'Hack successful. Redirecting...';

        // Redirect to the dashboard or any other page after a short delay
        setTimeout(function() {
            window.location.href = 'admin_dashboard.html';
        }, 2000); // 2 seconds delay
    } else {
        document.getElementById('message').innerText = 'Access denied. Incorrect hack code. Redirecting to login...';

        // Redirect to the login page after a short delay
        setTimeout(function() {
            window.location.href = 'login.html';
        }, 2000); // 2 seconds delay
    }

    // Clear form field
    document.getElementById('verificationCode').value = '';
});
