/**
 * Purpose: Generate random number and to process distinct coupons..
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
 * Function to replace string by given name.
 * 
 * @param noOfCoupons contains the total number of coupons to generate.
 */
function couponNumbers() {
	read.question("Enter value of N : ",function(noOfCoupons) {
		common.findCouponNumbers(noOfCoupons);
    	read.close();
	});
}

couponNumbers();