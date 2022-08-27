const quoteConatiner = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Lodaing
function loading() {
    loader.hidden = false;
    quoteConatiner.hidden = true;
}

// Hide Loading 
function compelete() {
    loader.hidden = true;
    quoteConatiner.hidden = false;
}


// show new quotes
function newQuote() {
    loading()
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if the author field is null and change it with Unknown
    if (quote.author == null) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote lenghth to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    compelete();
}

// Get quotes from API

async function getQuotes() {
    loading()
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log(' quotes not loading')
    }
}

// tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


// On Load
getQuotes();

