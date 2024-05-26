document.getElementById('submitButton').addEventListener('click', function() {
    // Clear previous error borders
    const inputs = ['name', 'email', 'password'];
    inputs.forEach(id => {
        document.getElementById(id).classList.remove('error-border');
    });

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    // Validate name
    if (name === '') {
        document.getElementById('name').classList.add('error-border');
        valid = false;
    }

    // Validate email
    if (email === '') {
        document.getElementById('email').classList.add('error-border');
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email').classList.add('error-border');
        valid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('password').classList.add('error-border');
        valid = false;
    }

    // If the form is valid, submit it (here you can perform your actual form submission logic)
    if (valid) {
        alert('Form is valid and ready to submit.');
        // Example: document.getElementById('myForm').submit();
    }
});



document.addEventListener('DOMContentLoaded', (event) => {
    const inputFields = document.getElementsByClassName('myInput');

    Array.from(inputFields).forEach(inputField => {
        inputField.addEventListener('input', () => {
            if (inputField.value.trim() !== "") {
                inputField.classList.add('not-empty');
            } else {
                inputField.classList.remove('not-empty');
            }
        });
    });
});

