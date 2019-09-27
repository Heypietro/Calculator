const container = document.querySelector(".container");
container.addEventListener("click", getElementClicked);
const resultOper = [];
const label = document.querySelector("#numbers");
let history = document.querySelector("#history");

function getElementClicked(e){
  const value =e.target.innerText;
  const nameClass = e.target.className;
  if(!nameClass.includes("special")){
    writeOper(value);
  }else{
    if(label.innerText.length > 0){
      doSpecial(value);
    }
  }
}

function writeOper(n){
  if(label.innerText.length == 0 & !isNumber(n) ){}else{
    label.innerText += n;
  }
}

function isNumber(val){
  return !isNaN(parseInt(val));
}

function doSpecial(op){
  switch (op){
     case "=" :
       let result = doOperation();
       printResult(result)
       break;
     case "《" :
       deleteLastChar();
       break;
     case "C" :
       label.innerText = "";
       break;
     default :
       console.log("no case");
  }
}

function doOperation(){
  let partOne="";
  let partTwo="";
  let operator="";
  let found = 0;
  const operArray = Array.from(label.innerText);
  operArray.forEach(element => {
    
    //console.log(element);
    if (isNumber(element) && found ===0){
       partOne = partOne + element;
       //console.log("1  "+partOne);
    }else{
      if(operator === "" && found ===0){
        found = 1;
        operator = element ;
        //console.log("oper "+operator);
      }else{
        partTwo = partTwo + element;
      }
    }
    
  });
  
  
  //console.log("part one "+partOne);
  //console.log("part two "+partTwo);
   return getResult(parseInt(partOne), parseInt(partTwo), operator);
}

function getResult(partOne, partTwo, operator){
  switch (operator){
    case "+" : 
      return partOne + partTwo;
    case "－" :
      return partOne - partTwo;
    case "×" :
      return partOne * partTwo;
    case "÷" :
      return partOne / partTwo;
  }
}

function printResult(result){
 history.innerHTML += 
 `<li> ${label.innerText} </li>`;
 cleanLabel();
 label.innerText = result;
}

function cleanLabel(){
  label.innerText = "";
}

function deleteLastChar(){
  label.innerText = label.innerText.slice(0,-1)
}

  