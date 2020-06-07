var startButtonEl
var startScreenEl
var qaBlocks

startButtonEl = document.getElementById('startButton');
startScreenEl = document.getElementById('startScreen');

startButtonEl.addEventListener('click', function() {
    startScreenEl.style.display = 'none'
})

qaContainer = document.querySelectorAll('.qaContainer')

console.log(qaContainer)