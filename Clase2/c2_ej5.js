function buscaDistinto(array){
    let caso1,caso2,i = 0;
    while(array[i]==array[i+1]){
        i++;
    }
    caso1 = array.filter(item => item == array[i]);
    caso2 = array.filter(item => item == array[i+1]);

    return caso1.length > caso2.length ? array[i+1] : array[i];
}

function findUnique(array){
    return array.find(item => array.indexOf(item) == array.lastIndexOf(item));
}

let array = [3,3,3,8,3,3,3,3,3,3,3];
console.log(array);
let distinto = buscaDistinto(array);
console.log(findUnique(array));
console.log(`El valor distinto del array: [${array}] es el número: ${distinto} ! Te encontré!\n`);          