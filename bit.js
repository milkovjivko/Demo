function solve(minedGold) {
    let bitcoinPrice = 11949.16;
    let goldPricePerGram = 67.51;

    let day = 0;
    let bitcoin = 0;
    let firstBuyingDay = 0;
    let money = 0;
        
    for(let i = 0; i < minedGold.length; i++) {
    day++;
    let gold = minedGold[i];
    if(day % 3 === 0) {
        money += (gold * 0.7) * goldPricePerGram ;
    } else {
        money += gold * goldPricePerGram;
    }
    while(money >= bitcoinPrice) {
        if(firstBuyingDay === 0) {
            firstBuyingDay += day ;
        }
        money -= bitcoinPrice;
        bitcoin++;
    }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
    if(bitcoin >= 1) {
    console.log(`Day of the first purchased bitcoin: ${firstBuyingDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
} 
solve ([3124.15, 504.212, 2511.124])