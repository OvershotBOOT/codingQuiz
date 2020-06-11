var startButtonEl
var startScreenEl
var qaBlocks
var answers1
var answers2
var answers3
var answers4
var answers5
var answers6
var correctAnswer1
var correctAnswer2
var correctAnswer3
var correctAnswer4
var correctAnswer5
var correctAnswer6
var timer
var timeLeft
var scoreBttn
var restartBttn
var scoreChart 

scoreChart = document.getElementById('scoreChart')

timer = document.getElementById('timer')
timeLeft = 90

scoreBttn = document.getElementById('scoreLogger')
restartBttn = document.getElementById('restart')

startButtonEl = document.getElementById('startButton');
startScreenEl = document.getElementById('startScreen');
qaBlocks = document.querySelectorAll('.qaContainer')

answers1 = document.querySelectorAll('.buttonAnswer1')
answers2 = document.querySelectorAll('.buttonAnswer2')
answers3 = document.querySelectorAll('.buttonAnswer3')
answers4 = document.querySelectorAll('.buttonAnswer4')
answers5 = document.querySelectorAll('.buttonAnswer5')
answers6 = document.querySelectorAll('.buttonAnswer6')

correctAnswer1 = answers1[0].innerHTML
correctAnswer2 = answers2[1].innerHTML
correctAnswer3 = answers3[0].innerHTML
correctAnswer4 = answers4[2].innerHTML
correctAnswer5 = answers5[2].innerHTML
correctAnswer6 = answers6[0].innerHTML

// Couldn't figure out how to make localStorage work

// var finalScore = localStorage.getItem('score')

// scoreBttn.addEventListener('click', function() {
//     localStorage.setItem('score', timeLeft)
//     scoreChart.textcontent = finalScore
// })

restartBttn.addEventListener('click', function() {
    qaBlocks[6].style.display = 'none'
    startScreenEl.style.display = 'block'
    timer.textContent = 90
    timeLeft = 90
})

startButtonEl.addEventListener('click', function() {
    startScreenEl.style.display = 'none'
    qaBlocks[0].style.display = 'block'
    setTime(qaBlocks)
})

function setTime(qablock) {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft === 0 || timeLeft < 0) {
            clearInterval(timerInterval)
            qablock[0].style.display = 'none'
            qablock[1].style.display = 'none'
            qablock[2].style.display = 'none'
            qablock[3].style.display = 'none'
            qablock[4].style.display = 'none'
            qablock[5].style.display = 'none'
            qablock[6].style.display = 'block'
        }
        if (qablock[6].style.display === 'block') {
            clearInterval(timerInterval)
        }
    }, 1000)
}



function blockDisplay (block) {
    for (i = 0; i < block.length; i++) {

        if (block[i].style.display === 'block') {
            block[i].style.display = 'none'
            if (block[i+1] === undefined) {
                break
            }
            block[i+1].style.display = 'block'
            break
        }
    }
}

function bigBoy (inputArr, correctAns) {
    for (var arrValue of inputArr) {
        arrValue.addEventListener('click', function() {
            if (this.innerHTML == correctAns) {
                blockDisplay(qaBlocks)
            }
            else {
                timeLeft = timeLeft - 5
            }
        })
    }
}

bigBoy (answers1, correctAnswer1)
bigBoy (answers2, correctAnswer2)
bigBoy (answers3, correctAnswer3)
bigBoy (answers4, correctAnswer4)
bigBoy (answers5, correctAnswer5)
bigBoy (answers6, correctAnswer6)




