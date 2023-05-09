export { rps } 
export { rpsls } 

const result_table = {
    'rock': {
        'rock': 'tie',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'win',
        'spock': 'lose'
    },
    'paper': {
        'rock': 'win',
        'paper': 'tie',
        'scissors': 'lose',
        'lizard': 'lose',
        'spock': 'win'
    },
    'scissors': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'tie',
        'lizard': 'win',
        'spock': 'lose'
    },
    'lizard': {
        'rock': 'lose',
        'paper': 'win',
        'scissors': 'lose',
        'lizard': 'tie',
        'spock': 'win'
    },
    'spock': {
        'rock': 'win',
        'paper': 'lose',
        'scissors': 'win',
        'lizard': 'lose',
        'spock': 'tie'
    }
};


function rps(input) {
    console.log(input);
    console.log(typeof(input));
    const options = ["rock", "paper", "scissors"];   
    
    if (input === undefined){
        return {"player": options[Math.floor(Math.random() * options.length)]}
    } else if (!options.includes(input.toLowerCase())){
        console.error("Wrong input, the input should be one of rock, paper, or scissors")
        throw new RangeError();
    } else {
        input = input.toLowerCase();
        const opponent = options[Math.floor(Math.random() * options.length)];
        const outcome = result_table[input][opponent];
        return {
            "player": input,
            "opponent": opponent, 
            "result": outcome
        };
    }
}


function rpsls(input) {
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    
    if (input === undefined){
        return {"player": options[Math.floor(Math.random() * options.length)]}
    } else if (!options.includes(input.toLowerCase())){
        console.error("Wrong input, the input should be one of rock, paper, scissors, lizard, or spock")
        throw new RangeError();
    } else {
        input = input.toLowerCase();
        const opponent = options[Math.floor(Math.random() * options.length)];
        const outcome = result_table[input][opponent];
        return {
            "player": input,
            "opponent": opponent, 
            "result": outcome
        };
    }
}