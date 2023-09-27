let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");

let errorMessage = document.getElementById("errorMessage");

function calculateButtonFunc() {
    if (billAmount.value === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else if (percentageTip.value === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else {
        let percentage = parseInt(percentageTip.value);
        let bill = parseInt(billAmount.value);
        let calculatedTip = (percentage / 100) * bill;
        let total = bill + calculatedTip;
        //assigning values calculated values
        tipAmount.value = calculatedTip;
        totalAmount.value = total;
        errorMessage.textContent = "";
    }


}