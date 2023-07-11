let clientItems: number[] = [
    41, 90, 16, 26, 20, 18, 24, 95, 96, 15, 55,
    11, 47, 47, 54, 12, 67, 59, 27, 19
];

let sum: number = clientItems.reduce((a, b) => a + b, 0);
console.log("Total amount due:", sum);
const change = [10, 5, 1];

function calculateChange(givenAmount: number, totalAmount: number, change: number[]) {
    if (givenAmount < totalAmount) {
        console.log("Not enough money given");
    }
    let changeToGive: number = givenAmount - totalAmount;
    while (changeToGive > 0) {
        for (let i = 0; i < change.length; i++) {
            if (changeToGive >= change[i]) {
                changeToGive -= change[i];
                console.log(change[i], " Euros");
                break;
            }
        }
    }
}

calculateChange(900, sum, change);
