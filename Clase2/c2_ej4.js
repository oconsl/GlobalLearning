function devolverArray(num){
    let array = [];
    console.log(`Se creará un array de ${num} elementos, desde 0 a ${num-1}.\n`);
    for(let i = 0; i < num; i++){
        array.push(i);
    }
    return array;
}

let array1 = devolverArray(4);
console.log(array1);
let array2 = devolverArray(2); 
console.log(array2);
let array3 = devolverArray(6); 
console.log(array3);