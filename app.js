//hide divs on window load
$("#multipleBill").hide();
$("#singleBill").hide();

//function that automatically calculates suggested tips as the user types in bill
suggestedTips = () => {
    let bill = $("#billInput").val().trim();

    //parseFloat the values and calculate tip percentages
    let calcTen = (parseFloat(bill) * .1).toFixed(2);
    let calcFifteen = (parseFloat(bill) * .15).toFixed(2);
    let calcEighteen = (parseFloat(bill) * .18).toFixed(2);
    let calcTwenty = (parseFloat(bill) * .2).toFixed(2);

    //display to html
    $("#tenPercent").html("10%: $" + calcTen);
    $("#fifteenPercent").html("15%: $" + calcFifteen);
    $("#eighteenPercent").html("18%: $" + calcEighteen);
    $("#twentyPercent").html("20%: $" + calcTwenty);
}

let total_payment;
let calculated_tip;

//on-click function for submit button which calculates custom tip and multiple checks
$("#submit-btn").on("click",function() {
    event.preventDefault();

    //reset divs to be hidden
    $("#multipleBill").hide();
    $("#singleBill").hide();

    //grab input values from HTML
    let bill = $("#billInput").val().trim();
    let tip = $("#tipInput").val().trim();
    let num_checks = $("#checksInput").val();

    //convert tip to percentage
    let tip_percentage = (parseFloat(tip) / 100);

    //calculate tip
    calculated_tip = (parseFloat(bill) * tip_percentage);
    //calculate bill + tip
    total_payment = (parseFloat(bill) + calculated_tip);

    //Display on html
    if (num_checks > 1) {
        $("#multipleBill").show();
        $("#multipleTip").html("Tips per person: $" + (calculated_tip / num_checks).toFixed(2));
        $("#multipleTotal").html("Total payment per person: $" + (total_payment / num_checks).toFixed(2));

    } else {
        $("#singleBill").show();
        $("#singleTip").html("Tip: $" + calculated_tip.toFixed(2));
        $("#singleTotal").html("Total Payment: $" + total_payment.toFixed(2));
    }
});

//input validator function that accepts only numbers, one decimal point, and two decimal places
function isNumberKey (evt, element) {
    let charCode = (evt.which) ? evt.which : event.keyCode
    //if letter or special character, return false
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !(charCode == 46 || charCode == 8))
        return false;
    else {
        //limit input to two decimal places
        let len = $(element).val().length;
        let index = $(element).val().indexOf('.');
        if (index > 0 && charCode == 46) {
            return false;
        }
        if (index > 0) {
            let CharAfterdot = (len + 1) - index;
            if (CharAfterdot > 3) {
                return false;
            }
        }
    }
    return true;
}