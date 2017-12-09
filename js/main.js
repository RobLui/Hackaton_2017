$( document ).ready(function() {

    function testRandomImage() {

        var path = 'design/elementen/images/',
            imgs = [
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
                'pijl-boven.png',
                'pijl-links.png',
                'pijl-onder.png',
                'pijl-rechts.png',
            ],
        i = Math.floor(Math.random()*imgs.length);
      $('.imageclass').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);
    }

    testRandomImage();

});
//CHECK ON KEYS PRESSED
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log("up arrow pressed");
    }
    else if (e.keyCode == '40') {
        // DOWN
        console.log("down arrow pressed");
    }
    else if (e.keyCode == '37') {
        // LEFT
        console.log("left arrow pressed");
    }
    else if (e.keyCode == '39') {
        // RIGHT
        console.log("right arrow pressed");
    }
    else if (e.keyCode == 87 || e.keyCode == 91)
    {
        // BLAUW
        console.log("w or z key pressed")
    }
    else if (e.keyCode == 65 || e.keyCode == 81)
    {
        // ROOD
        console.log("a or q key pressed")
    }
    else if (e.keyCode == 83)
    {
        // START BUTTON
        console.log("s key pressed");
        location.href = 'pijlen.html';
    }
}
