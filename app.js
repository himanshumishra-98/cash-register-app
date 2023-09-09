const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");
const buttonCheck = document.querySelector("#button-check");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const notesAvailable = [500,200,100,50,20,10,5,2,1];

buttonCheck.addEventListener("click",function showNotes(){
    hideMessage();
    if(isNaN(billAmount.value) | isNaN(cashGiven.value)){
        showMessage("Invalid Amount, Please enter numeric value.")
    }
    else if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturn = cashGiven.value - billAmount.value;
            calculateNotes(amountToBeReturn);
        }
        else{
            showMessage("Bhai yaar kya kar raha h tu, matlab majak hai kya.");
        }
    }
    else{
        showMessage("Invalid Bill Amount");
    }
});


billAmount.addEventListener("keypress",function hideCashGiven(event){
    if(event.key==="Enter"){
        if(billAmount.value !== ""){
            cashGiven.style.display = "default";
        }else{
            cashGiven.style.display = "none";
        }
    }
});

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(msg){
    errorMessage.style.display = "block";
    errorMessage.innerText = msg;
}

function calculateNotes(amountToBeReturn) {
    for(let i=0; i<notesAvailable.length; i++){
        const notesNeedReturn = Math.trunc(
            amountToBeReturn/notesAvailable[i]
        );
        amountToBeReturn %= notesAvailable[i];
        noOfNotes[i].innerText = notesNeedReturn;
        console.log(notesNeedReturn);
    }
}

function errMesgBill() {
    return "Invalid Bill Amount"
}

function errMesgCash() {
    return "Invalid Cash Amount"
}