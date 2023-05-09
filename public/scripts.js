// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
// Flip one coin and show coin image to match result when button clicked
// Button coin flip element in div#single
// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function play(){
    var rps = document.getElementById('rps');
    var rpsls = document.getElementById('rpsls');
    var opponent = document.getElementById('opponent');

    if (opponent.checked && rps.checked){
        window.location.href = "rps.html";
    } 

    if (opponent.checked && rpsls.checked){
        window.location.href = "rpsls.html";
    }

    if (!opponent.checked && rps.checked){
        rpsNoOpponent().then(shot => {
            document.getElementById("no-opponent").value = shot["player"];
        })
    }

    if (!opponent.checked && rpsls.checked){
        rpslsNoOpponent().then(shot => {
            document.getElementById("no-opponent").value = shot["player"];
        })
    }
}

function rps(shot){
    document.getElementById("player-shot").value = shot;

    rpsOpponent(shot).then(someVal => {
        result = someVal["result"];
        computerShot = someVal["opponent"];
        document.getElementById("result").value = result;
        document.getElementById("opponent-shot").value = computerShot;
    });
}

function rpsls(shot){
    document.getElementById("rpsls-player-shot").value = shot;

    rpslsOpponent(shot).then(someVal => {
        result = someVal.result;
        computerShot = someVal.opponent;
        document.getElementById("rpsls-result").value = result;
        document.getElementById("rpsls-opponent-shot").value = computerShot;
    });    
}

function rpsNoOpponent() {
    const url = "/app/rps"
    return response = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

function rpslsNoOpponent() {
    const url = "/app/rpsls"
    return response = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

function rpsOpponent(shot) {
    const url = "/app/rps/play/" + shot
    return response = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

function rpslsOpponent(shot) {
    const url = "/app/rpsls/play/" + shot
    return response = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(error));
}

function viewRules(){
    window.location.href = "rules.html";
}

function home(){
    window.location.href = "index.html";
}