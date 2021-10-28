function borrarTresUltimos(array){
    if(array.length < 5){
        console.log("Solo se admiten arrays con 5 elementos o más.\n");
        return;
    }
    else{
        console.log(`Se eliminarán los 3 últimos elementos del array: [${array}]\n`);
        array.pop();
        array.pop();
        array.pop();
    }    
}

let array = [0,1,2,3];
console.log(array); 
borrarTresUltimos(array); //Pruebo la función con un array de 4 elementos.
let array1 = [0,1,2,3,4,5,6,7,8];
console.log(array1);
borrarTresUltimos(array1); //Pruebo la función con un array de 6 o más elementos.
console.log(array1);
