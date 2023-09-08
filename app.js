let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let errorMessage = document.querySelector("error-message");
let buttonCheck = document.querySelector("#button-check");

let notes = [500,200,100,50,20,10,5,2,1]

function showNotes() {
    hideMessage();
    if(billAmount>0){
        if(cashGiven.value >= billAmount.value){
            let amountToBeReturn = cashGiven.value - billAmount.value;
            calculateNotes(amountToBeReturn);
        }else{
            showMessage("Bhai yaar kya kar raha h tu, matlab majak hai kya.");
        }
    }else{
        showMessage("Invalid Bill AMount");
    }
}

showMessage(msg){
    errorMessage.style.display = block;
    errorMessage.innerText = "Bhai Yaar! Kya kar hai tu, Matlab Majak h kya.";
}

hideMessage(){
    errorMessage.style.display = none;
}


function errMesgBill() {
    return "Invalid Bill Amount"
}

function errMesgCash() {
    return "Invalid Cash Amount"
}

buttonCheck.addEventListener("click",showNotes);
