/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/

let boxIndex = null
let bingo = false
let points = 0
let gameEnd = false
let gameStart = false
let choiceIndex = 0
let choiceNumber = []
let boxesTickedGreen  = []
let boxesTicked = []


/*------------------------ Cached Element References ------------------------*/

const board = document.querySelector('#board')

const boxes = document.querySelectorAll('.box')

const message = document.querySelector('#message')

const startGame = document.querySelector('#start')

const controlMessage = document.querySelector('#control-message')

const resetButton = document.querySelector('#reset')

const skipButton = document.querySelector('#skip')

/*-------------------------------- Functions --------------------------------*/

const handleClick = (event) => {
    boxIndex = event.currentTarget.id
    if (boxes[boxIndex].style.border === '3px solid green' || boxes[boxIndex].style.border === '3px solid red') {
        return
    } else if (gameStart === false) {
        return
    } else if (gameEnd === true) {
        return
    } else {
        boxesTicked.push(boxIndex)
        const statId = listOfStats[boxIndex].statName
        if(statId === listOfPlayers[choiceIndex].country || statId === listOfPlayers[choiceIndex].currentClub || statId === listOfPlayers[choiceIndex].position) {
            event.currentTarget.style.border = '3px solid green'
            boxesTickedGreen.push(boxIndex)
            points = (points + 1)
        } else if(statId !== listOfPlayers[choiceIndex].country && statId !== listOfPlayers[choiceIndex].currentClub && statId !== listOfPlayers[choiceIndex].position) {
            event.currentTarget.style.border = '3px solid red'
        }
    }
    choiceIndex = (choiceIndex + 1)
    choices()
    gameEndBingo()
    gameEndNoBingo()
    updateMessage()
    console.log(boxesTickedGreen);
    
}

const render = () => {
    updateMessage()
}

const updateMessage = () => {
    if(bingo === false && gameEnd === false && gameStart === false) {
        message.textContent = 'How well do you know your Football?'
        controlMessage.textContent = 'Start game now'
    } else if(bingo === false && gameEnd === true) {
        message.textContent = `You scored ${points} points`
        controlMessage.textContent = 'Game finished'
    } else if(bingo === false && gameEnd === false && gameStart === true) {
        message.textContent = 'Good Luck!'
    } else if(bingo === true) {
        message.textContent = 'BINGO!'
        controlMessage.textContent = 'You won!'
    }
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0 ; i--) {
        const x = Math.floor(Math.random() * (i + 1))
        const temp = array[i]
        array[i] = array[x]
        array[x] = temp
    }
} 

const choices = () => {
    controlMessage.textContent = `Player: ${listOfPlayers[choiceIndex].fullName}`
    choiceNumber.push(listOfPlayers[choiceIndex.fullName])
}

const skipPlayer = (event) => {
    gameEndNoBingo()
    gameEndBingo()
    if (gameEnd === true) {
        updateMessage()
        return
    } else if (gameStart === false) {
        return
    } else
    choiceIndex = (choiceIndex + 1)
    choices()
}

const gameEndNoBingo = () => {
    if(bingo === true) {
        return
    } else if (choiceIndex === listOfPlayers.length - 1) {
        gameEnd = true
        updateMessage()
        return
    } else if (boxesTicked.length === 16) {
        gameEnd = true
        updateMessage()
        return
    }
}

const gameEndBingo = () => {
    if(boxesTickedGreen.length === 16) {
        bingo = true
        gameEnd = true
    }
}


const gameStarted = (event) => {
    if(gameStart) {
        return
    } else {
    gameStart = true
    boxes.forEach(box => {
        box.addEventListener('click', handleClick)
    })
    shuffle(listOfStats)
    boxes.forEach((box, i) => {
        const img = document.createElement('img')
        img.src = listOfStats[i].image
        img.alt = `${listOfStats[i].statName} image`
        img.style.height = '60px'
        img.style.width = '60px'
        boxes[i].appendChild(img)
    })
    shuffle(listOfPlayers)
    choices()
    updateMessage()
    console.log(gameStart);
}}

const resetGame = () => {
    init()
}

const init = () => {
    boxes.forEach(box => {
        box.textContent = ''
        box.style.border = '3px solid white'
    })
    bingo = false
    points = 0
    gameEnd = false
    gameStart = false
    boxesTicked = []
    boxesTickedGreen = []
    choiceIndex = 0
    choiceNumber = []
    render()
}

init()

/*----------------------------- Event Listeners -----------------------------*/

startGame.addEventListener('click', gameStarted)

resetButton.addEventListener('click', resetGame)

skipButton.addEventListener('click', skipPlayer)