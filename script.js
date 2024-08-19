const timeElement = document.getElementById('time');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapsElement = document.getElementById('laps');

let intervalId;
let startTime;
let elapsedTime = 0;

function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const secondsStr = seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60;
    const minutesStr = minutes % 60 < 10 ? '0' + (minutes % 60) : minutes % 60;
    const hoursStr = hours < 10 ? '0' + hours : hours;

    return `${hoursStr}:${minutesStr}:${secondsStr}`;
}

function startStopwatch() {
    startTime = Date.now();
    intervalId = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timeElement.textContent = formatTime(elapsedTime);
    }, 10);
}

function pauseStopwatch() {
    clearInterval(intervalId);
}

function resetStopwatch() {
    clearInterval(intervalId);
    elapsedTime = 0;
    timeElement.textContent = '00:00:00';
    lapsElement.innerHTML = '';
}

startButton.addEventListener('click', () => {
    if (!intervalId) {
        startStopwatch();
    }
});

pauseButton.addEventListener('click', () => {
    if (intervalId) {
        pauseStopwatch();
    }
});

resetButton.addEventListener('click', resetStopwatch);

lapsElement.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        lapsElement.removeChild(event.target);
    }
});