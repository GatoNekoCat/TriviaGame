
// Game object
triviaGame = {
    // These are passed in through init
    highScore: 0,
    triviaQuestions: [{}],
    score: 0,
    


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
                 an: 0
             },
             q2 = {
                 q:"Who peed on the dudes rug?",
                 pa:["Nihilists","Fascists","Woo","Jackie Treehorn"],
                 an: 2
             },
        

        ];
        // Create a button to trigger the start of the game
        var bttn = $("<button>");
        $(bttn).attr('id', 'start-button');
        bttn.text("Click to start the game!")
        $("#play-field").append(bttn);
    },
    chooseRandomQuestion: function() {
        // generates a random question object from the array of question objects. 
        question = triviaGame.triviaQuestions[Math.floor(Math.random() * triviaGame.triviaQuestions.length)];
        // create a header to display the question
        var questionHeader = $("<h1>");
        $(questionHeader).attr('id', "askQuestion");
        questionHeader.text(question.q);
        $("#play-field").append(questionHeader);
        
    }

    
};

$( document ).ready(function() {

// When the page is ready, initialize
triviaGame.init();
$("#start-button").on('click', function() {
        // Empty the play field, and call the chooseRandomQuestion to display the questions
        $("#play-field").empty(); 
        chooseRandomQuestion();
        if (triviaGame.triviaQuestions >= 1){
            setInterval(chooseRandomQuestion, 30000);

        } 



});
});


