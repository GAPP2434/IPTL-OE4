document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const timestamp = Date();

    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, age, address, phone, gender, timestamp})
    });

    if (response.ok) {
        alert('User data submitted successfully!');
    } else {
        alert('Failed to submit user data.');
    }
});

document.getElementById('age').addEventListener('input', function(event) {
    const value = event.target.value;
    if (value.length > 3) {
        event.target.value = value.slice(0, 3);
    }
});

document.getElementById('address').addEventListener('input', function(event) {
    const value = event.target.value;
    event.target.value = value.replace(/[^a-zA-Z0-9\s.]/g, '');
});

document.getElementById('phone').addEventListener('input', function(event) {
    const value = event.target.value;
    if (value.length > 10) {
        event.target.value = value.slice(0, 10);
    }
    event.target.value = value.replace(/\D/g, '');
});