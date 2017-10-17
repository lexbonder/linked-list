var cardCount = 4;
var enterBtn = document.getElementById('enter-button');
var readCount = 0;
var unreadCount = 4;
var websiteTitle = document.getElementById('website-title');
var websiteURL = document.getElementById('website-URL');


enterBtn.addEventListener('click', function(){
   inputValidator();
});

document.addEventListener('keyup', function(){
  enterBtn.classList.remove('error');
}); 

function error(){
  enterBtn.classList.add('error');
}


function inputValidator(){
  if (websiteTitle.value !== '' && websiteURL.value !== '') {
    enterBtn.innerText = 'Enter';
  } else if (websiteTitle.value === '' && websiteURL.value === '') {
    enterBtn.innerText = 'Please Enter a Title and URL';
    error();
    return false;
  } else if (websiteTitle.value !== '' && websiteURL.value === '') {
     enterBtn.innerText = "Please enter a Valid URL";
     error();
     return false;
  } else if (websiteTitle.value === '' && websiteURL.value !== '') {
      enterBtn.innerText = 'Please Enter a Valid Title';
      error();
      return false;
  }


    var input = websiteURL;
  var val = input.value;
  if (val && !val.match(/^.+:\/\/.*/)) {
    input.value = ('http://' + val);
  };
  var x = input.value;
  if (x && !x.match(/^.+\.com.*/)) {
     enterBtn.innerText = "Please enter a Valid URL";
     error();
     return false;
   };

    createBookmark();
    document.querySelector('form').reset();
    cardCount = document.querySelectorAll('.bookmark').length;
    unreadCount = (cardCount - readCount);
    // enterBtn.innerText = 'Please Enter Title and URL';
    // enterBtn.setAttribute('disabled', true);
 };



function createBookmark(){
    var bookMarkWrap = document.getElementById('bookmark-wrap');
    var newBookmarkCard = document.createElement('article');
    newBookmarkCard.classList.add('bookmark');
    newBookmarkCard.innerHTML = 
     `<h4>${websiteTitle.value}</h4>
      <hr>
      <a target='_blank' href="${websiteURL.value}">${websiteURL.value}</a>
      <hr>
      <button title = "Read button" class = "bookmark-button read-button">Read</button>
      <button title = "Delete button" class = "bookmark-button delete-bookmark-button">Delete</button>`
    bookMarkWrap.prepend(newBookmarkCard);
  }


document.querySelector('#bookmark-wrap').addEventListener('click', function(event){
  if(event.target.parentNode.matches('.read') && event.target.matches('.read-button')){
      event.target.parentNode.classList.remove('read');
      return false;
    }
  if(event.target.matches('.delete-bookmark-button')) {
    event.target.parentNode.remove();
    }
  if(event.target.matches('.read-button')) {
    event.target.parentNode.classList.add('read');
    }
});

// $('.delete-bookmark-button').on('click', function() {
//   $(this).parent().remove();
//   cardCount = document.querySelectorAll('.bookmark').length;
//   readCount = document.querySelectorAll('.read').length;
//   unreadCount = (cardCount - readCount);
// });

// $(document).on('click', ".read-button", function() {
//     $(this).parent().toggleClass('read');
//     readCount = document.querySelectorAll('.read').length;
//     unreadCount = (cardCount - readCount);
// });