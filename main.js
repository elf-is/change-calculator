var clientItems = [
    41, 90, 16, 26, 20, 18, 24, 95, 96, 15, 55,
    11, 47, 47, 54, 12, 67, 59, 27, 19
];
var sum = clientItems.reduce(function (a, b) { return a + b; }, 0);
console.log("Total amount due:", sum);
var change = [10, 5, 1];
function calculateChange(givenAmount, totalAmount, change) {
    if (givenAmount < totalAmount) {
        console.log("Not enough money given");
    }
    var changeToGive = givenAmount - totalAmount;
    while (changeToGive > 0) {
        for (var i = 0; i < change.length; i++) {
            if (changeToGive >= change[i]) {
                changeToGive -= change[i];
                console.log(change[i], " Euros");
                break;
            }
        }
    }
}
calculateChange(900, sum, change);
