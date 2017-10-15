var cardCount = 4;
var enterBtn = document.getElementById('enter-button');
var readCount = 0;
var unreadCount = 4;
var websiteTitle = document.getElementById('website-title');
var websiteURL = document.getElementById('website-URL');

window.addEventListener('keyup', function(){
  if (websiteTitle.value !== '' && websiteURL.value !== '') {
    enterBtn.removeAttribute('disabled');
    enterBtn.innerText = 'Enter';
  } else if (websiteTitle.value === '' || websiteURL.value === '') {
    enterBtn.setAttribute('disabled', true);
    enterBtn.innerText = 'Please Enter Title and URL';
  };
}); 

$("#website-URL").blur(function() {
  var input = $(this);
  var val = input.val();
  if (val && !val.match(/^.+:\/\/.*/)) {
    input.val('http://' + val);
  };
  var x = input.val();
  if (x && !x.match(/^.+\.com.*/)) {
    input.val(x + '.com');
  };
});  

$('#enter-button').on('click', function() {
  var websiteTitle = document.getElementById('website-title').value;
  var websiteURL = document.getElementById('website-URL').value;
  $('#bookmark-wrap').prepend('<div class = "bookmark"><h4>' + websiteTitle + '</h4><hr><a href="' + websiteURL + '">' + websiteURL + '</a><hr><label for = "read-button" hidden></label><button class = "bookmark-button" id = "read-button">Read</button><label for = "delete-bookmark-button" hidden></label><button class = "bookmark-button" id = "delete-bookmark-button">Delete</button></div>');
  document.querySelector('form').reset();
  cardCount = document.querySelectorAll('.bookmark').length;
  unreadCount = (cardCount - readCount);
  enterBtn.innerText = 'Please Enter Title and URL';
  enterBtn.setAttribute('disabled', true);
});

$(document).on('click', "#delete-bookmark-button", function() {
  $(this).parent().remove();
  cardCount = document.querySelectorAll('.bookmark').length;
  readCount = document.querySelectorAll('.read').length;
  unreadCount = (cardCount - readCount);
});

$(document).on('click', "#read-button", function() {
    $(this).parent().toggleClass('read');
    readCount = document.querySelectorAll('.read').length;
    unreadCount = (cardCount - readCount);
});