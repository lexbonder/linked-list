var enterBtn = document.getElementById('enter-button');
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
};

function inputValidator(){
  if (websiteTitle.value !== '' && websiteURL.value === '') {
    enterBtn.innerText = "Please enter a Valid URL";
    return;
  } else if (websiteTitle.value === '' && websiteURL.value !== '') {
    enterBtn.innerText = 'Please Enter a Valid Title';
    return;
  } else {
    createBookmark();
    recalculateBookmarks();
    enterBtnDisable();
    enterBtnReset();
  };
};

function recalculateBookmarks() {
  var cardCount = 0;
  var readCount = 0;
  var unreadCount = 0;
  cardCount = document.querySelectorAll('.bookmark').length;
  readCount = document.querySelectorAll('.read').length;
  unreadCount = (cardCount - readCount);
  console.log(`${cardCount}, ${readCount}, ${unreadCount}`);
};

window.addEventListener('keyup', function() {
  if (websiteTitle.value !== '' || websiteURL.value !== '') {
    enterBtnEnable();
    enterBtn.innerText = 'Enter';
  } else if (websiteTitle.value === '' && websiteURL.value === '') {
    enterBtnDisable();
    enterBtnReset();
  };
}); 

enterBtn.addEventListener('click', function() {
// -------This Doesn't work if I take it out and move it to it's own function
  var input = websiteURL;
  var val = input.value;
  if (val && !val.match(/^.+:\/\/.*/)) {
    input.value = ('http://' + val);
  };
  var x = input.value;
  if (x && !x.match(/^.+\.com.*/)) {
    enterBtn.innerText = "Please enter a Valid URL";
    return;
  };
// --------------------------
  inputValidator();
});

document.querySelector('#bookmark-wrap').addEventListener('click', function(event) {
  if (event.target.parentNode.matches('.read') && event.target.matches('.read-button')) {
    event.target.parentNode.classList.remove('read');
    recalculateBookmarks();
    return;
  }
  if (event.target.matches('.delete-bookmark-button')) {
    event.target.parentNode.remove();
    recalculateBookmarks();
  }
  if (event.target.matches('.read-button')) {
    event.target.parentNode.classList.add('read');
    recalculateBookmarks();
  };
});