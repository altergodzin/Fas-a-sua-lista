var NamesOfPepole = [];
function submit() {
    var guestName = document.getElementById("nome1").value;
    NamesOfPepole.push(guestName);
    console.log(guestName)
    console.log(NamesOfPepole)
    document.getElementById("displayName").innerHTML = NamesOfPepole.toString();
}
function sorting() {
    NamesOfPepole.sort();
    var i = NamesOfPepole.join("<br>")
    console.log(NamesOfPepole);
    document.getElementById("sorted").innerHTML = i.toString();
}
function show() {

    var i = NamesOfPepole.join("<br>")
    console.log(NamesOfPepole);
    document.getElementById("p1").innerHTML = i.toString();
    document.getElementById("sortButton").style.display = "block";
    
} 
function searching() {
    var s =document.getElementById("s1").value;
    var fund = 0;
    var j;
    for ( j= 0; j < NamesOfPepole.length; j++) {
            if (s == NamesOfPepole[j]) {
                fund = fund + 1;
            }
        
    }
    document.getElementById("p2").innerHTML = "nome encontrado " + fund + " vez(es) ";
} 