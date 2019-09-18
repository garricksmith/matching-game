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
    
    if(firstGuessId != id) {
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
                card.setAttribute("onclick", "");
                failed = false;
            } else {
                incorrectMatches++;
                card.innerHTML = "<img src=\"images/"+setn[0]+"/"+setn[seed]+"\">";
                failed = true;
            }
        }
        
        if(totalAttemptedMatches == 1) {
            startTimer(120);
        }
        
        if(correctMatches == 10) {
            alert("Congratulations! You Won! \nView Your Results Below");
            var stats = document.getElementById("stats");
            stats.innerHTML = "<h3>Correct Matches = "+correctMatches+"</h3>"+
                              "<h3>Incorrect Matches = "+incorrectMatches+"</h3>"+
                              "<h3>Total Attempted Matches = "+totalAttemptedMatches+"</h3>";
        }
    }
}

function setBoard(setn) {
    totalAttemptedMatches = 0;
    correctMatches = 0;
    incorrectMatches = 0;
    cardFlipped = false;
    
    var seeds = genSeeds();
    var board = document.getElementById("board");
    var stats = document.getElementById("stats");
    var newBoard = "<tr>";
    
    var i;
    for(i=0; i<=19; i++){
        if(i % 5 == 0 && i != 0) {
            newBoard = newBoard + "</tr><tr>";
        }
        if(setn == set1){
            newBoard = newBoard + 
                "<td id=\""+i+"\" onclick=flip(\""+setn[seeds[i]]+"\","+seeds[i]+","+i+",set1)>"+
                    "<img src=\"images/default.png\">"+
                "</td>";
        } else if(setn == set2){
            newBoard = newBoard + 
                "<td id=\""+i+"\" onclick=flip(\""+setn[seeds[i]]+"\","+seeds[i]+","+i+",set2)>"+
                    "<img src=\"images/default.png\">"+
                "</td>";
        }
    }
    newBoard = newBoard + "</tr>";         
     
    board.innerHTML = newBoard;
    stats.innerHTML = "<h3>Results Will Be Shown Here After The Game</h3>";
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

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var stats = document.getElementById("stats");
    
    setInterval(function() {
        minutes = parseInt(timer / 60,10);
        seconds = parseInt(timer % 60,10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;  
        
        if(--timer < 0) {
        timer = 600;
        alert("Time's Up! Stop playing and look at results");
        stats.innerHTML = "<h3>Correct Matches = "+correctMatches+"</h3>"+
                          "<h3>Incorrect Matches = "+incorrectMatches+"</h3>"+
                          "<h3>Total Attempted Matches = "+totalAttemptedMatches+"</h3>";
        }     
    }, 1000);
     
}
