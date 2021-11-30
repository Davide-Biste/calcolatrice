var result = document.getElementById("risultato");

var calcoli1 = "null";
var calcoli2 = "null";
var operator1 = "null";



function add(n){
    if(calcoli1 === "null" && operator1 === "null"){
        calcoli1 = n.toString();
        result.innerHTML=calcoli1;
    
    }else{
        calcoli1 = calcoli1 + n.toString();
        result.innerHTML=calcoli1;
    }
        
}



function btnClick(){
    risultato.innerHTML = calcoli1;
    calcoli1 = 0;
}

function operator(p){
    operator1 = p.toString();
    result.innerHTML = calcoli1 + " " + p;
}