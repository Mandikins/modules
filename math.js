function add(x,y){
    console.log(`${x} + ${y}=${x+y}`);
}
function subtract(x,y){
    console.log(`${x} - ${y}=${x-y}`);
}
function multiply(x,y){
    console.log(`${x} * ${y}=${x*y}`);
}
function divide(x,y){
    console.log(`${x} / ${y}=${x/y}`);
}


module.exports={add, subtract, multiply, divide};