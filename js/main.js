$( document ).ready(function() {
 window.onload = choosePic;

    var myPix = new Array("/images/lion.jpg","images/tiger.jpg","images/bear.jpg");

    function choosePic() {
        var randomNum = Math.floor(Math.random() * myPix.length);
        document.getElementById("myPicture").src = myPix[randomNum];
    }

    function getRandomImage(imgAr, path) {
            var num = Math.floor( Math.random() * imgAr.length );
        var img = imgAr[ num ];
        var imgStr = '<img src="' + path + img + '" alt = "">';
        document.write(imgStr); document.close();
    }

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
    else if (e.keyCode == 87)
    {
        // BLAUW
        console.log("w key pressed")
    }
    else if (e.keyCode == 65)
    {
        // ROOD
        console.log("a key pressed")
    }
    else if (e.keyCode == 83)
    {
        // START BUTTON
        console.log("s key pressed");
        location.href = 'pijlen.html';
    }
}
