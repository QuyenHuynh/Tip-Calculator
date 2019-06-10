//built-in javascript number formatter
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

//Function that automatically calculates suggested tips as the user types in bill
function autoCalc() {
    var bill = $("#billInput").val().trim();

    var calcTen = (parseFloat(bill) * .1).toFixed(2);
    var calcFifteen = (parseFloat(bill) * .15).toFixed(2);
    var calcEighteen = (parseFloat(bill) * .18).toFixed(2);
    var calcTwenty = (parseFloat(bill) * .2).toFixed(2);

    //console log the values
    console.log(calcTen);
    console.log(calcFifteen);
    console.log(calcEighteen);
    console.log(calcTwenty);

    //display on html
    $("#tenPercent").html("10%: $" + calcTen);
    $("#fifteenPercent").html("15%: $" + calcFifteen);
    $("#eighteenPercent").html("18%: $" + calcEighteen);
    $("#twentyPercent").html("20%: $" + calcTwenty);
}

//On-click function for submit button
$("#submit-btn").on("click", function () {
    event.preventDefault();

    //Grab input values from HTML
    var bill = $("#billInput").val().trim();
    var convertedBill = formatter.format(parseFloat(bill));
    var tipPercentage = $("#tipInput").val().trim();
    var convertedtipPercentage = (parseFloat(tipPercentage) / 100);
    var numberOfGuests = $("#guestsInput").val();

    //Console log the values
    console.log("bill: " + bill);
    console.log("tip percentage: " + tipPercentage);
    console.log("number of guests: " + numberOfGuests);
    console.log("converted tip:" + convertedtipPercentage);
    console.log("converted bill:" + convertedBill);


});

//calculate suggested tips as user types out bill


formatter.format(2500); /* $2,500.00 */
console.log(formatter.format(2500 * 33));
console.log(formatter.format(2.5 * .2));
console.log(formatter.format(1.25));