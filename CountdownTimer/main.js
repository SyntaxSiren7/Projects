let countDown;
function click() {
    let x = document.getElementById("time-input").value;
    countDown = setInterval(() => {
        x--;
        timerContainer.innerHTML = x;
        if (x === 0) {
            clearInterval(countDown);
        }

    }, 1000)


}
function stopTimer() {
    clearInterval(countDown);
}

let btn = document.getElementById("start-timer");
let timerContainer = document.getElementById("timer-container");
let stopBtn = document.getElementById("stop-timer");

btn.addEventListener('click', click);
stopBtn.addEventListener('click', stopTimer);

