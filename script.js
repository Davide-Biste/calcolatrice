var result = document.getElementById("risultato");

var calcoli = 0;
var operatori = "+";

function add(n){
        calcoli = n;
        risultato();
}
function btnClick(){
    risultato.innerHTML = calcoli;
    calcoli = 0;
}

function operator(){

}

function per(x){
    x = "*";
    return x;
}

function risultato(){
    result.innerHTML = calcoli + operatori + calcoli;
}