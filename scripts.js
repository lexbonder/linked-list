// function Card(title, url) {
//     this.title  = title;
//     this.url    = url;
// }
 



// Card.prototype.getInfo = function() {
//     var para = document.createElement("P");                       
//     var t = document.createTextNode("This is a paragraph");       
//     para.appendChild(t);                                         
//     document.body.appendChild(para);   
// };
 
// var aCard = new Card('Google', 'apple.com');
// var book = document.querySelector('.bookmark');

// function getInfo() {
//     var card = document.createElement('div');  
//     var innerCard = document.createElement('h4')                     
//     var titleCard = document.createTextNode('This is my Title!')       
//     innerCard.appendChild(titleCard);                                         
//     document.getElementById("bookmark-wrap").appendChild(card);
//     document.querySelector(".bookmark").appendChild(innerCard);
// };


//Katie's code:

//first, select button and set up event listener for click using jquery
var websiteTitle = document.getElementById('website-title');
var websiteURL = document.getElementById('website-URL');
var enterBtn = document.getElementById('enter-button');


window.addEventListener('keyup', function(){
  if (websiteTitle.value !== '' && websiteURL.value !== ''){
    enterBtn.removeAttribute('disabled');
    enterBtn.innerText = 'Enter';
  }else if (websiteTitle.value === '' || websiteURL.value === ''){
    enterBtn.setAttribute('disabled', true);
    enterBtn.innerText = 'Please Enter Title and URL';
  }


}); 





$("#website-URL").blur(function() {
      var input = $(this);
      var val = input.val();
      if (val && !val.match(/^.+:\/\/.*/)) {
          input.val('http://' + val);
      } 

      var x = input.val();
      if (x && !x.match(/^.+\.com.*/)) {
          input.val(x + '.com');
      }

    });  

// $('#enter-button').prop('disabled',true);

// $('#website-title', '#website-URL').keyup(function(){
//         $('#enter-button').prop('disabled', this.value == "" ? true : false);     
//     })

var cardCount = 4;
var unreadCount = 4;
$('#enter-button').on('click', function() {
  //second, append new cards onto the section .bookmark-wrap using jquery
  var websiteTitle = document.getElementById('website-title').value;
  

  var websiteURL = document.getElementById('website-URL').value;



  
  $('#bookmark-wrap').prepend('<div class = "bookmark"><h4>' + websiteTitle + '</h4><hr><a href="' + websiteURL + '">' + websiteURL + '</a><hr><label for = "read-button" hidden></label><button class = "bookmark-button" id = "read-button">Read</button><label for = "delete-bookmark-button" hidden></label><button class = "bookmark-button" id = "delete-bookmark-button">Delete</button></div>');

  document.querySelector('form').reset();
  cardCount = document.querySelectorAll('.bookmark').length;
  unreadCount = (cardCount - readCount);
});

// $("#delete-bookmark-button").click(function(){

//         $("p").remove();
//     });
$(document).on('click', "#delete-bookmark-button", function() {
    $(this).parent().remove();
    cardCount = document.querySelectorAll('.bookmark').length;
    readCount = document.querySelectorAll('.read').length;
    unreadCount = (cardCount - readCount);
});

var readCount = 0;

$(document).on('click', "#read-button", function() {
    $(this).parent().toggleClass('read');
    readCount = document.querySelectorAll('.read').length;
    unreadCount = (cardCount - readCount);
});

 




// //your original code below
// var bookmark = document.querySelector('.bookmark');
// var bookmarkBox = document.querySelector('#bookmark-wrap')

// function doIt() {
// // document.createElement('bookmark');
// bookmarkBox.appendChild(bookmark);
// console.log('screaming internally')
// }

// doIt();