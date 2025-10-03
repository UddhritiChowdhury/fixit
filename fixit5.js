const API_URL = 'http://localhost:5000/api/requests';

const form = document.getElementById('requestForm');
const requestsList = document.getElementById('requestsList');

// Fetch and display requests
async function fetchRequests() {
    const res = await fetch(API_URL);
    const data = await res.json();

    requestsList.innerHTML = '';

    data.forEach(request => {
        const li = document.createElement('li');
        li.textContent = `Room: ${request.roomNumber} — Problem: ${request.problem}`;
        requestsList.appendChild(li);
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const roomNumber = document.getElementById('roomNumber').value.trim();
    const problem = document.getElementById('problem').value.trim();

    if (!roomNumber || !problem) {
        alert('Please fill in both fields.');
        return;
    }

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roomNumber, problem }),
        });

        if (!res.ok) throw new Error('Failed to submit request.');

        document.getElementById('roomNumber').value = '';
        document.getElementById('problem').value = '';

        fetchRequests();
    } catch (error) {
        alert(error.message);
    }
});

// Load existing requests on page load
fetchRequests();
