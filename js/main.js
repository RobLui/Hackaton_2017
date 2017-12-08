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
        console.log("s key pressed")
    }
}