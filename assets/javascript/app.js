
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
    // This function chooses a random question from the array in triviaGame.triviaQuestions
    // and then displays the question in a header on the screen, with the possible answers
    // displayed as buttons 
    chooseRandomQuestion: function() {

        // generates a random question object from the array of question objects. 
        question = triviaGame.triviaQuestions[Math.floor(Math.random() * triviaGame.triviaQuestions.length)];
        
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
        
    }

    
};

$( document ).ready(function() {

// When the page is ready, initialize
triviaGame.init();
$("#start-button").on('click', function() {
        // Empty the play field, and call the chooseRandomQuestion to display the questions
        $("#play-field").empty(); 
       triviaGame.chooseRandomQuestion();
        if (triviaGame.triviaQuestions >= 1){
            setInterval(chooseRandomQuestion, 30000);

        } 



});
});


