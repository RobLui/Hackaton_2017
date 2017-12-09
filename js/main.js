    document.onkeydown = checkKey;
$( document ).ready(function() {
 window.onload = choosePic;

    // var myPix = new Array("/images/lion.jpg","images/tiger.jpg","images/bear.jpg");
    //
    // function choosePic() {
    //     var randomNum = Math.floor(Math.random() * myPix.length);
    //     document.getElementById("myPicture").src = myPix[randomNum];
    // }
    //
    // function getRandomImage(imgAr, path) {
    //     path = path || 'design/elementen/images/'; // default path here
    //     var num = Math.floor( Math.random() * imgAr.length );
    //     var img = imgAr[ num ];
    //     var imgStr = '<img src="' + path + img + '" alt = "">';
    //     document.write(imgStr); document.close();
    // }

    function testRandomImage() {

    var path = '../design/elementen/images/',
        imgs = ['1.png','2.png','3.png'],
        i = Math.floor(Math.random()*imgs.length);
    $('.el').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);

    }

});

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

    //