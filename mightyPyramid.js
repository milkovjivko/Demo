function mightyPyramid(base, increment) {
    let counter = 0;
    let gold = 0;
    let marble = 0;
    let lapis = 0;
    let stone = 0;

    for (let i = base; i > 0; i -=2) {
        counter++;
        if (i > 2) {
            let innerL = Math.pow((i-2), 2);
                stone += (innerL * increment);
                if (counter % 5 !== 0) {
                    let outerL = Math.pow(i, 2) - innerL;
                    marble += (outerL * increment);
                } else {
                    let outerL = Math.pow(i,2) - innerL;
                    lapis += (outerL * increment);
                }
        } else {
            gold = (Math.pow(i, 2)) * increment;
            break;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(counter*increment)}`);
}
mightyPyramid(11,0.75)