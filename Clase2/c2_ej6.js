function lowestSum(array){
    let min1,min2,control;
    min1 = array[0];
    min2 = null;
    for(let i=0;i<array.length;i++){
        if(array[i]<=min1){
            min1 = array[i];
        }
    }
    control = array.filter(item => item == min1);
    control.length > 1 ? min2 = min1 : control = array.filter(item => item != min1);
    if(min1 == min2){
        return min1*2;
    }
    min2 = control[0];
    for(let i=0;i<control.length;i++){
        if(control[i]<=min2){
            min2 = control[i];
        }
    }
    return min1+min2;
}

let array = [12,5,1,6,7,3,-1,4];
console.log(array);
let lowestSumResult = lowestSum(array);
console.log(`The lowest sum of the array: [${array}] is: ${lowestSumResult}.\n`);