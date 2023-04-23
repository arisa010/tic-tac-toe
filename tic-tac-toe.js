var divs = document.querySelector(".board")//because it has a class so dont use selectorall?
var div1 = document.querySelector("#div1");
var div2 = document.querySelector("#div2");
var div3 = document.querySelector("#div3");
var div4 = document.querySelector("#div4");
var div5 = document.querySelector("#div5");
var div6 = document.querySelector("#div6");
var div7 = document.querySelector("#div7");
var div8 = document.querySelector("#div8");
var div9 = document.querySelector("#div9");
var whoseTurn = 'X'
// var whoseTurn = ""
// var player1 = "X";
// var player2 = "Y";

var winMessage = document.querySelector(".win-message");
var drawMessage = document.querySelector(".draw-message");

divs.addEventListener("click", function(event){

    var boxClicked = event.target;
 
    if(boxClicked.textContent == '' && whoseTurn == 'X'){
        boxClicked.textContent = "x";
        whoseTurn = 'Y'
//
        //nested if else statement
        console.log(boxClicked.textContent)
        if (boxClicked.textContent === div1.textContent && boxClicked.textContent === div2.textContent && boxClicked.textContent === div3.textContent){
           
            
            winMessage.textContent = "X WINS!"
          // divs.reset();
            
        }else if(boxClicked.textContent === div1.textContent && boxClicked.textContent === div5.textContent && boxClicked.textContent === div9.textContent){
            winMessage.textContent = "X WINS!"
        }else if(boxClicked.textContent === div1.textContent && boxClicked.textContent === div4.textContent && boxClicked.textContent === div7.textContent){
            winMessage.textContent = "X WINS!"
        }else if(boxClicked.textContent === div2.textContent && boxClicked.textContent === div5.textContent && boxClicked.textContent === div8.textContent){
            winMessage.textContent = "X WINS!"
            
        }else if(boxClicked.textContent === div3.textContent && boxClicked.textContent === div6.textContent && boxClicked.textContent === div9.textContent){
            winMessage.textContent = "X WINS!"
        }else if(boxClicked.textContent === div4.textContent && boxClicked.textContent === div5.textContent && boxClicked.textContent === div6.textContent){
            winMessage.textContent = "X WINS!"
        }else if(boxClicked.textContent === div7.textContent && boxClicked.textContent === div8.textContent && boxClicked.textContent === div9.textContent){
            winMessage.textContent = "X WINS!"
        }else if(boxClicked.textContent === div3.textContent && boxClicked.textContent === div5.textContent && boxClicked.textContent === div7.textContent){
            winMessage.textContent = "X WINS!"
        }
    }else if(boxClicked.textContent == "" && whoseTurn !="X"){ 
        boxClicked.textContent = "o";
        whoseTurn = 'X'
       //nested if else statement checking conditionds for wins
       if (boxClicked.textContent === div1.textContent && boxClicked.textContent === div2.textContent && boxClicked.textContent === div3.textContent){
           
            
        winMessage.textContent = "O WINS!"
       
        
         }else if(boxClicked.textContent === div1.textContent && boxClicked.textContent === div5.textContent && boxClicked.textContent === div9.textContent){
        winMessage.textContent = "O WINS!"
        }else if(boxClicked.textContent === div1.textContent && boxClicked.textContent === div4.textContent && boxClicked.textContent === div7.textContent){
        winMessage.textContent = "O WINS!"
        }else if(boxClicked.textContent === div2.textContent && boxClicked.textContent === div5.textContent && boxClicked.textContent === div8.textContent){
        winMessage.textContent = "O WINS!"
        }else if(boxClicked.textContent === div3.textContent && boxClicked.textContent === div6.textContent && boxClicked.textContent === div9.textContent){
        winMessage.textContent = "O WINS!"
        }else if(boxClicked.textContent === div4.textContent && boxClicked.textContent === div5.textContent && boxClicked.textContent === div6.textContent){
        winMessage.textContent = "O WINS!"
        }else if(boxClicked.textContent === div7.textContent && boxClicked.textContent === div8.textContent && boxClicked.textContent === div9.textContent){
        winMessage.textContent = "O WINS!"
        }else if(boxClicked.textContent === div3.textContent && boxClicked.textContent === div5.textContent && boxClicked.textContent === div7.textContent){
        winMessage.textContent = "O WINS!"
        }
    }else if(whoseTurn ==="Y" || whoseTurn ==="X" || boxClicked.textContent === board.textContent){
        drawMessage.textContent = "IT'S A DRAW!"
    }  
})