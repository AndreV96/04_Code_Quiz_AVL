
var score = 0;
var time = 76;
var questionNumber;

var startQuizSection = document.querySelector(".start-quiz__section")
var questionSection = document.querySelector(".question__section")

var questionH1 = document.querySelector(".question__h1")
var possibleAnswer1 = document.getElementById("possible-answer1")
var possibleAnswer2 = document.getElementById("possible-answer2")
var possibleAnswer3 = document.getElementById("possible-answer3")
var possibleAnswer4 = document.getElementById("possible-answer4")

var scoreP = document.querySelector(".score__p")
var scoreValue = document.querySelector(".score__span")
var timeP = document.querySelector(".time__p")
var timeValue = document.querySelector(".time__span")

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
function loadNextQuestion() {
    console.log( questionNumber)
    if (questionNumber < 4) {
        questionNumber += 1
        questionH1.innerHTML = questionsAnswersArray[questionNumber].question
        for (i = 0; i < 4; i++) {
            possibleAnswersDomEArray[i].innerHTML = questionsAnswersArray[questionNumber].answers[i].text
            possibleAnswersDomEArray[i].dataset.answer = questionsAnswersArray[questionNumber].answers[i].answer
        }
    }
    // if (questionNumber === 4) {
        
    // }
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
    setTimeout(timer, 1000);
}

// function noTimeLeft() {

// } 
// Event Listeners
addGlobalEventListener("click","button", e => {
    var eClass = e.target.getAttribute("class")
    var eDataAnswer = e.target.getAttribute("data-answer")
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
