document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        console.log("up arrow");
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log("down arrow");
    }
    else if (e.keyCode == '37') {
        // left arrow
        console.log("left arrow");
    }
    else if (e.keyCode == '39') {
        // right arrow
        console.log("Right arrow");
    }

}