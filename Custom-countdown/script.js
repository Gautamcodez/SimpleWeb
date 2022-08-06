const inputContainer = document.getElementById('input-container');
const coutDownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countDownTitle = '';
let countDownDate = '';
let countDownvalue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set date input min with Today's date
const today = new Date().toISOString().split('T')[0];
// console.log(today);
dateEl.setAttribute('min', today);

// Populate countdown / Complete UI
function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
        const distance = countDownvalue - now;
        console.log('distance', distance);
        const days = Math.floor(distance / day);
        const hours = Math.floor(distance % day / hour);
        const minutes = Math.floor(distance % hour / minute);
        const seconds = Math.floor(distance % minute / second);
        console.log(days, hours, minutes, seconds);

        // Populate Countdown
        countDownTitle.textContent = `${countDownTitle}`;
        timeElements[0].textContent = `${days}`;
        timeElements[1].textContent = `${hours}`;
        timeElements[2].textContent = `${minutes}`;
        timeElements[3].textContent = `${seconds}`;

        // hide input
        inputContainer.hidden = true;

        // show Countdown
        countdownEl.hidden = false;
    }, second);
}



// Take values from form input
function updateCountdown(e) {
    e.preventDefault();
    countDownTitle = e.srcElement[0].value;
    countDownDate = e.srcElement[1].value;
    console.log(countDownTitle, countDownDate);
    // Check for valid date
    if (countDownDate === '') {
        alert('please enter the countdown date! ')
    } else {
        // Get the number version of current date, updateDom
        countDownvalue = new Date(countDownDate).getTime();
        console.log('countdown value: ', countDownvalue);
        updateDOM();
    }
}

// Reset All values
function reset() {
    // Hide countdowns, Show input
    countdownEl.hidden = true;
    inputContainer.hidden = false;
    // Stop the countdown
    clearInterval(countdownActive);
    // Reset values
    countDownTitle = '';
    countDownDate = '';
}

// Event listners
coutDownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);
