let scores = { A: 18, B: 18 };
let x;
let round = 0;
let h = 'HISTORY';

const A = document.getElementById('scoreA')
const B = document.getElementById('scoreB')
const badge = document.getElementById('badge')

A.innerHTML = scores['A']
B.innerHTML = scores['B']

function history(){
    console.log("Round "+round +"!  "+ scores['A']+" : "+scores['B']);
    h += '<br>' +scores['A']+" : "+scores['B']
    document.getElementById('history').innerHTML = h;
}

function changeScore(team, amount) {
    scores[team] += amount;
    x = team;
    document.getElementById('score' + team).textContent = scores[team];
    A.removeAttribute("class", "Serve"); 
    B.removeAttribute("class", "Serve"); 
    document.getElementById('score'+ x).setAttribute("class", "Serve"); 
    if (scores['A'] >= 20 || scores['B'] >= 20) {
        if (scores['A'] === 20 && scores['B'] < 20) {
            A.classList.add("set");
        }
        if (scores['B'] === 20 && scores['A'] < 20) {
            B.classList.add("set");
        }
        
        if (scores['A'] >= 20 && scores['B'] >= 20) {
            drew();
            
            if (Math.abs(scores['A'] - scores['B']) === 2) {
                console.log(scores['A'] > scores['B'] ? 'A wins' : 'B wins');
            }
        }
    }
    

    
}

function renew() {
    round++;
    A.textContent = 0;
    B.textContent = 0;
    history(scores, round);
    scores = {A:0, B:0}
    badge.setAttribute("Class", "hidden")
}

function drew(){
    badge.removeAttribute("class", "hidden")
    badge.setAttribute("class", "drew")
}