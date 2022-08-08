const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];

// Show modal, Focus on input
function showModal() {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

// Remove modal
function removeModal() {
    modal.classList.remove('show-modal');
}

function modalOverlay(e) {
    e.target === modal ? modal.classList.remove('show-modal') : false;
}

// Modal event listner
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', removeModal);
window.addEventListener('click', modalOverlay);

// Validate Form
function validate(nameValue, urlValue) {
    const expression = /(https)?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
    const regex = new RegExp(expression);
    if (!nameValue || !urlValue) {
        alert('Please submit values for both fields.');
        return false;
    }
    // if (urlValue.match(regex)) {
    //     alert('Match ');
    //     return false;
    //   }
    if (!urlValue.match(regex)) {
        alert('Please provide a valid web address.');
        return false;
    }
    // Valid
    return true;
}

//   Fetch Bookmarks
// Fetch bookmarks
function fetchBookmarks() {
    // Get bookmarks from localStorage if available
    if (localStorage.getItem('bookmarks')) {
      bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    } else {
      // Create bookmarks array in localStorage
      bookmarks = [
        {
          name: 'Jacinto Design',
          url: 'http://jacinto.design',
        },
      ];
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
  }

// Handle Data for the form
function storeBookmark(e) {
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    // Add 'https://' if not there
    if (!urlValue.includes('https://') && !urlValue.includes('http://')) {
      urlValue = `https://${urlValue}`;
    }
    // Validate
    if (!validate(nameValue, urlValue)) {
      return false;
    }
    // Set bookmark object, add to array
    const bookmark = {
      name: nameValue,
      url: urlValue,
    };
    bookmarks.push(bookmark);
    // Set bookmarks in localStorage, fetch, reset input fields
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
    bookmarkForm.reset();
    websiteNameEl.focus();
  }

// Event Listner
bookmarkForm.addEventListener('submit', storeBookmark);

// On load Fetch Bookmarks
fetchBookmarks();
