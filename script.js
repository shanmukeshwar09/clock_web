const hours = document.querySelector('.hand.hour')
const minutes = document.querySelector('.hand.minute')
const seconds = document.querySelector('.hand.second')

setInterval(moveclock, 1000)

function moveclock() {
    const time = new Date();
    const sec = time.getSeconds() / 60;
    const min = (sec + time.getMinutes()) / 60;
    const hour = (min + time.getHours()) / 12;
    handleClock(hours, hour);
    handleClock(minutes, min);
    handleClock(seconds, sec);
}

function handleClock(element, ratio) {
    element.style.setProperty('--rotation', (ratio * 360))
}