document.getElementById("set1").addEventListener("click", setTable1());
document.getElementById("set2").addEventListener("click", setTable2());

var board = document.getElementById("board");
var set1 = [];
var set2 = [];

def setBoard1() {
    var seeds = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var i;
    for(i=0; i<19; i++) {
        seeds[i] = Math.floor(Math.random() * 10);`
    }
    
    var board1 = "<tr>"+
                   "<td id="+seeds[1]+"></td>"+
                   "<td id="+seeds[2]+"></td>"+
                   "<td></td>"+
                   "<td></td>"+
                   "<td></td>"+
               "</tr>"+
               "<tr>"+
                   "<td></td>"+
                   "<td></td>"+
                   "<td></td>"+
                   "<td></td>"+
                   "<td></td>"+
               "</tr>"+
               "<tr>"+
                   "<td></td>"+
                   "<td></td>"+
                   "<td></td>"+
                   "<td></td>"+
                   "<td></td>"+
               "</tr>"+
               "<tr>"+
                   "<td></td>"+
                   "<td></td>"+
                   "<td></td>"+
                   "<td></td>"+
                   "<td></td>"+
               "</tr>";
}

def setBoard2() {
    
}
