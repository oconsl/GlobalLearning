function highestMultiplication(array){
    let hm = array[0] * array[1];
    for(let i = 0; i < array.length; i++){
        if(array[i]*array[i+1] >= hm){
            hm = array[i] * array[i+1];
        }
    }
    return hm;
}

let array = [1,4,23,10,2,54,2,50];
console.log(array);
let result = highestMultiplication(array); 
console.log(`The highest multiplication of adjacent numbers of the array: [${array}] is: ${result}.\n`);