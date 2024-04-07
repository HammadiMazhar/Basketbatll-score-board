let score = 0
function add1(){
    score += 1
    document.getElementById("home-score").textContent = score
}
function add2(){
    score += 2
    document.getElementById("home-score").textContent = score
}
function add3(){
    score += 3
    document.getElementById("home-score").textContent = score
}

// Guest Score
let guestScore = 0
function guestAdd1(){
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}
function guestAdd2(){
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}
function guestAdd3(){
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}

function reset(){
    score = 0 
    guestScore = 0 
    document.getElementById("home-score").textContent = score
    document.getElementById("guest-score").textContent = guestScore

}