//LAB 3 - UNIT TESTING
alert("lab 3");//please delete this line once connected.
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

function test_checkHumberId(valueIn, expected) {

    // Create a new element, and append to the output
    var elem = document.createElement("span");
    elem.setAttribute("id", "passFail");
    output.appendChild(elem);
    var passFailOut = getElementById("passFail");

    var result = checkHumberId(valueIn);
    var passOrFail = passOrFail(result);
    var output = document.getElementById("data");

    function passOrFail(res) {
        if (res) {
            passFailOut.innerHTML = "==PASSED==";
            passFailOut.style.color = "green";
        }
        else {
            passFailOut.innerHTML = "xxFAILEDxx";
            passFailOut.style.color = "green";
        }
    }

    var mssg = "Value Tested: " + valueIn + " | Expected Result: " + expected + " " + passOrFail;
    output.innerHTML += mssg;
}
//function to check for valid student number

function checkHumbrId(value) {
    "use strict";

    var IDRegEx = new RegEx("/(n|N)d{8}/");
    if (IDRegEx.test(value)) {
        return true;
    } else {
        return false;
    }
}
