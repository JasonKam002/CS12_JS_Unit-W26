/*  *** Hints ***
---Consider the steps required...
---Start by getting inputed value (guess) 
---Generate random number (try output to console to see value)
---Compare these 2 values
---Add event listener for click-event on button
---Update message and scores etc
*/



function check(num) {
    let guess = document.querySelector(".guess").value
    if (guess == num) {
        document.body.style.backgroundColor = 'green'
        document.querySelector("h1").textContent = 'You are Correct!'
        document.querySelector(".number").textContent = num
        document.querySelector(".message").textContent = 'Correct'
        let currentScore = 20-count
        document.querySelector(".score").textContent = currentScore
    }   else {
            document.body.style.backgroundColor = 'red'
            document.querySelector("h1").textContent = 'Umm...Keep Guessing'
            document.querySelector(".message").textContent = 'Incorrect'
            count += 1
    }
    return currentScore
}

function again() {
    let num = Math.floor(Math.random() * 21)
    console.log(num)
    document.body.style.backgroundColor = 'black'
    document.querySelector("h1").textContent = 'Guess My Number'
    document.querySelector(".number").textContent = '?'
    document.querySelector(".message").textContent = 'Start guessing...'
    count = 0
    document.querySelector(".score").textContent = 0
    console.log(currentScore, highscore)
    if (currentScore >= highscore) {
        highscore = currentScore
    }
    document.querySelector(".highscore").textContent = highscore
    return num
}





