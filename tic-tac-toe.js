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
    }else if(whoseTurn ==="Y" || whoseTurn ==="X" && boxClicked.textContent === board.textContent){
        drawMessage.textContent = "IT'S A DRAW!"
    }  
})

//function boardReset() {
  //function to reset?


        
       
    //     if (div2.className === "red-background" && div3.className === "red-background" ){
    //         div1.classList.remove("red-background")
    //         div1.classList.add("green-background")
    //         div2.classList.remove("red-background")
    //         div2.classList.add("green-background")
    //         div3.classList.remove("red-background")
    //         div3.classList.add("green-background")
    //     }else if(div5.className === "red-background" && div7.className === "red-background"){
    //         div1.classList.remove("red-background")
    //         div1.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //     }else if(div4.className === "red-background" && div7.className === "red-background")
    //         div1.classList.remove("red-background")
    //         div1.classList.add("green-background")
    //         div4.classList.remove("red-background")
    //         div4.classList.add("green-background")
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //     //dom object turns into red
    // }) //repeat with div2 div 3

    // var div2 = document.querySelector("#div2");
   
    // div2.addEventListener("click", function() {
    //     // div.style.backgroundColor = "red";
    //     div2.className="red-background";
        
    //     if (div1.className === "red-background" && div3.className === "red-background"){
    //         div2.classList.remove("red-background")
    //         div2.classList.add("green-background")
    //         div1.classList.remove("red-background")
    //         div1.classList.add("green-background")
    //         div3.classList.remove("red-background")
    //         div3.classList.add("green-background")
    //     }else if(div5.className === "red-background" && div8.className === "red-background"){
    //         div2.classList.remove("red-background")
    //         div2.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div8.classList.remove("red-background")
    //         div8.classList.add("green-background")
    //     }
    // }) 

    // var div3 = document.querySelector("#div3");
   
    // div3.addEventListener("click", function() {
    //     div3.className="red-background";
    //     if (div1.className === "red-background" && div2.className === "red-background"){
    //         div3.classList.remove("red-background")
    //         div3.classList.add("green-background")
    //         div1.classList.remove("red-background")
    //         div1.classList.add("green-background")
    //         div2.classList.remove("red-background")
    //         div2.classList.add("green-background")
            
    //     }else if(div5.className === "red-background" && div7.className === "red-background"){
    //         div3.classList.remove("red-background")
    //         div3.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //     }else if(div9.className === "red-background" && div6.className ==="red-background"){
    //         div3.classList.remove("red-background")
    //         div3.classList.add("green-background")
    //         div9.classList.remove("red-background")
    //         div9.classList.add("green-background")
    //         div6.classList.remove("red-background")
    //         div6.classList.add("green-background")
    //     }
    // }) 

    // var div4 = document.querySelector("#div4");
    // div4.addEventListener("click", function() {
        
    //     div4.className ="red-background";
        
    //     if (div5.className === "red-background" && div6.className === "red-background" ){
    //         div4.classList.remove("red-background")
    //         div4.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div6.classList.remove("red-background")
    //         div6.classList.add("green-background")
    //     }else if(div1.className === "red-background" && div7.className === "red-background"){
    //         div4.classList.remove("red-background")
    //         div4.classList.add("green-background")
    //         div1.classList.remove("red-background")
    //         div1.classList.add("green-background")
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //     }

    //     //dom object turns into red
    // }) //repeat with div2 div 3

    // var div5 = document.querySelector("#div5");
   
    // div5.addEventListener("click", function() {
    //     // div.style.backgroundColor = "red";
    //     div5.className="red-background";
        
    //     if (div4.className === "red-background" && div6.className === "red-background"){
    //         div4.classList.remove("red-background")
    //         div4.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div6.classList.remove("red-background")
    //         div6.classList.add("green-background")
    //     }else if(div2.className === "red-background" && div8.className === "red-background"){
    //         div2.classList.remove("red-background")
    //         div2.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div8.classList.remove("red-background")
    //         div8.classList.add("green-background")
    //     }else if(div1.className === "red-background" && div9.className === "red-background"){
    //         div1.classList.remove("red-background")
    //         div1.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div9.classList.remove("red-background")
    //         div9.classList.add("green-background")
    //     }else if(div3.className === "red-background" && div7.className === "red-background"){
    //         div3.classList.remove("red-background")
    //         div3.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //     }
    // }) 

    // var div6 = document.querySelector("#div6");
   
    // div6.addEventListener("click", function() {
    //     // div.style.backgroundColor = "red";
    //     div6.className="red-background";
    //     if (div4.className === "red-background" && div5.className === "red-background"){
    //         div4.classList.remove("red-background")
    //         div4.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div6.classList.remove("red-background")
    //         div6.classList.add("green-background")
    //     }else if(div3.className === "red-background" && div9.className === "red-background"){
    //         div3.classList.remove("red-background")
    //         div3.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div9.classList.remove("red-background")
    //         div9.classList.add("green-background")
    //     }
        
    
    // }) 

    // div7.addEventListener("click", function() {
    //     // div.style.backgroundColor = "red";
    //     div7.className="red-background";
    //     if (div8.className === "red-background" && div9.className === "red-background"){
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //         div8.classList.remove("red-background")
    //         div8.classList.add("green-background")
    //         div9.classList.remove("red-background")
    //         div9.classList.add("green-background")
    //     }else if(div5.className === "red-background" && div3.className === "red-background"){
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div3.classList.remove("red-background")
    //         div3.classList.add("green-background")
    //     }else if(div4.className === "red-background" && div1.className === "red-background"){
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //         div4.classList.remove("red-background")
    //         div4.classList.add("green-background")
    //         div1.classList.remove("red-background")
    //         div1.classList.add("green-background")
    //     }
    // }) 

    // div8.addEventListener("click", function() {
    //     // div.style.backgroundColor = "red";
    //     div8.className="red-background";
    //     if (div7.className === "red-background" && div9.className === "red-background"){
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //         div8.classList.remove("red-background")
    //         div8.classList.add("green-background")
    //         div9.classList.remove("red-background")
    //         div9.classList.add("green-background")
    //     }else if(div2.className === "red-background" && div5.className === "red-background"){
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div2.classList.remove("red-background")
    //         div2.classList.add("green-background")
    //     }
    // }) 

    // div9.addEventListener("click", function() {
    //     // div.style.backgroundColor = "red";
    //     div9.className="red-background";
    //     if (div7.className === "red-background" && div8.className === "red-background"){
    //         div7.classList.remove("red-background")
    //         div7.classList.add("green-background")
    //         div8.classList.remove("red-background")
    //         div8.classList.add("green-background")
    //         div9.classList.remove("red-background")
    //         div9.classList.add("green-background")
    //     }else if(div1.className === "red-background" && div5.className === "red-background"){
    //         div9.classList.remove("red-background")
    //         div9.classList.add("green-background")
    //         div5.classList.remove("red-background")
    //         div5.classList.add("green-background")
    //         div1.classList.remove("red-background")
    //         div1.classList.add("green-background")
    //     }else if(div3.className === "red-background" && div6.className === "red-background"){
    //         div3.classList.remove("red-background")
    //         div3.classList.add("green-background")
    //         div6.classList.remove("red-background")
    //         div6.classList.add("green-background")
    //         div9.classList.remove("red-background")
    //         div9.classList.add("green-background")
    //     }
    // }) 