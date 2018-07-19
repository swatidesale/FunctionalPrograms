/**
 * Purpose: Print power of two
 * 
 * @author Swati Desale
 *
 */
var readline = require('readline');
var common = require('/home/bridgeit/Desktop/Swati/Utility/utility.js');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * Function to print power of 2.
 * 
 * @param range contains range to calculate power of 2.
 */
read.question("Enter range for power of two : ",function(range) {
    common.powerofTwo(range);
    read.close();
});
