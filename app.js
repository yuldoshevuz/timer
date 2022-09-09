const timer = document.getElementById('timer')
const startButton = document.getElementById('start-button')
const pauseButton = document.getElementById('pause-button')
const restartButton = document.getElementById('restart-button')

let second = 0
let timeFunc;

function timerFunc() {
    pauseButton.textContent = 'PAUSE'
    startButton.textContent = 'START'
    restartButton.classList.add('hidden')
    timeFunc = setInterval(() => {
        second++
        timer.textContent = second
        timer.classList.add('green')
    }, 1000)
    
}
function restartFunc() {
    second = 0
    timerFunc()
}
function timerFuncStop() {
    clearInterval(timeFunc)
    timer.classList.remove('green')
    pauseButton.textContent = 'PAUSED'
    startButton.textContent = 'CONTINUE'
    restartButton.classList.remove('hidden')
}

startButton.addEventListener('click', (e) => {
    timerFunc()
})
pauseButton.addEventListener('click', (e) => {
    timerFuncStop()
})
restartButton.addEventListener('click', (e) => {
    restartFunc()
})