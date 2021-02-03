function compare(choice1, choice2) {
    if (choice1 === choice2) {
      return 'equal';
    } else if (choice1 === 'rock') {
      if (choice2 === 'scissors') {
        return 'rock';
      } else if (choice2 === 'paper') {
        return 'paper';
      }
    } else if (choice1 === 'paper') {
      if (choice2 === 'rock') {
        return 'paper';
      } else if (choice2 === 'scissors') {
        return 'scissors';
      }
    } else if (choice1 === 'scissors') {
      if (choice2 === 'rock') {
        return 'rock';
      } else if (choice2 === 'paper') {
        return 'scissors';
      }
    }
  }

document.getElementById('rock').addEventListener('click', function (event) {
    game('rock')
});

document.getElementById('paper').addEventListener('click', function (event) {
    game('paper')
});

document.getElementById('scissors').addEventListener('click', function (event) {
    game('scissors')
});

let PlayerScore = 0
let ComputerScore = 0
let TiesScore = 0

function game(UserChoice) {
    let ComputeurChoice = Math.random();
    if (ComputeurChoice < 0.34) {
      ComputeurChoice = 'rock';
    } else if(ComputeurChoice <= 0.67) {
      ComputeurChoice = 'paper';
    } else {
      ComputeurChoice = 'scissors';
    }

    let result = compare(UserChoice, ComputeurChoice);

    let message
    if (result === 'equal') {
     message= 'Ties !'
     TiesScore++;
     changeIcon()
    } else if (result === UserChoice) {
     message='You win !'
      PlayerScore++;
      changeIcon(UserChoice, true)
    } else {
      message='You lose ! Try again !'
      ComputerScore++;
      changeIcon(UserChoice, false)
    }

  document.getElementById('result').innerHTML = message;
  document.getElementById('playerScore').innerHTML = PlayerScore;
  document.getElementById('tieScore').innerHTML = TiesScore;
  document.getElementById('computerScore').innerHTML = ComputerScore;
}

function changeIcon(result = null, win) {
    document.getElementById('rock').classList.remove("error");
    document.getElementById('rock').classList.remove("success");
    document.getElementById('paper').classList.remove("error");
    document.getElementById('paper').classList.remove("success");
    document.getElementById('scissors').classList.remove("error");
    document.getElementById('scissors').classList.remove("success");

    if(win) {
        if(result == 'rock') {
            document.getElementById('rock').classList.add("success");
        }
        if(result == 'paper') {
            document.getElementById('paper').classList.add("success");
        }
        if(result == 'scissors') {
            document.getElementById('scissors').classList.add("success");
        }
    } else {
        if(result == 'rock') {
            document.getElementById('rock').classList.add("error");
        }
        if(result == 'paper') {
            document.getElementById('paper').classList.add("error");
        }
        if(result == 'scissors') {
            document.getElementById('scissors').classList.add("error");
        }
    }
}