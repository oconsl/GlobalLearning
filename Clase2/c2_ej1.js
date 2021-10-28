function eraseFirstElement(array){
    let elemento = array.shift();
    return elemento;
}

const array = [1,2,3,4,5];
console.log(array);
eraseFirstElement(array); //Elimina el primer elemento sin mostrarlo.
console.log(array);  
console.log(eraseFirstElement(array)); //Elimina el primer elemento y lo muestra en consola.
console.log(array);