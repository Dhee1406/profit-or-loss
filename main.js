var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var outputBox = document.querySelector("#output-box");
var submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qu = Number(stockQuantity.value);
    var cp = Number(currentPrice.value);

    calculateProfitOrLoss(ip, qu, cp);
}

function calculateProfitOrLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPerc = (loss / initial) * 100;

        showOutput(
            `Hey1, your loss is ${loss} and the percent is ${lossPerc}%`
            );     
    }
    else if(initial < current) {
        var profit = (current - initial) * quantity;
        var profitPerc = (profit / initial) * 100;

        showOutput(
            `Hey1, your profit is ${profit} and the percent is ${profitPerc}%`
            );
    }
    else {
        showOutput(
            `Your stock has maintained consistent price since your purchase`
        )
    }
}

function showOutput(message){
    outputBox.innerHTML = message;
}
