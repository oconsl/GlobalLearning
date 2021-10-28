function alertaLobo(array){
    let lugarLobo;
    lugarLobo = array.indexOf("Lobo");
    if(lugarLobo < array.length-1){
        console.log(`Cuidado oveja ${array.length-(lugarLobo+1)} el Lobo está cerca! :'C .`);
        array.splice(lugarLobo+1,1);
        console.log("Lobo: Ñam ñam ñam >:D.\n");
    }
    else{
        if(lugarLobo != 0){
            console.log(`El Lobo no puede comer más ovejas. El rebaño está a salvo! :D .\n`);
        }
        else{
            console.log(`El Lobo se comió todas las ovejas :'C .\n`)
        }
    }
}
function apareceLobo(array){
    console.log("El rebaño está tranquilo.");
    let lugarLobo = Math.floor(Math.random()*(array.length-1));
    console.log(`Oh no! Apareció el Lobo en la parcela ${array.length-(lugarLobo)}, cuidado ovejas! :C .`);
    array.splice(lugarLobo,1,"Lobo");
    console.log(array);
    return array.length - lugarLobo;
}
            //  0       1        2       3      4       5       6
let array = ["Oveja","Oveja","Oveja","Oveja","Oveja","Oveja","Oveja"];
console.log(array);
let noches = apareceLobo(array);

for(let i = 0; i < noches; i++) {
    if(i != 0){
        console.log(array);
    }
    alertaLobo(array);
}