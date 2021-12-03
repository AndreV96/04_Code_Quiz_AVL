
var score = 0;
var time = 76;
var questionNumber;
var timeout

var body = document.body;

var startQuizSection = document.querySelector(".start-quiz__section")
var questionSection = document.querySelector(".question__section")
var gameOverSection = document.querySelector(".game-over__section")

var questionH1 = document.querySelector(".question__h1")
var possibleAnswer1 = document.getElementById("possible-answer1")
var possibleAnswer2 = document.getElementById("possible-answer2")
var possibleAnswer3 = document.getElementById("possible-answer3")
var possibleAnswer4 = document.getElementById("possible-answer4")

var scoreP = document.querySelector(".score__p")
var scoreValue = document.querySelector(".score__span")
var timeP = document.querySelector(".time__p")
var timeValue = document.querySelector(".time__span")


//Wrong and Correct Messages Elements

var correctMessageEl = document.createElement("p")
var wrondMessageEl = document.createElement("p")

correctMessageEl.innerHTML = "Correct!"
wrondMessageEl.innerHTML = "Wrong!"
correctMessageEl.classList.add("answer-message")
wrondMessageEl.classList.add("answer-message")

//Highscores

var highscoresArray = []

var gameOverH1El = document.createElement("h1")
var gameOverPEl = document.createElement("p")
var gameOverLabelEl = document.createElement("label")
var gameOverInputEl = document.createElement("input")
var gameOverButtonEl = document.createElement("button")

// gameOverSectionEl.classList.add("game-over__section")
gameOverH1El.setAttribute("style", "font-weight: bold")
gameOverH1El.innerHTML= "All done!"
gameOverLabelEl.innerHTML = "Enter your initials:"
gameOverLabelEl.setAttribute("for", "text")
gameOverLabelEl.classList.add("margin-right")
gameOverInputEl.setAttribute("type", "text")
gameOverInputEl.setAttribute("id", "initialsInput")
gameOverInputEl.classList.add("game-over__input")
gameOverInputEl.classList.add("margin-right")
gameOverButtonEl.classList.add("button")
gameOverButtonEl.classList.add("button--submit-HS")
// gameOverButtonEl.setAttribute("href", "highscores.html")
gameOverButtonEl.innerHTML = "Submit"

var questions = ["Commonly used data types DO NOT include:", "The condition of an if/else statement is enclosed within ____.", "Arrays in Javascript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to be debugged is:" ] 
var answers1 = [
    {
        text: "strings",
        answer: false
    },
    {
        text: "booleans",
        answer: false
    },
    {
        text: "alerts",
        answer: true
    },
    {
        text: "numbers",
        answer: false
    }]
var answers2 = [
    {
        text: "quotes",
        answer: false
    },
    {
        text: "curly brackets",
        answer: false
    },
    {
        text: "parenthesis",
        answer: true
    },
    {
        text: "square brackets",
        answer: false
    }]
var answers3 = [
    {
        text: "nubmers and strings",
        answer: false
    },
    {
        text: "other arrays",
        answer: false
    },
    {
        text: "booleans",
        answer: false
    },
    {
        text: "all of the above",
        answer: true
    }]
var answers4 = [
    {
        text: "commas",
        answer: false
    },
    {
        text: "curly brackets",
        answer: false
    },
    {
        text: "quotes",
        answer: true
    },
    {
        text: "parenthesis",
        answer: false
    }]
var answers5 = [
    {
        text: "JavaScript",
        answer: false
    },
    {
        text: "terminal/bash",
        answer: false
    },
    {
        text: "for loops",
        answer: false
    },
    {
        text: "console.log",
        answer: true
    }]

var questionsAnswersArray = [
    {
        question: questions[0],
        answers: answers1
    },
    {
        question: questions[1],
        answers: answers2
    },
    {
        question: questions[2],
        answers: answers3
    },
    {
        question: questions[3],
        answers: answers4
    },
    {
        question: questions[4],
        answers: answers5
    }
]

var possibleAnswersDomEArray = [
    possibleAnswer1, possibleAnswer2, possibleAnswer3, possibleAnswer4
]

//Function for all event listeners
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if( e.target.matches(selector)) callback(e)
    })
}
//Main functions
function startQuiz() {
    startQuizSection.classList.add("display-none");
    questionSection.classList.remove("display-none");
    scoreP.classList.remove("display-none")
    scoreValue.classList.remove("display-none")
    timeP.classList.remove("display-none")
    questionNumber = 0;
    timer()
    
}
function timer() {
    time = time -1;
    timeValue.innerHTML = time;
    timeout = setTimeout(timer, 1000);
    if (time < 1) {
        timeValue.style.color = "red"
        finishQuiz()
    }
}
function loadNextQuestion() {  
    if (questionNumber === 4) {
        finishQuiz()
        return
    }
    questionNumber += 1
    questionH1.innerHTML = questionsAnswersArray[questionNumber].question
    for (i = 0; i < 4; i++) {
        possibleAnswersDomEArray[i].innerHTML = questionsAnswersArray[questionNumber].answers[i].text
        possibleAnswersDomEArray[i].dataset.answer = questionsAnswersArray[questionNumber].answers[i].answer
    }  
}
function finishQuiz () {
    questionSection.remove()
    clearTimeout(timeout)
    if (time < 0) timeValue.innerHTML = 0
    addScoreScreen()
}
function addScoreScreen () {
    gameOverPEl.innerHTML = `Your final score is: ${score}`
    gameOverSection.appendChild(gameOverH1El)
    gameOverSection.appendChild(gameOverPEl)
    gameOverSection.appendChild(gameOverLabelEl)
    gameOverSection.appendChild(gameOverInputEl)
    gameOverSection.appendChild(gameOverButtonEl)
}
// Highscore Fucntions
function init() {   
    var storedHighscores = JSON.parse(localStorage.getItem("HighScores"))
    if (storedHighscores !== null) {
        highscoresArray = storedHighscores
    }
    console.log(highscoresArray)
}
function submitHighscore() {
    var userInputHS = document.querySelector(".game-over__input")
    var userInputHSValue = userInputHS.value.trim();
    var userScoreHS = score
    var userObjectHS = new Object()
    userObjectHS.user = userInputHSValue 
    userObjectHS.score = userScoreHS
    highscoresArray.push(userObjectHS)
    userInputHS.value = ""
    storeHS()
    goToHighscoresPage();
    console.log(highscoresArray )
}
function storeHS() {
    localStorage.setItem("HighScores", JSON.stringify(highscoresArray))
}
function goToHighscoresPage() {
    
    window.location.href = "highscores.html"
    renderHighscores()

}
function renderHighscores() {
    var highscoreUl = document.querySelector(".highscores__ul--list")
    // highscoreUl.innerHTML = "";
    console.log(highscoreUl)
    for (i = 0; i < highscoresArray.length; i++) {
        var userText = highscoresArray[i].user
        var userHighscore = highscoresArray[i].score
        var highscoreNumber = i + 1
        var highscoreLiEl = document.createElement("li")
        highscoreLiEl.textContent = `${highscoreNumber}. ${userText} - ${userHighscore} `
        // highscoreUl.append(highscoreLiEl)
        console.log(`${highscoreNumber}. ${userText} - ${userHighscore} `)
    }
}
// Event Listeners
addGlobalEventListener("click","button", e => {
    var eClass = e.target.getAttribute("class")
    var eDataAnswer = e.target.getAttribute("data-answer")
    e.stopPropagation()
    if (eClass.includes("start-quiz__button") === true) {
        startQuiz()
        return
    }
    if (eDataAnswer === "true") {
        score += 20
        scoreValue.innerHTML = score
        loadNextQuestion()
        return
    }
    if (eDataAnswer === "false" && time < 16) {
        time = 0
        return
    }
    if (eDataAnswer === "false") {
        time -= 15
        loadNextQuestion()
        return
    }
    if (eClass.includes("button--submit-HS") === true) {
        submitHighscore()
        return
    }
} );

addGlobalEventListener("click","a", e => {
    var eClass = e.target.getAttribute("class")
    e.stopPropagation()
    if (eClass.includes("clear-HS") === true ) {
        console.log(highscoresArray)
        console.log("hi")
        return
    }
});

init()