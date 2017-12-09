document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log("up arrow pressed");
    }
    else if (e.keyCode == '40') {
        console.log("down arrow pressed");
    }
    else if (e.keyCode == '37') {
        console.log("left arrow pressed");
    }
    else if (e.keyCode == '39') {
        console.log("right arrow pressed");
    }
    else if (e.keyCode == 87)
    {
        console.log("w key pressed")
    }
    else if (e.keyCode == 65)
    {
        console.log("a key pressed")
    }
    else if (e.keyCode == 83)
    {
        // START BUTTON
        console.log("s key pressed")
        location.href = 'pijlen.html';
    }
}

imgArray[25] = new Image();
imgArray[3].src = '';

var imgArray = [
    "./design/elementen/images/1.png",
    "./design/elementen/images/2.png",
    "./design/elementen/images/1.png",
    "./design/elementen/images/1.png",
    "./design/elementen/images/1.png",
    "./design/elementen/images/1.png",
    "./design/elementen/images/1.png",
    "./design/elementen/images/1.png",

];



function getRandomImage(imgAr, path) {
    path = path || 'design/elementen/images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}

for(i= 0; i < 10; ) {
    setTimeout(function(){ getRandomImage() }, 4000);

}