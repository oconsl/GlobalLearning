function eraseLastThreeElements(array){
    if(array.length < 5){
        console.log("Only arrays with 6 elements are allowed.\n");
        return;
    }
    else{
        console.log(`Last three elements are going to be removed: [${array}]\n`);
        array.pop();
        array.pop();
        array.pop();
    }    
}

let array = [0,1,2,3];
console.log(array); 
eraseLastThreeElements(array); //Pruebo la función con un array de 4 elementos.
let array1 = [0,1,2,3,4,5,6,7,8];
console.log(array1);
eraseLastThreeElements(array1); //Pruebo la función con un array de 6 o más elementos.
console.log(array1);
