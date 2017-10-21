var clearReadButton = document.getElementById('clear-read');
var displayCardCount = document.getElementById('card-number');
var displayReadCount = document.getElementById('read-number');
var displayUnreadCount = document.getElementById('unread-number');
var enterBtn = document.getElementById('enter-button');
var readBookmarks;
var websiteTitle = document.getElementById('website-title');
var websiteURL = document.getElementById('website-URL');

function createBookmark() {
  var bookmarkWrap = document.getElementById('bookmark-wrap');
  var newBookmark = document.createElement('article');
  newBookmark.classList.add('bookmark');
  newBookmark.innerHTML = 
   `<h4>${websiteTitle.value}</h4>
    <hr>
    <a target='_blank' href="${websiteURL.value}">${websiteURL.value}</a>
    <hr>
    <button title = "Read button" class = "bookmark-button read-button">Read</button>
    <button title = "Delete button" class = "bookmark-button delete-bookmark-button">Delete</button>`
  bookmarkWrap.prepend(newBookmark);
  document.querySelector('form').reset();
};

function enterBtnDisable() {
  enterBtn.setAttribute('disabled', true);
};

function enterBtnEnable() {
  enterBtn.removeAttribute('disabled');
};

function enterBtnReset() {
  enterBtn.innerText = 'Please Enter Title and URL';
  enterBtn.classList.remove('error');
};

function error() {
  enterBtn.classList.add('error');
};

function inputValidator() {
  if (websiteTitle.value === '' && websiteURL.value === '') {
    enterBtnReset();
    error();
    return;
  } else if (websiteTitle.value !== '' && websiteURL.value === '') {
    enterBtn.innerText = "Please enter a Valid URL";
    error();
    return;
  } else if (websiteTitle.value === '' && websiteURL.value !== '') {
    enterBtn.innerText = 'Please Enter a Valid Title';
    error();
    return;
  } else {
    createBookmark();
    recalculateBookmarks();
    enterBtnDisable();
    enterBtnReset();
  };
};

function keydownButtonReset() {
  if (websiteTitle.value !== '' || websiteURL.value !== '') {
    enterBtnEnable();
    enterBtnReset();
    enterBtn.innerText = 'Enter';
  } else if (websiteTitle.value === '' && websiteURL.value === '') {
    enterBtnDisable();
    enterBtnReset();
  };
};

function recalculateBookmarks() {
  var cardCount = 0, readCount = 0, unreadCount = 0;
  readBookmarks = document.querySelectorAll('.read');
  cardCount = document.querySelectorAll('.bookmark').length;
  readCount = readBookmarks.length;
  unreadCount = (cardCount - readCount);
  displayReadCount.innerText = readCount;
  displayCardCount.innerText = cardCount;
  displayUnreadCount.innerText = unreadCount;
};

function toggleClearButton() {
  if (parseInt(displayReadCount.innerText) > 0) {
    clearReadButton.removeAttribute('disabled');
    clearReadButton.innerText = 'Clear ' + readBookmarks.length + ' Read Bookmark(s)';
  } else {
    clearReadButton.setAttribute('disabled', true);
    clearReadButton.innerText = 'No Read Bookmarks';
  };
};

function urlValidator() {
  var input = websiteURL;
  var val = input.value;
  if (val && !val.match(/^.+:\/\/.*/)) {
    input.value = ('http://' + val);
  };
  var x = input.value;
  if (x && !x.match(/^.+\.com.*/)$) {
    enterBtn.innerText = "Please enter a Valid URL";
    error();
    return;
  };
  inputValidator();
};

enterBtn.addEventListener('click', function(event) {
  event.preventDefault();
  urlValidator();
  websiteTitle.focus();
});

window.addEventListener('keydown', keydownButtonReset);

document.querySelector('#bookmark-wrap').addEventListener('click', function(event) {
  if (event.target.parentNode.matches('.read') && event.target.matches('.read-button')) {
    event.target.parentNode.classList.remove('read');
    recalculateBookmarks();
    toggleClearButton();
    return;
  };
  if (event.target.matches('.delete-bookmark-button')) {
    event.target.parentNode.remove();
    recalculateBookmarks();
    toggleClearButton();
  };
  if (event.target.matches('.read-button')) {
    event.target.parentNode.classList.add('read');
    recalculateBookmarks();
    toggleClearButton();
  };
  if (event.target.matches('#clear-read')) {
    for (var i = 0; i < readBookmarks.length; i++) {
      readBookmarks[i].remove();
    };
    recalculateBookmarks();
    toggleClearButton();
  };
});
