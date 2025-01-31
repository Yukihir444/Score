let scores = { A: 0, B: 0 };
let x;
function changeScore(team, amount) {
    scores[team] += amount;
    x = team;
    document.getElementById('score' + team).textContent = scores[team];
    document.getElementById('scoreA').removeAttribute("class", "Green"); 
    document.getElementById('scoreB').removeAttribute("class", "Green"); 
    document.getElementById('score'+ x).setAttribute("class", "Green"); 
}

function reloadPage() {
    location.reload();
}