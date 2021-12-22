let outputScreen = document.getElementById("output-screen");

function display(num){
    outputScreen.value +=num;
}

function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err){
       
        outputScreen.value="Invalid";
    }
}

function Clear(){
    outputScreen.value="";
}

function delet(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}

function Square(){
    outputScreen.value=outputScreen.value*outputScreen.value;
}


function SquareRoot(){
    outputScreen.value=Math.sqrt(outputScreen.value);
}

function sin(){
    outputScreen.value=Math.sin(outputScreen.value);
}

function cos(){
    outputScreen.value=Math.cos(outputScreen.value);
}
 
function tan(){
    outputScreen.value=Math.tan(outputScreen.value);
}