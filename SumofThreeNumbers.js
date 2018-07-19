/**
 * Purpose: Sum of three Integer adds to ZERO.
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

var arraySize;
var arrayElements = [];

/*
 * Function to take array size.
 * 
 * @param size contains size of array.
 */
function askArraySize() {
    read.question("Enter size of array : ",(size) => {
        arraySize = size;
        for(var index=0;index<size;index++) {
            askArrayElements();
        }
    });
}

/*
 * Function to take array elements.
 * 
 * @param element contains elements to push into array.
 */
function askArrayElements() {
    if(arrayElements.length >= arraySize) {
        common.sumofThreeNumbers(arrayElements,arraySize);     // Function to print Sum of three Integer adds to ZERO.
        read.close();
    } else {
        read.question(`Please enter the ${(arrayElements.length + 1)} elemnt : `, (element) => {
            arrayElements.push(element);
            askArrayElements();
        });
    }
}

askArraySize();