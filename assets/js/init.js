document.addEventListener("DOMContentLoaded", init)

let realtimeClockActive = true;

function init() {
    setInterval(updateClock, 1000);
}

function updateClock() {
    if (realtimeClockActive) {
        const timeElement = document.querySelector("#time");
        const time = new Date();

        timeElement.textContent = `${time.getHours()}:${time.getMinutes()}`;
    }
}