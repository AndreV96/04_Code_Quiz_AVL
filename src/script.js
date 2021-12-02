
var score = 0;
var time = 76;
var questionNumber;
var question = ["Commonly used data types DO NOT include:", "The condition of an if/else statement is enclosed within ____.", "Arrays in Javascript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to be debugged is:" ] 
var answers1 = ["strings", "booleans", "alerts", "numbers"]
var answers2 = ["quotes", "curly brackets", "parenthesis", "square brackets"]
var answers3 = ["numbers and strings", "other arrays", "booleans", "all of the above"]
var answers4 = ["commas", "curly brackets", "quotes", "parenthesis"]
var answers5 = ["JavaScript", "terminal/bash", "for loops", "console.log"]

// var answerButtons = document.querySelectorAll('button[data-answer]');
var allSections = document.querySelector(".all-pages__section")
var questionSections = document.querySelector('.all-questions__sections')
var startQuizSection = document.querySelector(".start-quiz__section")
var questionSection = document.querySelector(".question__section")

var questionH1 = document.querySelector(".question__h1")

var scoreP = document.querySelector(".score__p")
var scoreValue = document.querySelector(".score__span")
var timeP = document.querySelector(".time__p")
var timeValue = document.querySelector(".time__span")

//Function for all event listeners
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if( e.target.matches(selector)) callback(e)
    })
}
function loadNextQuestion() {
    if (questionNumber < 5) {
        questionNumber += 1
        questionH1.innerHTML = question[questionNumber]

    } 
}
//Main functions
function startQuiz() {
    startQuizSection.classList.add("display-none");
    questionSection.classList.remove("display-none");
    scoreP.classList.remove("display-none")
    scoreValue.classList.remove("display-none")
    timeP.classList.remove("display-none")
    questionNumber = 1;
    timer()
    
console.log(questionH1.innerHTML)
}
function timer() {
    time = time -1;
    timeValue.innerHTML = time;
    setTimeout(timer, 1000);
}

// function noTimeLeft() {

// } 
// Event Listeners
addGlobalEventListener("click","button", e => {
    var eClass = e.target.getAttribute("class")
    var eDataAnswer = e.target.getAttribute("data-answer")
    console.log(eDataAnswer)
    console.log(eClass)
    e.stopPropagation()
    if (eClass.includes("start-quiz__button") === true) {
        startQuiz()
        console.log("inicio quiz")
        return
    }
    if (eDataAnswer === "true") {
        score += 20
        scoreValue.innerHTML = score
        loadNextQuestion();
        console.log("correcto!")
        return
    }
    if (eDataAnswer === "false") {
        time -= 15
        loadNextQuestion();
        console.log("incorrecto!")
        return
    }
} );
