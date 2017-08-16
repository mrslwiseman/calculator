let a = "0"
,   b = ""
,   log = ""
,   selOp = "";

const digits = document.querySelectorAll('button.digit')
const operatorBtns = document.querySelectorAll('button.operator')
const equals = document.querySelector('button[value="="]')
const clear = document.querySelector('button[value="clear"]')
const displayResult = document.querySelector('div#result')
const displayLog = document.querySelector('div#log')

let reset = () => {
  a = "0";
  b = "";
  log = "";
  selOp = "";
  display();
};
// ====================================================================================

let calculate = (op) => {


  a = (a == "0") ? b : (Math.round((ops[selOp](parseFloat(a),parseFloat(b)))*100)/100).toString()
  b = "";
  log += op
  selOp = op;
  if(a.length > 8){
    a = "Error"
    log = "Digit Limit Met"
    setTimeout(reset, 1500)
  }
  display();
  if(op == "="){
    log = a;
  }

}

// ====================================================================================
const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
    "%": (a, b) => a/100 * b,
    "=": (a, b) => a
  };

let display = () => {

    displayResult.innerHTML = (b == "") ? a : b;
    displayLog.innerHTML = log;


}


let updateValues = (value) => {
  if(value == "." && b.includes(".")){
    return;
  } else {
    if(b.length >= 8){
      console.log('b reset')
      display()
      return
    }
    b += value
    log += value
    display();
  }
}

let changeOperator = () => {

}

// ADD EVENT LISTENERS
// digit input
digits.forEach(btn => {
  btn.addEventListener('click', (e) => {
    updateValues(e.srcElement.value)
  } )
})

// clear button
clear.addEventListener('click', reset)

// operator buttons
operatorBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    calculate(e.srcElement.value);
  })
})
