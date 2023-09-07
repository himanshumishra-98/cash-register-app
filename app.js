let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let errorMessage = document.querySelector("error-message");
let buttonCheck = document.querySelector("#button-check");

let notes = [500,200,100,50,20,10,5,2,1]

let amountToBeReturn = cashGiven.value - billAmount.value;

function showNotes() {
    if(amountToBeReturn<=0)
}

function errMesgBill() {
    return "Invalid Bill Amount"
}

function errMesgCash() {
    return "Invalid Cash Amount"
}

buttonCheck.addEventListener("click",showNotes);
