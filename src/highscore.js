var highscoresArray = []
var highscoreUl = document.querySelector(".highscores__ul--list")

function init() {   
    var storedHighscores = JSON.parse(localStorage.getItem("HighScores"))
    if (storedHighscores !== null) {
        highscoresArray = storedHighscores
    }
}
function renderHighscores() {
    highscoreUl.innerHTML = "";
    for (i = 0; i < highscoresArray.length; i++) {
        var userText = highscoresArray[i].user
        var userHighscore = highscoresArray[i].score
        var highscoreNumber = i + 1
        var highscoreLiEl = document.createElement("li")
        highscoreLiEl.textContent = `${highscoreNumber}. ${userText} - ${userHighscore} `
        highscoreUl.append(highscoreLiEl)
    }
}

//Function for all event listeners
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if( e.target.matches(selector)) callback(e)
    })
}

addGlobalEventListener("click","a", e => {
    var eClass = e.target.getAttribute("class")
    e.stopPropagation()
    if (eClass.includes("clear-HS") === true ) {
        localStorage.removeItem("HighScores")
        highscoreUl.innerHTML = ""
        return
    }
});

init()
renderHighscores()