document.getElementById('submitButton').addEventListener('click', function() {
    const fields = [
        'email', 'address', 'city', 'country', 
        'fullname', 'paymenttype', 'creditcardnumber', 
        'expdate', 'cvv', 'zipcode'
    ];
    
    let valid = true;
    const formData = {};
    
    fields.forEach(field => {
        const input = document.getElementById(field);
        input.classList.remove('error-border');
        formData[field] = input.value.trim();
        if (input.value.trim() === '') {
            input.classList.add('error-border');
            valid = false;
        }
    });

    const email = document.getElementById('email').value.trim();
    const creditCardNumber = document.getElementById('creditcardnumber').value.replace(/\s/g, '');
    const cvv = document.getElementById('cvv').value.trim();

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('email').classList.add('error-border');
        valid = false;
    }

    // Credit Card validation (must be exactly 16 digits)
    if (creditCardNumber.length !== 16 || !/^\d{16}$/.test(creditCardNumber)) {
        document.getElementById('creditcardnumber').classList.add('error-border');
        valid = false;
    }

    // CVV validation (should be 3 digits)
    if (!/^\d{3}$/.test(cvv)) {
        document.getElementById('cvv').classList.add('error-border');
        valid = false;
    }

    // Save to local storage
    localStorage.setItem('datas', JSON.stringify(formData));

    if (valid) {
        alert('Form is valid and ready to submit.');
        window.location.href = 'status.html'; 
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

    const creditCardInput = document.getElementById('creditcardnumber');

    creditCardInput.addEventListener('input', (event) => {
        let value = event.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        event.target.value = value;
    });

    const cvvInput = document.getElementById('cvv');

    cvvInput.addEventListener('input', (event) => {
        let value = event.target.value.replace(/\D/g, '');
        if (value.length > 3) {
            value = value.slice(0, 3);
        }
        event.target.value = value;
    });
});
