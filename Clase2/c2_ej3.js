function sumarNum(array,num){
    console.log(`Se le sumará ${num} a cada elemento del array: [${array}].\n`);
    for(let i = 0; i < array.length; i++){
        array[i] += num;
    }
}


let array = [1,2,3,4,5];
console.log(array);
sumarNum(array,7); //Modifico cada elemento del array sumando 7 (num).
console.log(array);
sumarNum(array,-8); //Modifico cada elemento del array sumando -8 (num).
console.log(array);