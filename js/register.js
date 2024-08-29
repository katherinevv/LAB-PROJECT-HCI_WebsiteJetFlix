const form = document.getElementById('registerForm');
form.addEventListener('submit', validateForm);

function validateForm(e) {
    e.preventDefault();

    // Reset error messages
    let errorElements = document.getElementsByClassName('error');
    for (let i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }

    // Validate Name
    let nameInput = document.getElementById('name');
    let nameError = document.getElementById('nameError');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
    } else if (nameInput.value.trim().length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long';
    } else {
        nameError.textContent = '';
    }

    // Validate Password
    let passwordInput = document.getElementById('password');
    let passwordError = document.getElementById('passwordError');

    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required';
    } else if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
    } else {
        passwordError.textContent = '';
    }

    // Validate Confirm Password
    let confirmPasswordInput = document.getElementById('confirmPassword');
    let confirmPasswordError = document.getElementById('confirmPasswordError');
    let password = passwordInput.value.trim();

    if (confirmPasswordInput.value.trim() === '') {
        confirmPasswordError.textContent = 'Confirm password is required';
    } else if (confirmPasswordInput.value.trim() !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
    } else {
        confirmPasswordError.textContent = '';
    }

    //Validate Gender
    let genderInputs = document.querySelectorAll('input[name="gender"]');
    let genderError = document.getElementById('genderError');
    let selectedGender = false;

    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            selectedGender = true;
            break;
        }
    }

    if (!selectedGender) {
        genderError.textContent = 'Please select a gender';
    } else {
        genderError.textContent = '';
    }

    // Validate Date of Birth
    let dobInput = document.getElementById('dob');
    let dobError = document.getElementById('dobError')
    if (dobInput.value.trim() === '') {
        dobError.textContent = 'Date of Birth is required';
    } else {
        dobError.textContent = '';
    }

    // Validate Consent
    let consentInput = document.getElementById('consent');
    const consentError = document.getElementById('consentError');
    if (!consentInput.checked) {
        consentError.textContent = 'You must agree to the terms and conditions';
    } else {
        consentError.textContent = '';
    }

    // Check if there are any error messages
    errorElements = document.getElementsByClassName('error');
    let isError = false;
    for (let i = 0; i < errorElements.length; i++) {
        if (errorElements[i].textContent !== '') {
            isError = true;
            break;
        }
    }

    // If no errors, display success message
    if (!isError) {
        let successMessage = document.createElement('span');
        successMessage.textContent = 'Form submitted successfully';
        successMessage.classList.add('success');
        document.getElementById('form').appendChild(successMessage);
    }
}
