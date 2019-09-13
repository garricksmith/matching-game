var set1 = ['set1','apple.png','grape.jpg','lemon.jpg','mango.jpg','melon.png','orange.jpg','pasta.jpg','peach.jpg','pineapple.jpg','watermelon.jpg'];
var set2 = ['set2','bison.jpg','cat.jpg','cow.jpg','dog.jpeg','elephant.jpg','fish.jpg','llama.jpg','opossum.jpg','pig.jpg','rabbit.jpg'];

function setBoard(setn) {
    var seeds = genSeeds();
    var board = document.getElementById("board");
    var newBoard = "<tr>"+
                   "<td class=\"seed"+seeds[0]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[0]]+"\"></td>"+
                   "<td class=\"seed"+seeds[1]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[1]]+"\"></td>"+
                   "<td class=\"seed"+seeds[2]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[2]]+"\"></td>"+
                   "<td class=\"seed"+seeds[3]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[3]]+"\"></td>"+
                   "<td class=\"seed"+seeds[4]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[4]]+"\"></td>"+
               "</tr>"+
               "<tr>"+
                   "<td class=\"seed"+seeds[5]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[5]]+"\"></td>"+
                   "<td class=\"seed"+seeds[6]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[6]]+"\"></td>"+
                   "<td class=\"seed"+seeds[7]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[7]]+"\"></td>"+
                   "<td class=\"seed"+seeds[8]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[8]]+"\"></td>"+
                   "<td class=\"seed"+seeds[9]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[9]]+"\"></td>"+
               "</tr>"+
               "<tr>"+
                   "<td class=\"seed"+seeds[10]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[10]]+"\"></td>"+
                   "<td class=\"seed"+seeds[11]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[11]]+"\"></td>"+
                   "<td class=\"seed"+seeds[12]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[12]]+"\"></td>"+
                   "<td class=\"seed"+seeds[13]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[13]]+"\"></td>"+
                   "<td class=\"seed"+seeds[14]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[14]]+"\"></td>"+
               "</tr>"+
               "<tr>"+
                   "<td class=\"seed"+seeds[15]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[15]]+"\"></td>"+
                   "<td class=\"seed"+seeds[16]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[16]]+"\"></td>"+
                   "<td class=\"seed"+seeds[17]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[17]]+"\"></td>"+
                   "<td class=\"seed"+seeds[18]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[18]]+"\"></td>"+
                   "<td class=\"seed"+seeds[19]+"\"><img src=\"images/"+setn[0]+"/"+setn[seeds[19]]+"\"></td>"+
               "</tr>";
    board.innerHTML = newBoard;
}

function initBoard() {
    return null;
}

function genSeeds() {
    var seeds = [11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                 11, 11, 11, 11, 11, 11, 11, 11, 11, 11];
    var i;
    for(i=0; i<20; i++) {
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
