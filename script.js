let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function startStop() {
    if (isRunning) {
        clearInterval(interval);
    } else {
        interval = setInterval(updateDisplay, 1000);
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(interval);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    document.getElementById("display").innerText = formattedTime;
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}
