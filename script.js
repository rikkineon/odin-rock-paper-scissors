// Declare function 'getComputerChoice' that randomly either:
        // Returns string value "rock"
        // Returns string value "paper"
        // Returns string value "scissors"

        // FOR FUNCTION getComputerChoice
          // Declare variables with string values
         // Assign variable randomNumber to randomly generate a number between 0 and 1 and multiply that number * 10
         // Set condition:
            // If randomNumber <= 3.33, return ROCK
            // If randomNumber >= 3.34 AND <= 6.67, return PAPER
            // Else, return SCISSORS

        let userInput;
        const userChooses = userInput;

        let finalCompChoice;
        let roundWinner;

            function getComputerChoice() {

            let randomNumber = (Math.random() * 10);

            finalCompChoice = 
            randomNumber <= 3.33 ? "vs rock" :
            randomNumber >= 3.34 && randomNumber <= 6.67 ? "vs paper" :
            "vs scissors";

            console.log(finalCompChoice); 

            }

            // FUNCTION: getHumanChoice
            // Prompt user for input
            // Return value of user input

            function getHumanChoice() {

                userInput = prompt("Choose rock, paper, or scissors").toLowerCase();

                console.log(userInput);
 
            }

            function rePrompt() {

                userInput = prompt("Choose rock, paper, or scissors ").toLowerCase();
                console.log(userInput);
                console.log(finalCompChoice)
            }


            // FUNCTION: playRound with choice parameters

            // FUNCTION: playGame

            function playGame (rounds) {
            
                 // Declare player scores and initialize at 0

                    let humanScore = 0;
                    
                    let computerScore = 0;

                    // FUNCTION update and display scores

                    function updateHumanScore (condition) {

                        const currentHumanScore = ++humanScore;
                        console.log("YOU: " + currentHumanScore);
                        console.log("COMPUTER: " + computerScore);
                    }

                    function updateComputerScore (condition) {

                        const currentComputerScore = ++computerScore;
                        console.log("YOU: " + humanScore);
                        console.log("COMPUTER: " + currentComputerScore);

                    }

                    function scoreIsDraw (condition) {

                        console.log("YOU: " + humanScore);
                        console.log("COMPUTER: " + computerScore);
                    }

                function playRound(humanChoice, computerChoice) {
                
                // Accept player choices as arguments
                // humanChoice must be case insensitive

                // Declare variables

                // Read user input
                // Read computer input

                    function choosePaper(condition) {
                    
                        switch (userInput === "paper") {
                            case finalCompChoice === "vs scissors" :
                                console.log("YOU LOSE. Scissors shred paper.");
                                updateComputerScore(true);
                                break;
                            case finalCompChoice === "vs rock" :
                                console.log("YOU WIN! Paper smothers rock.");
                                updateHumanScore(true);
                                break;
                            case finalCompChoice === "vs paper" :
                                console.log("DRAW! Both paper.");
                                scoreIsDraw(true);
                                break;
                            }

                    }

                    function chooseRock(condition) {

                        switch (userInput === "rock") {
                            case finalCompChoice === "vs scissors" : 
                            console.log("YOU WIN! Rock crushes scissors.");
                            updateHumanScore(true);
                            break;

                            case finalCompChoice === "vs paper" : 
                            console.log("YOU LOSE. Paper wraps rock.");
                            updateComputerScore(true);
                            break;

                            case finalCompChoice === "vs rock" : 
                            console.log("DRAW! Both rock.");
                            scoreIsDraw(true);
                            break;
                            }

                    }

                    function chooseScissors(condition) {

                        switch (userInput === "scissors") {
                            case finalCompChoice === "vs rock" :
                                console.log("YOU LOSE. Rock clobbers scissors.");
                                updateComputerScore(true);
                            break;

                            case finalCompChoice === "vs paper" :
                                console.log("YOU WIN! Scissors mince paper.");
                                updateHumanScore(true);
                                break;

                            case finalCompChoice === "vs scissors" :
                                console.log("DRAW! Both scissors.");
                                scoreIsDraw(true);
                                break;      
                                }

                      }
                            userInput === "paper" ? choosePaper(true) :
                            userInput === "rock" ? chooseRock(true) :
                            userInput === "scissors" ? chooseScissors(true) :
                            console.log("No points awarded!");

                    }     
                    
                    function declareWinner() {

                        humanScore > computerScore ? 
                            console.log("YOU WIN! Well done!") :
                            computerScore > humanScore ?
                            console.log("COMPUTER WINS! Better luck next time.") :
                            console.log("DRAW! No winner, no loser.");

                        console.log("FINAL SCORE: " + humanScore + " you, " + computerScore + " computer");
                       
                    }
                    
                 playRound(humanSelection, computerSelection);

                 rePrompt();
        
                 playRound(humanSelection, computerSelection);

                 rePrompt();
        
                 playRound(humanSelection, computerSelection);

                 rePrompt();
        
                 playRound(humanSelection, computerSelection);

                 rePrompt();

                 playRound(humanSelection, computerSelection);

                 declareWinner();

                }
        
           const humanSelection = getHumanChoice();
           const computerSelection = getComputerChoice();

        
        
        playGame();
