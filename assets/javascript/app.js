var triviaQuestions = [];
var highScore = 0;

// Game object
triviaGame = {
    triviaQuestions: [{}],
    score: 0,
    


// Init function to reset the values each game. 
    init: function(){
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
        var bttn = $("<button>");
    }
};
