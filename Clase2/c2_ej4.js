function createArray(num){
    let array = [];
    console.log(`An array with ${num} elements is going to be created, from 0 to ${num-1}.`);
    for(let i = 0; i < num; i++){
        array.push(i);
    }
    return array;
}

let array1 = createArray(4);
console.log(array1);
let array2 = createArray(2); 
console.log(array2);
let array3 = createArray(6); 
console.log(array3);