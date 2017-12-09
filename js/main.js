$(document).ready(function() {

  var arr = ["background-red", "background-blue"];
  var audio = document.getElementById("audio");
  var startDeltaT = 2000;
  var deltaT = startDeltaT;
  var speedIncrease = 0.05;
  var questionCounter = 0;
  var previousQuestion = -1;

  function playAudio() {
    audio.play();
  }

  function testRandomImage() {

    var path = 'design/elementen/images/',
      people = [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png',
        '10.png',
        '11.png',
        '12.png',
        '14.png',
        '15.png',
        '16.png',
        '17.png',
        '18.png',
        '19.png',
      ],
      arrows = [
        'pijl-links.png',
        'pijl-rechts.png',
      ];

    var imgs = Math.random() <= 0.3 ? arrows : people;
    var i = Math.floor(Math.random() * imgs.length);

    $('.imageclass').append("<img src='" + path + imgs[i] + "'>").hide().fadeIn(deltaT);
  }

  window.setInterval(function() {
    deltaT = deltaT * (1 - speedIncrease);
    console.log(deltaT);
    $('.imageclass img').remove();
    new testRandomImage();
    var idx = Math.floor(Math.random() * arr.length);
    // console.log(arr[idx]);
    $('.imageclass img').addClass(arr[idx]);
    questionCounter++;
  }, deltaT);
  playAudio();
});
//CHECK ON KEYS PRESSED
document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '38') {
    console.log("up arrow pressed");
  } else if (e.keyCode == '40') {
    // DOWN
    console.log("down arrow pressed");
  } else if (e.keyCode == '70') {
    // LEFT
    console.log("left arrow pressed");
  } else if (e.keyCode == '71') {
    // RIGHT
    console.log("right arrow pressed");
  } else if (e.keyCode == 87 || e.keyCode == 91) {
    // BLAUW
    console.log("w or z key pressed")
  } else if (e.keyCode == 65 || e.keyCode == 81) {
    // ROOD
    console.log("a or q key pressed")
  } else if (e.keyCode == 83) {
    // START BUTTON
    console.log("s key pressed");

    if (window.location.href.indexOf("index.html") > -1) {
      location.href = 'pijlen.html';
    }
  }

}
