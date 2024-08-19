// test.js
console.log("JavaScript file is connected properly!");
// alert("JavaScript file is connected properly!");

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/*
<!-- chat gpt answer -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timer Example</title>
</head>
<body>
    <div>
        <p>Time Remaining: <span id="timer">60</span> seconds</p>
        <button onclick="answerQuestion(false)">Answer Wrong</button>
        <button onclick="answerQuestion(true)">Answer Correct</button>
    </div>

    <script>
        // Initialize the timer (e.g., 60 seconds)
        let timeRemaining = 60;
        const timerElement = document.getElementById('timer');

        // Function to start the timer countdown
        function startTimer() {
            const timerInterval = setInterval(() => {
                if (timeRemaining > 0) {
                    timeRemaining--;
                    timerElement.textContent = timeRemaining;
                } else {
                    clearInterval(timerInterval);
                    alert('Time is up!');
                }
            }, 1000); // 1000ms = 1s interval
        }

        // Function to handle question answers
        function answerQuestion(isCorrect) {
            if (!isCorrect) {
                timeRemaining = Math.max(0, timeRemaining - 10); // Decrement by 10 seconds but not below 0
                timerElement.textContent = timeRemaining;
            }
        }

        // Start the timer when the page loads
        window.onload = startTimer;
    </script>
</body>
</html>
*/