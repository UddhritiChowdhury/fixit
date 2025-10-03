<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>FixIt App - Student Requests</title>
</head>
<body>
    <h1>Report Your Problem</h1>
    <form id="requestForm">
        <label>
            Room Number: <br />
            <input type="text" id="roomNumber" required />
        </label>
        <br /><br />
        <label>
            Problem: <br />
            <textarea id="problem" required></textarea>
        </label>
        <br /><br />
        <button type="submit">Submit Request</button>
    </form>

    <h2>All Requests</h2>
    <ul id="requestsList"></ul>

    <script src="script.js"></script>
</body>
</html>
