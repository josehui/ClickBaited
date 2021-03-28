/* clickbait - Display random quotes on a website */
  var quotes = [
  { "quote": "The problem is not the problem. The problem is your attitude toward the problem.",
  "author": "Captain Jack Sparrow"},
    { "quote": "Promise me you'll always remember: You're braver than you believe, and stronger than you seem, and smarter than you think.",
  "author": "Winne The Pooh"},
    { "quote": "Wrong will be right, when Aslan comes in sight, At the sound of his roar, sorrows will be no more, When he bares his teeth, winter meets its death, And when he shakes his mane, we shall have spring again.",
  "author": "C.S.Lewis"},
    { "quote": "Affection is responsible for nine-tenths of whatever solid and durable happiness there is in our lives.",
  "author": "C.S.Lewis"},
    { "quote": "If I find in myself desires which nothing in this world can satisfy, the only logical explanation is that I was made for another world.",
  "author": "C.S.Lewis"},
    { "quote": "The past can hurt. But the way I see it, you can either run from it or learn from it.",
  "author": "Rafiki"},
    { "quote": "The question is: who are you?",
  "author": "Rafiki"},
    { "quote": "Being brave isn't the absence of fear. Being brave is having that fear but finding a way through it.",
  "author": "Bear Grylls"},
    { "quote": "You only get one chance at life and you have to grab it boldly.",
  "author": "Bear Grylls"},
    { "quote": "You are imperfect, you are wired for struggle, but you are worthy of love and belonging.",
  "author": "Brené Brown"},
    { "quote": "Vulnerability is the birthplace of innovation, creativity and change.",
  "author": "Brené Brown"},
    { "quote": "Courage starts with showing up and letting ourselves be seen.",
  "author": "Brené Brown"},
    { "quote": "Vulnerability sounds like truth and feels like courage. Truth and courage aren't always comfortable, but they're never weakness.",
  "author": "Brené Brown"},
    { "quote": "Don't ask what the world needs. ask what makes you come alive, and go do it. Because what the world needs is people who have come alive.",
  "author": "Howard Thurman"},
    { "quote": "Change your thoughts and change your world.",
  "author": "Norman Vincent Peale"},
    { "quote": "No act of kindness, no matter how small, is ever wasted.",
  "author": "Aesop"},
    { "quote": "Do. Or do not. There is no try.",
  "author": "Yoda"},
    { "quote": "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
  "author": "Yoda"},
    { "quote": "I have decided to stick with love. Hate is too great a burden to bear.",
  "author": "Martin Luther King, Jr."},
    { "quote": "To love and be loved is to feel the sun from both sides.",
  "author": "David Viscott"}
]
var maxrandom = quotes.length-1; // Defines largest array value for quotes


var settings = {
  "url": "/clickbait",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "X-TheySaidSo-Api-Secret": "true"
  },
};

function clickbait(){
  // var random = Math.floor(Math.random() * (maxrandom + 1)); // Create random array value
  // //var quote = quotes[random].quote; // Define quote
  // var author = quotes[random].author; // Define author
  $.ajax(settings).done(function (response) {
    console.log(response);
    $("#quote").html("<blockquote class='animated fadeIn'>"+response+"</blockquote>");
  });
  // Writes random quote
  
  //+"<footer><cite>"+author+"</cite></footer></blockquote>");
} 

function submitClickbait() {
  let title = $("#clickbaitInput").val()
  if (title.length > 0){
    $.post("/submit", {title: title}).done((res) => {
      console.log('submited');
      $("#clickbaitInput").val("")
    } 
    );
  }
}

$("#clickbaitForm").submit(function(e) {
  e.preventDefault();
});

$(document).ready(function(){
  clickbait(); // Writes random quote on page load
  
  //Fades out old quote & writes new quote on button click
  document.getElementById("clickbait").onclick=function(){
  $('blockquote').removeClass('fadeIn').addClass('fadeOut')
  setTimeout(clickbait(), 1500);
  };
  document.getElementById("submit").onclick=function(){
    setTimeout(submitClickbait(), 1500);
  };
});


// Allow links
$('a').attr("onclick","window.open(this.href); return false;");