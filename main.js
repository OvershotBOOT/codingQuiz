var startButtonEl
var startScreenEl
var qaBlocks
var answers1
var correctAnswer1
var answers2
var answers3
var answers4
var answers5
var answers6
var currentAnswer

startButtonEl = document.getElementById('startButton');
startScreenEl = document.getElementById('startScreen');

startButtonEl.addEventListener('click', function() {
    startScreenEl.style.display = 'none'
})

qaContainer = document.querySelectorAll('.qaContainer')

console.log(qaContainer)

answers1 = document.querySelectorAll('.buttonAnswer1')

console.log(answers1)

correctAnswer1 = answers1[0].innerHTML

console.log(correctAnswer1)

function bigBoy (inputArr) {
    for (var arrValue of inputArr) {
        arrValue.addEventListener('click', function() {
            console.log(this.innerHTML)
        })
    }
}

bigBoy (answers1)




