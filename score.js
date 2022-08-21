const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')

const p1btn = document.querySelector('#p1btn')
const p2btn = document.querySelector('#p2btn')
const reset = document.querySelector('#reset')
const playTo = document.querySelector('#playTo')

let totGames = 0;
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
p1btn.addEventListener('click', function () {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === totGames) {

            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }

})

p2btn.addEventListener('click', function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === totGames) {

            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }

})

playTo.addEventListener('change', function () {
    totGames = parseInt(this.value)
    resetsFunc();
})

reset.addEventListener('click', resetsFunc)

function resetsFunc() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;


}