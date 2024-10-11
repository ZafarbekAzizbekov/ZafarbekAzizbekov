<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Check</title>
</head>
<body>
    <h1 id="welcome-message"></h1>

    <script>
        // Prompt the user to enter their age
        var age = prompt("What's your age?");

        // Convert the input to a number
        age = parseInt(age);

        // Check if the user is 18 or older
        if (age >= 18) {
            document.getElementById('welcome-message').textContent = "Welcome to My Website!";
        } else {
            document.getElementById('welcome-message').textContent = "Sorry, you must be at least 18 years old to access this feature.";
        }
    </script>
</body>
</html>
