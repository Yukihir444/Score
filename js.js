let scores = { A: 0, B: 0 };
let x;
let round = 0;
let h = 'HISTORY';
function history(){
    console.log("Round "+round +"!  "+ scores['A']+" : "+scores['B']);
    h += '<br>' +scores['A']+" : "+scores['B']
    document.getElementById('history').innerHTML = h;
}

function changeScore(team, amount) {
    scores[team] += amount;
    x = team;
    document.getElementById('score' + team).textContent = scores[team];
    document.getElementById('scoreA').removeAttribute("class", "Green"); 
    document.getElementById('scoreB').removeAttribute("class", "Green"); 
    document.getElementById('score'+ x).setAttribute("class", "Green"); 
}

function renew() {
    round++;
    document.getElementById('scoreA').textContent = 0;
    document.getElementById('scoreB').textContent = 0;
    history(scores, round);
    scores = {A:0, B:0}
}
