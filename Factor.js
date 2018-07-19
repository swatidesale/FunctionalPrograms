/**
 * Purpose: To find prime factors.
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
 * Function to find prime factors.
 * 
 * @param input contains number to find prime factors.
 */
read.question("Enter value of N for factors : ",function(input){
	common.primeFactors(input);
    read.close();
});