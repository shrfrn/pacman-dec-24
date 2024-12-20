'use strict'

const WALL = '&#8251;'
const FOOD = '&middot;'
const EMPTY = ' '

const gGame = {
    score: 0,
    isOn: false
}
var gBoard

function init() {
    console.log('hello')

    gBoard = buildBoard()
    createPacman(gBoard)
    createGhosts(gBoard)
    
    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
}

function buildBoard() {
    const size = 10
    const board = []

    for (var i = 0; i < size; i++) {
        board.push([])

        for (var j = 0; j < size; j++) {
            board[i][j] = FOOD
            
            if (i === 0 || i === size - 1 ||
                j === 0 || j === size - 1 ||
                (j === 3 && i > 4 && i < size - 2)) {
                board[i][j] = WALL
            }
        }
    }
    return board
}

function updateScore(diff) {
    // TODO: update model and dom
    gGame.score += diff

    const elScore = document.querySelector('.score span')
    elScore.innerText = gGame.score
}

function gameOver() {
    console.log('Game Over')
    // TODO
    gGame.isOn = false
}