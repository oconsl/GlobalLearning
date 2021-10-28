function addNumberToElements(array,num){
    console.log(`${num} will be added to each element of the array: [${array}]`);
    for(let i = 0; i < array.length; i++){
        array[i] += num;
    }
}


let array = [1,2,3,4,5];
console.log(array);
addNumberToElements(array,7); //Modifico cada elemento del array sumando 7 (num).
console.log(array);
addNumberToElements(array,-8); //Modifico cada elemento del array sumando -8 (num).
console.log(array);