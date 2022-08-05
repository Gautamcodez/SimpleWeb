const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    // Using constraint Api
    isValid = form.checkValidity();
    // console.log(isValid);

    // Styling main message for an error
    if (!isValid) {
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }

    // Check to see if passwords match
    if (password1El.value == password2El.value) {
        // If they match, set value to true and borders to green
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';

    } else {
        passwordMatch = false;
        // If they don't match, border color of input to red, change message
        message.textContent = 'Make sure passwords match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }

    // If form is valid and passwords match
    if (isValid && passwordMatch) {
        // Style main message for success
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

// Do something with user data
function storeFormData(){
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // console.log(e);
    // Validate Form
    validateForm();
    // SUbmit form data is valid
    if (isValid && passwordMatch){
        storeFormData();
    }
}

// Event Listner
form.addEventListener('submit', processFormData);