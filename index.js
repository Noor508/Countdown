let timer;
let startTime;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        startTime = Date.now() - (startTime ? startTime : 0);
        timer = setInterval(updateTimer, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    stopTimer();
    startTime = 0;
    updateTimerDisplay();
}

function restartTimer() {
    stopTimer();
    startTimer();
}

function updateTimer() {
    const currentTime = Math.floor((Date.now() - startTime) / 1000);
    updateTimerDisplay(currentTime);
}

function updateTimerDisplay(currentTime = 0) {
    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor((currentTime % 3600) / 60);
    const seconds = currentTime % 60;

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timer').textContent = formattedTime;
}
