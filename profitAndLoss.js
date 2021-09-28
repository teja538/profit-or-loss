initialPrice = document.querySelector("#initialPrice");
quantity = document.querySelector("#quantity");
currentPrice = document.querySelector("#currentPrice");
tellmeBtn = document.querySelector("#tellmeBtn");
output = document.querySelector(".output");


function calculateProfitAndLoss(initial,quantity,current)
{
    if(initial > current)
    {
        //loss logic
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;
        output.innerText =(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
    }
    else if(current > initial)
    {
        //profit logic
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        output.innerText = (`Hey the profit is ${profit} and the percent is ${profitPercentage}%`);
    }
    else{
        output.innerText =("No profit and No loss");
    }
   
}


function clickHandler(e)
{
    calculateProfitAndLoss(initialPrice.value,quantity.value,currentPrice.value)
    
}

tellmeBtn.addEventListener("click",clickHandler);










