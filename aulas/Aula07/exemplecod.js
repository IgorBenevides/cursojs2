
const regularArray = [1,7,6,3,0,3,5];

// let count = 0;
for (let count = 0 ; count < regularArray.length; count++) {

    regularArray[count] += count;
    // count++;
}

console.log ('O array atual é ', regularArray);