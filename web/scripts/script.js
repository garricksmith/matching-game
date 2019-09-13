var set1 = ['set1','apple.png','grape.jpg','lemon.jpg','mango.jpg','melon.png','orange.jpg','pasta.jpg','peach.jpg','pineapple.jpg','watermelon.jpg'];
var set2 = ['set2','bison.jpg','cat.jpg','cow.jpg','dog.jpeg','elephant.jpg','fish.jpg','llama.jpg','opossum.jpg','pig.jpg','rabbit.jpg'];

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
            "<td class=\"seed"+seeds[i]+"\">"+
                "<img src=\"images/"+setn[0]+"/"+setn[seeds[i]]+"\">"+
            "</td>";
    }
    newBoard = newBoard + "</tr>";         
     
    board.innerHTML = newBoard;
}

function initBoard() {
    return null;
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
