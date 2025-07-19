// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName !== '' && userName !== null) {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

function validateForm() {
    const nameInput = document.getElementById('name-input');
    const birthdateinput = document.getElementById('birthdate-input');
    const genderInput = document.getElementById('gender-input');
    const phonenumberInput = document.getElementById('phonenumber-input');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');

    if (nameInput.value === '') {
        alert('Please enter your name.');
    } else if (birthdateinput.value === '') {
        alert('Please enter your birthdate.');
    } else if (genderInput.value === '') {
        alert('Please select your gender.');
    } else if (phonenumberInput.value === '') {
        alert('Please enter your phone number.');
    } else if (emailInput.value === '') {
        alert('Please enter your email.');
    } else if (messageInput.value === '') {
        alert('Please enter your message.');
    } else if (!/^\d{10,15}$/.test(phonenumberInput.value)) {
        alert('Please enter a valid phone number (10-15 digits).');
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        alert('Please enter a valid email address.');
    } else {
        document.getElementById('message-output').innerHTML =
            `<p><strong>Current time:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Name:</strong> ${nameInput.value}</p>
            <p><strong>Birthdate:</strong> ${birthdateinput.value}</p>
            <p><strong>Gender:</strong> ${genderInput.value}</p>
            <p><strong>Phone Number:</strong> ${phonenumberInput.value}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Message:</strong> ${messageInput.value}</p>`;

        nameInput.value = ''; // Clear the input field after submission
        birthdateinput.value = '';
        genderInput.value = '';
        phonenumberInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
}
