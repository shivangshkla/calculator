let result;
let resultFirst;
const screen = document.querySelector('.display')
function add(a,b){
    return(a+b);
}
function prod(a,b){
    return(a*b);
}
function div(a,b){
   return((a/b).toFixed(2));
}
function sub(a,b){
    return(a-b);
}
let input = new Object();
input = {
    firstDig : "",
    secondDig : "",
    operator : "",
}
function takeInput(a){
    if(input["operator"] == "" && a.id != "*" && a.id != "/" && a.id != "-" && a.id != "+")
    {
    input["firstDig"] += a.id;
    displayExp(a.id);
    console.log(input["firstDig"]);
    }
    else if(input["firstDig"] != "" && input["operator"] == "" && input["secondDig"] == "" && (a.id == "*" || a.id == "/" || a.id == "-" ||a.id == "+"))
    {
        input["operator"] = a.id;
        displayExp(a.id);
        console.log(input["operator"]);
    }
    else if(input["firstDig"] != "" && input["operator"] != "" && a.id != "*" && a.id != "/" && a.id != "-" && a.id != "+")
    {
        input["secondDig"] += a.id;
        displayExp(a.id);
        console.log(input["secondDig"]);
    }
    else if(input["firstDig"] == "" && input["secondDig"] == "" && (a.id == "*" || a.id == "/" || a.id == "-" ||a.id == "+" )){
        alert("Enter a number first");
        input["operator"] = "";
    }
    else if(input["firstDig"] != "" && input["secondDig"] != "" && input["operator"] != "" ){
        if (a.id == "*" || a.id == "/" || a.id == "-" ||a.id == "+" ){
       operationFirst();
       input["operator"] = a.id;
       displayExp(a.id);
        }
    }
    }

    function operationFirst(){
        if(input["operator"] == "+"){
            resultFirst =  add(Number(input["firstDig"]),Number(input["secondDig"]));
         }
         if(input["operator"] == "-"){
             resultFirst =  sub(Number(input["firstDig"]),Number(input["secondDig"]));
         }
         if(input["operator"] == "*"){
             resultFirst =   prod(Number(input["firstDig"]),Number(input["secondDig"]));
         }
         if(input["operator"] == "/"){
             resultFirst =   div(Number(input["firstDig"]),Number(input["secondDig"]));
         }
         console.log(resultFirst);
        input["firstDig"] = resultFirst;
        input["secondDig"] = "";
        
    }
function operation(){
    result = 0;
    if(input["operator"] == "+"){
       result =  add(Number(input["firstDig"]),Number(input["secondDig"]));
    }
    if(input["operator"] == "-"){
        result =  sub(Number(input["firstDig"]),Number(input["secondDig"]));
    }
    if(input["operator"] == "*"){
        result =   prod(Number(input["firstDig"]),Number(input["secondDig"]));
    }
    if(input["operator"] == "/"){
        result =   div(Number(input["firstDig"]),Number(input["secondDig"]));
    }
    if(input["operator"] == "/" && input["secondDig"] == "0" ){
        alert("You cannot divide a number by ZERO");
    }
    if(input['operator'] == ""){
        result = input["firstDig"];
    }
    console.log(result);
    input["firstDig"] = "";
    input["secondDig"] = "";
    input["operator"] = "";
    displayRes();
    dispExpression.innerHTML = "";
}
const clean = document.querySelector(".clear");
clean.onclick =function (){
    dispResult.innerHTML = "";
    dispExpression.innerHTML = "";
    input["firstDig"] = "";
    input["secondDig"] = "";
    input["operator"] = "";
    result = 0;
};
const dispResult = document.querySelector('.result')
const dispExpression = document.querySelector('.expression')
function displayExp(a){
    dispExpression.innerHTML += a;
}
function displayRes(){
    dispResult.innerHTML = result;
}
function back(){
    if(input["firstDig"] != "" && input["secondDig"] == "" && input["operator"] == ""){
        dispExpression.innerHTML = input["firstDig"].slice(0,input["firstDig"].length-1);
        displayExp("");
        input["firstDig"] = input["firstDig"].slice(0,input["firstDig"].length-1);
   }
    else if(input["firstDig"] != "" && input["secondDig"] != "" && input["operator"] != ""){
        dispExpression.innerHTML = dispExpression.innerHTML.slice(0,dispExpression.innerHTML.length -1);
        displayExp("");
        input["secondDig"] = "";
    }
    else if(input["firstDig"] != "" && input["secondDig"] == "" && input["operator"] != ""){
        dispExpression.innerHTML = dispExpression.innerHTML.slice(0,dispExpression.innerHTML.length -1);
        displayExp("");
        input["operator"] = "";
       } 
}

   

