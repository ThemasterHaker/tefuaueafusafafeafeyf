document.addEventListener('DOMContentLoaded', function() {
    // Chatroom Form Submission
    document.getElementById('chatroomForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get chatroom code from the form
        var chatroomCode = document.getElementById('chatroomCode').value.trim();

        // Check if chatroom code is not empty
        if (chatroomCode === '') {
            alert('Please enter a chatroom code.');
            return;
        }

        // For demonstration purposes, let's assume the chatroom code is valid
        // You can implement your logic for joining/creating chatrooms here
        alert('Joining chatroom with code: ' + chatroomCode);
    });

    // Search Form Submission
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get search query from the form
        var searchQuery = document.getElementById('searchQuery').value.trim();

        // Check if search query is not empty
        if (searchQuery === '') {
            alert('Please enter search keywords.');
            return;
        }

        // For demonstration purposes, let's assume we perform a search with the given query
        // You can implement your search logic here
        alert('Searching for chatrooms with keywords: ' + searchQuery);
    });
});
