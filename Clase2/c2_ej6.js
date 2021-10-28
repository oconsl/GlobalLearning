function menorSumaPosible(array){
    let menor1,menor2,control;
    menor1 = array[0];
    menor2 = null;
    for(let i=0;i<array.length;i++){
        if(array[i]<=menor1){
            menor1 = array[i];
        }
    }
    control = array.filter(item => item == menor1);
    control.length > 1 ? menor2 = menor1 : control = array.filter(item => item != menor1);
    if(menor1 == menor2){
        return menor1*2;
    }
    menor2 = control[0];
    for(let i=0;i<control.length;i++){
        if(control[i]<=menor2){
            menor2 = control[i];
        }
    }
    return menor1+menor2;
}

let array = [12,5,1,6,7,3,-1,4];
console.log(array);
let menorSuma = menorSumaPosible(array);
console.log(`La menor suma posible del array: [${array}] da como resultado: ${menorSuma}.\n`);