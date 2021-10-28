function findUnique(array){
    let case1,case2,i = 0;
    while(array[i]==array[i+1]){
        i++;
    }
    case1 = array.filter(item => item == array[i]);
    case2 = array.filter(item => item == array[i+1]);

    return case1.length > case2.length ? array[i+1] : array[i];
}

function findUnique2(array){
    return array.find(item => array.indexOf(item) == array.lastIndexOf(item));
}

let array = [3,3,3,8,3,3,3,3,3,3,3];
console.log(array);
let unique = findUnique(array);
console.log(findUnique(array));
console.log(`The unique value of the array: [${array}] is the number: ${unique} ! I find you!\n`);          