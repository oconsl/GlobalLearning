function mayorProductoAd(array){
    let mpa = array[0] * array[1];
    for(let i = 0; i < array.length; i++){
        if(array[i]*array[i+1] >= mpa){
            mpa = array[i] * array[i+1];
        }
    }
    return mpa;
}

let array = [1,4,23,10,2,54,2,50];
console.log(array);
let resultado = mayorProductoAd(array); 
console.log(`El mayor producto de numeros adyacentes del array: [${array}] es: ${resultado}.\n`);