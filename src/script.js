
var score;

// var answerButtons = document.querySelectorAll('button[data-answer]');
var allSections = document.querySelector(".all-pages__section")
var questionSections = document.querySelector('.all-questions__sections')

var scoreValue = document.querySelector(".score__span")
//     console.log(scoreValue)

//Function for all event listeners
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if( e.target.matches(selector)) callback(e)
    })
}

// Event Listeners
addGlobalEventListener("click","button", e => {
    console.log(e.target.dataset.answer)
    if (e.target.dataset.answer === "true") {
        score += 20
        console.log("correcto!")
        console.log(score)
        return
    }
    if (e.target.classlist = "main-page__button")
        console.log(scoreValue)
        return
} );
