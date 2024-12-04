/*-------------------------------- Constants --------------------------------*/

const listOfPlayers = [
    { fullName: "Erling Haaland", currentClub: "Manchester City", country: "Norway", position: "Forward" },
    { fullName: "Kylian Mbappe", currentClub: "Real Madrid", country: "France", position: "Forward" },
    { fullName: "Jude Bellingham", currentClub: "Real Madrid", country: "England", position: "Midfielder" },
    { fullName: "Bruno Fernandes", currentClub: "Manchester United", country: "Portugal", position: "Midfielder" },
    { fullName: "Robert Lewandowski", currentClub: "Barcelona", country: "Poland", position: "Forward" },
    { fullName: "Phil Foden", currentClub: "Manchester City", country: "England", position: "Midfielder" },
    { fullName: "Cole Palmer", currentClub: "Chelsea", country: "England", position: "Midfielder" },
    { fullName: "Mohamed Salah", currentClub: "Liverpool", country: "Egypt", position: "Forward" },
    { fullName: "Kevin De Bruyne", currentClub: "Manchester City", country: "Belgium", position: "Midfielder" },
    { fullName: "Lionel Messi", currentClub: "Inter Miami", country: "Argentina", position: "Forward" },
    { fullName: "Rodri", currentClub: "Manchester City", country: "Spain", position: "Midfielder" },
    { fullName: "Vinicius Junior", currentClub: "Real Madrid", country: "Brazil", position: "Forward" },
    { fullName: "Harry Kane", currentClub: "Bayern Munich", country: "England", position: "Forward" },
    { fullName: "Federico Valverde", currentClub: "Real Madrid", country: "Uruguay", position: "Midfielder" },
    { fullName: "Lamine Yamal", currentClub: "Barcelona", country: "Spain", position: "Forward" },
    { fullName: "Jamal Musiala", currentClub: "Bayern Munich", country: "Germany", position: "Midfielder" },
    { fullName: "Trent Alexander-Arnold", currentClub: "Liverpool", country: "England", position: "Defender" },
    { fullName: "William Saliba", currentClub: "Arsenal", country: "France", position: "Defender" },
    { fullName: "Ederson", currentClub: "Manchester City", country: "Brazil", position: "Goalkeeper" },
    { fullName: "Virgil van Dijk", currentClub: "Liverpool", country: "Netherlands", position: "Defender" },
    { fullName: "Alisson", currentClub: "Liverpool", country: "Brazil", position: "Goalkeeper" },
    { fullName: "Antonio Rudiger", currentClub: "Real Madrid", country: "Germany", position: "Defender" },
    { fullName: "Ruben Dias", currentClub: "Manchester City", country: "Portugal", position: "Defender" },
    { fullName: "Achraf Hakimi", currentClub: "Paris Saint-Germain", country: "Morocco", position: "Defender" },
    { fullName: "Enzo Fernandez", currentClub: "Chelsea", country: "Argentina", position: "Midfielder" },
    { fullName: "Thibaut Courtois", currentClub: "Real Madrid", country: "Belgium", position: "Goalkeeper" },
    { fullName: "Mike Maignan", currentClub: "AC Milan", country: "France", position: "Goalkeeper" },
    { fullName: "Theo Hernandez", currentClub: "AC Milan", country: "France", position: "Defender" },
    { fullName: "Ousmane Dembele", currentClub: "Paris Saint-Germain", country: "France", position: "Forward" },
    { fullName: "Gianluigi Donnarumma", currentClub: "Paris Saint-Germain", country: "Italy", position: "Goalkeeper" }, 
    { fullName: "Martin Odegaard", currentClub: "Arsenal", country: "Norway", position: "Midfielder" }
]

const listOfStats = [
    {statName: 'Manchester City', image: "../images/mcfclogo.png"}, 
    {statName: 'Manchester United', image: "../images/mufclogo.png"}, 
    {statName: 'Arsenal', image: "../images/arsenallogo.png"}, 
    {statName: 'Liverpool', image: "../images/liverpoollogo.png"}, 
    {statName: 'Chelsea', image: "../images/chelsealogo.png"}, 
    {statName: 'Barcelona', image: "../images/barcelonalogo.png"}, 
    {statName: 'Real Madrid', image: "../images/realmadridlogo.png"}, 
    {statName: 'Inter Miami', image: "../images/intermiamilogo.png"}, 
    {statName: 'AC Milan', image: "../images/acmilanlogo.png"}, 
    {statName: 'Bayern Munich', image: "../images/bayernmunichlogo.png"}, 
    {statName: 'Paris Saint-Germain', image: "../images/psglogo.png"}, 
    {statName: 'England', image: "../images/englandflag.png"}, 
    {statName: 'Morocco', image: "../images/moroccoflag.png"}, 
    {statName: 'Portugal', image: "../images/portugalflag.png"}, 
    {statName: 'Spain', image: "../images/spainflag.png"}, 
    {statName: 'Argentina', image: "../images/argentinaflag.png"}, 
    {statName: 'France', image: "../images/franceflag.png"}, 
    {statName: 'Egypt', image: "../images/egyptflag.png"}, 
    {statName: 'Italy', image: "../images/italyflag.png"}, 
    {statName: 'Poland', image: "../images/polandflag.png"}, 
    {statName: 'Brazil', image: "../images/brazilflag.png"}, 
    {statName: 'Uruguay', image: "../images/uruguayflag.png"}, 
    {statName: 'Norway', image: "../images/norwayflag.png"}, 
    {statName: 'Netherlands', image: "../images/netherlandsflag.png"}, 
    {statName: 'Belgium', image: "../images/belgiumflag.png"}, 
    {statName: 'Germany', image: "../images/germanyflag.png"}, 
    {statName: 'Goalkeeper', image: "../images/goalkeeper.png"}, 
    {statName: 'Defender', image: "../images/defender.png"}, 
    {statName: 'Midfielder', image: "../images/midfielder.png"}, 
    {statName: 'Forward', image: "../images/forward.png"}
]

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