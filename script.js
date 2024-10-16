// After 5 seconds, change the message and background to hacker-style
setTimeout(() => {
    // Hide the welcome message
    const messageDiv = document.getElementById('message');
    messageDiv.classList.add('hidden');

    // Show the hacker aftermath
    const aftermathDiv = document.getElementById('aftermath');
    aftermathDiv.classList.remove('hidden');

    // Change the background to hacker-style
    document.body.classList.remove('purple-background');
    document.body.classList.add('hacker-background');

}, 5000);
