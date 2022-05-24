function bitcoinMining(minedGold) {
    let bitcoinPrice = 11949.16;
    let goldPricePerGram = 67.51;

    let day = 0;
    let bitcoin = 0;
    let firstBuyingDay = 0;

    for (let i = 0; i < minedGold.length; i++) {
        day++;
        let gold = minedGold[i];
        if (day % 3 === 0) {
            money += (gold * 0.7) * goldPricePerGram;
        } else {
            money += gold * goldPricePerGram;
        }
        while (money >= bitcoinPrice) {
            if (firstBuyingDay === 0) {
                firstBuyingDay += day;
            }
            money -= bitcoinPrice;
            bitcoin++;
            if(bitcoin >= 1) {
                console.log(`Day of the first purchased bitcoin: ${day}`);
            }
            console.log(`Left money: ${money.toFixed(2)} lv`);
        }
    }
    console.log(`Bought bitcoins: ${bitcoin}`);
}
bitcoinMining([100, 200, 300])