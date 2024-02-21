const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const errorMessage = document.querySelector("#error-message");
const buttonCheck = document.querySelector("#button-check");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const notesAvailable = [500,200,100,50,20,10,5,2,1];

buttonCheck.addEventListener("click",function showNotes(){
    hideMessage();
    let cash = parseInt(cashGiven.value);
    let bill = parseInt(billAmount.value);

    if(isNaN(bill) || isNaN(cash)){
        showMessage("Invalid Amount, Please enter numeric value.")
    }
    else if(bill > 0){

        if(cash > bill){
            const amountToBeReturn = cash - bill;
            calculateNotes(amountToBeReturn);
        }
        else{
            showMessage("Do you wanna wash plates?");
        }
    }
    else{
        showMessage("Invalid Bill Amount");
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
