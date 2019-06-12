//input validator function that accepts only numbers, one decimal point, and two decimal places
function isNumberKey(evt, element) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode == 46 || charCode == 8))
        return false;
    else {
        var len = $(element).val().length;
        var index = $(element).val().indexOf('.');
        if (index > 0 && charCode == 46) {
            return false;
        }
        if (index > 0) {
            var CharAfterdot = (len + 1) - index;
            if (CharAfterdot > 3) {
                return false;
            }
        }

    }
    return true;
}

var totalPayment;
var calculatedTip;

$("#multipleBill").hide();
$("#singleBill").hide();

//function that automatically calculates suggested tips as the user types in bill
function suggestedTips() {
    //get input value from text box
    var bill = $("#billInput").val().trim();

    //parseFloat the values and calculate tip percentages
    var calcTen = (parseFloat(bill) * .1).toFixed(2);
    var calcFifteen = (parseFloat(bill) * .15).toFixed(2);
    var calcEighteen = (parseFloat(bill) * .18).toFixed(2);
    var calcTwenty = (parseFloat(bill) * .2).toFixed(2);

    //display on html
    $("#tenPercent").html("10%: $" + calcTen);
    $("#fifteenPercent").html("15%: $" + calcFifteen);
    $("#eighteenPercent").html("18%: $" + calcEighteen);
    $("#twentyPercent").html("20%: $" + calcTwenty);
}

//on-click function for submit button
$("#submit-btn").on("click", function () {
    event.preventDefault();
    $("#multiplePeople").hide();
    $("#singleBill").hide();

    //grab input values from HTML
    var bill = $("#billInput").val().trim();
    var tipPercentage = $("#tipInput").val().trim();
    var convertedtipPercentage = (parseFloat(tipPercentage) / 100);
    var numberOfGuests = $("#guestsInput").val();

    totalPayment = (parseFloat(bill) * (convertedtipPercentage + 1));

    calculatedTip = (parseFloat(bill) * convertedtipPercentage);

    //Display on html
    if (numberOfGuests > 1) {
        $("#multiplePeople").show();

        //display total payment per person
        $("#totalPerPerson").html("Total payment per person: $" + (totalPayment / numberOfGuests).toFixed(2));

        //display tips per person
        $("#tipPerPerson").html("Tips per person: $" + (calculatedTip / numberOfGuests).toFixed(2));

    } else {
        $("#singleBill").show();

        $("#tipTotal").html("Tip: $" + calculatedTip.toFixed(2));
        $("#totalPayment").html("Total Payment: $" + totalPayment.toFixed(2));
    }
});