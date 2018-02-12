//LAB 3 - UNIT TESTING
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

function test_checkHumberId(valueIn, expected) {
    var result = checkHumbrId(valueIn);
    var output = document.getElementById("data");
    var passOrFail = "";

    // Create a new element, and append to the output
    // var elem = document.createElement("span");
    // document.body.appendChild(elem);

    // function passOrFail(res) {
    //     if (res === true) {
    //         elem.innerHTML += "==PASSED==" + "<br/>";
    //         elem.style.color = "green";
    //     }
    //     else {
    //         elem.innerHTML = "xxFAILEDxx" + "<br/>";
    //         elem.style.color = "red";
    //     }
    // }
    // passOrFail(result);

    if (result === expected) {
        passOrFail = "<span style='color:green'> ==PASSED== </span>";
    } else {
        passOrFail = "<span style='color:red'> xxFAILEDxx </span>";
    }

    var mssg = "Value Tested: " + valueIn + " | Expected Result: " + expected + passOrFail + "<br/>";
    output.innerHTML += mssg;
}

//function to check for valid student number
function checkHumbrId(value) {
    "use strict";

    var IDRegEx = /^(n|N)\d{8}$/;
    if (IDRegEx.test(value) === true) {
        return true;
    } else {
        return false;
    }
}

test_checkHumberId("N01267777", true);
test_checkHumberId("NNN", false);
test_checkHumberId("N123456789", false);
test_checkHumberId("N1234567", false);
