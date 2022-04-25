// Store the wallet amount to your local storage with key "amount"


let amountw = JSON.parse(localStorage.getItem("amount")) || [];

function addTOWallet() {
    var amoun = document.getElementById("amount").value;
    add.innerText = amoun;

    localStorage.setItem("amount", JSON.stringify("amountw"));
}