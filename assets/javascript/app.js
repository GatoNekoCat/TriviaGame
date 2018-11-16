
// Game object
triviaGame = {
    // These are passed in through init
    highScore: 0,
    triviaQuestions: [{}],
    score: 0,
    answer: 0,
    


// Init function to reset the values each game. 
    init: function(){
        // Clear the game board
        $("#play-field").empty();  
        // Set the score and questions back for use in this game
        triviaGame.score = 0;
        triviaGame.triviaQuestions = [
             q1 = {
                 q:"what alias does Jeffery Lebowski use?",
                 pa:["Dude","Walter","Marmot","Jackie Treehorn"],
                 an: "0"
             },
             q2 = {
                 q:"Who peed on the dudes rug?",
                 pa:["Nihilists","Fascists","Woo","Jackie Treehorn"],
                 an: "2"
             },
             q3 = {
                 q:"Which actor played The Stranger?",
                 pa:["Harrison Ford","Sam Davis","Sam Elliot","Nicholas Cage"],
                 an: "2"
             },
             q4 = {
                 q:"What date is written on the check the dude writes to pay for his milk?",
                 pa:["Nov 5th","Sept 11th","Oct 31st","April 20th"],
                 an: "1"
             }
        

        ];
        // Create a button to trigger the start of the game
        var bttn = $("<button>");
        $(bttn).attr('id', 'start-button');
        bttn.text("Click to start the game!");
        $("#play-field").append(bttn);
    },
    // This function chooses a random question from the array in triviaGame.triviaQuestions
    // and then displays the question in a header on the screen, with the possible answers
    // displayed as buttons 
    chooseRandomQuestion: function() {

            // Empty the playfield first
            $("#play-field").empty(); 

        // an initial check to see if there is a question to get. If not, game is over.
        if (triviaGame.triviaQuestions === undefined || triviaGame.triviaQuestions.length == 0) {
            // stop the interval
            clearInterval(guessTime);
            // array empty or does not exist
            var gameOver = $("<h1>");
            gameOver.text("Game Over");
            gameOver.attr('id', "game-over");
            $("#play-field").append(gameOver);
            var scoreText = $("<h2>");
            scoreText.text("Score: " +triviaGame.score);
            $("#play-field").append(scoreText);
            var playAgain = $("<button>");
            playAgain.text("Play again?");
            playAgain.attr("id", "play-again-btn");
            $("#play-field").append(playAgain);
            $("#play-again-btn").on('click', function(){
                triviaGame.init();

            })

        };

        // generates a random question object from the array of question objects. 
        var question = triviaGame.triviaQuestions[Math.floor(Math.random() * triviaGame.triviaQuestions.length)];
        // next I want the index location of the questioon
        var x = triviaGame.triviaQuestions.indexOf(question);
        // then I remove the question from the list of questions, keeping the game from going on forever over the same questions.
        triviaGame.triviaQuestions.splice(x, 1);
        // create a header to display the question
        var questionHeader = $("<h1>");
        $(questionHeader).attr('id', "askQuestion");
        questionHeader.text(question.q);
        $("#play-field").append(questionHeader);

        // create a button for each possible answer to the question
        for (var i = 0; i < question.pa.length;i++){
            // our jquery element
            var a = $("<button>");
            // add class of "question-button" to a
            a.addClass("question-button");
            // adding an id using the index, will use this to check the answer
            a.attr('id', i);
            a.text(question.pa[i])
            // add the button to the play-field
            $("#play-field").append(a);

        }
        // store the answer number in the object
       triviaGame.answer = question.an;
    //  listen for the button click
    $(".question-button").on('click',function(){
        console.log(this.id);
        console.log(triviaGame.answer);
        // checks button id against the answer. If the right button is chosen the score is increased. If not, nothing happens and
        // it will call chooseRandomQuestion either way.
        if (this.id === triviaGame.answer){
            triviaGame.score++;
            triviaGame.chooseRandomQuestion();
        };
        triviaGame.chooseRandomQuestion();
        });
        
    }

// end of triviaGame 
};
var guessTime;

$( document ).ready(function() {

// When the page is ready, initialize
triviaGame.init();
$("#start-button").on('click', function() {
        // Empty the play field, and call the chooseRandomQuestion to display the questions
       triviaGame.chooseRandomQuestion();
    //    This is where the time for each question goes ***
    clearInterval(guessTime);
    guessTime = setInterval(triviaGame.chooseRandomQuestion, 3000);

        });
   
        
 });




