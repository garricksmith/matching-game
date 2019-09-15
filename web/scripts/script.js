var set1 = ['set1','apple.png','grape.jpg','lemon.jpg','mango.jpg','melon.png','orange.jpg','pasta.jpg','peach.jpg','pineapple.jpg','watermelon.jpg'];
var set2 = ['set2','bison.jpg','cat.jpg','cow.jpg','dog.jpeg','elephant.jpg','fish.jpg','llama.jpg','opossum.jpg','pig.jpg','rabbit.jpg'];

var cardFlipped = false;
var failed = false;
var firstGuessId;
var firstGuessImage;
var secondGuessId;

var totalAttemptedMatches=0;
var correctMatches=0;
var incorrectMatches=0;

function flip(image, seed, id, setn) {
    var card = document.getElementById(id);
    
    if(failed == true){
        var firstGuess = document.getElementById(firstGuessId);
        var secondGuess = document.getElementById(secondGuessId);
        firstGuess.innerHTML = "<img src=\"images/default.png\">";
        secondGuess.innerHTML = "<img src=\"images/default.png\">";
        failed = false;
    }
    
    if(cardFlipped == false) {
        cardFlipped = true;
        firstGuessId = id;
        firstGuessImage = image;
        card.innerHTML = "<img src=\"images/"+setn[0]+"/"+setn[seed]+"\">";
    } else {
        totalAttemptedMatches++;
        cardFlipped = false;
        secondGuessId = id;
        if(firstGuessImage == image) {
            correctMatches++;
            card.innerHTML = "<img src=\"images/"+setn[0]+"/"+setn[seed]+"\">";
            failed = false;
        } else {
            incorrectMatches++;
            card.innerHTML = "<img src=\"images/"+setn[0]+"/"+setn[seed]+"\">";
            failed = true;
        }
    }
    
    if(correctMatches == 10) {
        var stats = document.getElementById("stats");
        stats.innerHTML = "<h3>Correct Matches = "+correctMatches+"</h3>"+
                          "<h3>Incorrect Matches = "+incorrectMatches+"</h3>"+
                          "<h3>Total Attempted Matches = "+totalAttemptedMatches+"</h3>";
    }
}

function setBoard(setn) {
    var seeds = genSeeds();
    var board = document.getElementById("board");
    var newBoard = "<tr>";
    
    var i;
    for(i=0; i<=19; i++){
        if(i % 5 == 0 && i != 0) {
            newBoard = newBoard + "</tr><tr>";
        }
        newBoard = newBoard + 
            "<td id=\""+i+"\" onclick=flip(\""+setn[seeds[i]]+"\","+seeds[i]+","+i+",set1)>"+
                "<img src=\"images/default.png\">"+
            "</td>";
    }
    newBoard = newBoard + "</tr>";         
     
    board.innerHTML = newBoard;
}

function genSeeds() {
    var seeds = [11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                 11, 11, 11, 11, 11, 11, 11, 11, 11, 11];
    var i;
    for(i=0; i<=19; i++) {
        var count;
        var n;
        do {
            count = 0;
            n = Math.floor(Math.random() * 10) + 1;
            var j;
            for(j=0; j<19; j++) {
                if(n == seeds[j]){
                    count = count + 1;
                }
            }
        } while(count == 2);
        seeds[i] = n;
    }
    
    return seeds;
}
