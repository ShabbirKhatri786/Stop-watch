var root = document.getElementById("root");

var minute = 0;
var second = 0;
var play = false;


var mainDiv = document.createElement("div");
mainDiv.classList.add("main_div");
root.appendChild(mainDiv)



var heading = document.createElement("h1");
var headingtext = document.createTextNode("Stop-Watch");
heading.appendChild(headingtext);
mainDiv.appendChild(heading);



var watchdiv = document.createElement("div");
watchdiv.classList.add("timer");
watchdiv.innerHTML = "00:00";
mainDiv.appendChild(watchdiv);


var playBtn = document.createElement("button");
playBtn.classList.add("play-btn")
playBtn.textContent = "Play";
playBtn.setAttribute("onclick", "playButton()");
mainDiv.appendChild(playBtn);


var clearBtn = document.createElement("button");
playBtn.classList.add("play-btn");
clearBtn.textContent = "Reset";
clearBtn.setAttribute("onclick", "clearButton()");
mainDiv.appendChild(clearBtn);

var interval;
function playButton() {
    if (!play) {
        console.log(playBtn)
        play = true;
        playBtn.innerHTML = "Pause";
        interval = setInterval(function () {
            second += 1;
            if (second >= 60) {
                second = 0;
                minute += 1;
            }
            watchdiv.innerHTML = minute + ":" + second;

        }, 1000)
    } else {
        play = false;
        clearInterval(interval);
        playBtn.innerHTML = "Start";
    }
}

function clearButton() {
    clearInterval(interval);
    play = false;
    second = 0;
    minute = 0;
    watchdiv.innerHTML = minute + ":" + second;
}



















root.appendChild(mainDiv);