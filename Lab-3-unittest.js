//LAB 3 - UNIT TESTING
alert("lab 3");//please delete this line once connected.
/**
 * Validate input is a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

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