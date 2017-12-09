$( document ).ready(function() {

    var	clsStopwatch = function() {
        var	startAt	= 0;	// Time of last start / resume. (0 if not running)
        var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

        var	now	= function() {
            return (new Date()).getTime();
        };

        this.start = function() {
            startAt	= startAt ? startAt : now();
        };

        this.stop = function() {
            lapTime	= startAt ? lapTime + now() - startAt : lapTime;
            startAt	= 0; // Paused
        };

        this.reset = function() {
            lapTime = startAt = 0;
        };

        this.time = function() {
            return lapTime + (startAt ? now() - startAt : 0);
        };
    };

    var x = new clsStopwatch();
    var $time;
    var clocktimer;

    function pad(num, size) {
        var s = "0000" + num;
        return s.substr(s.length - size);
    }

    function formatTime(time) {
        var h = m = s = ms = 0;
        var newTime = '';

        h = Math.floor( time / (60 * 60 * 1000) );
        time = time % (60 * 60 * 1000);
        m = Math.floor( time / (60 * 1000) );
        time = time % (60 * 1000);
        s = Math.floor( time / 1000 );
        ms = time % 1000;

        newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
        return newTime;
    }

    function show() {
        $time = document.getElementById('time');
        update();
    }

    function update() {
        $time.innerHTML = formatTime(x.time());
    }

    function start() {
        clocktimer = setInterval("update()", 1);
        x.start();
    }

    function stop() {
        x.stop();
        clearInterval(clocktimer);
    }

    function reset() {
        stop();
        x.reset();
        update();
    }

    var arr = ["background-red", "background-blue"];
    var audio = document.getElementById("audio");

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
        var i = Math.floor(Math.random()*imgs.length);
        $('.imageclass').append("<img src='"+path+imgs[i]+"'>").hide().fadeIn(2000);
    }
    // $("#count_num").delay(1000).queue(function() {
    //     $('#count_num').html("2").delay(1000).queue(function() {
    //         $('#count_num').html("1")
    //     });
    // });

    window.setInterval(function(){
        $('.imageclass img').remove();
        new testRandomImage();
        var idx = Math.floor(Math.random() * arr.length);
        // console.log(arr[idx]);
        $('.imageclass img').addClass(arr[idx]);
    }, 2000);
    playAudio();
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
    else if (e.keyCode == '70') {
        // LEFT
        console.log("left arrow pressed");
    }
    else if (e.keyCode == '71') {
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
        console.log("s key pressed");

        if(window.location.href.indexOf("index.html") > -1) {
            location.href = 'pijlen.html';
        }
    }

}
