function wolfAlert(array){
    let wolfIndex;
    wolfIndex = array.indexOf("Wolf");
    if(wolfIndex < array.length-1){
        console.log(`Be careful sheep ${array.length-(wolfIndex+1)}! the wolf is near! :'C .`);
        array.splice(wolfIndex+1,1);
        console.log("Wolf: Ñam ñam ñam >:D.\n");
    }
    else{
        if(wolfIndex != 0){
            console.log(`The wolf cant eat more sheeps. The flock is safe now! :D .\n`);
        }
        else{
            console.log(`The wolf has eaten all the sheeps. :'C .\n`)
        }
    }
}
function wolfJoin(array){
    console.log("The flock is calm.");
    let wolfIndex = Math.floor(Math.random()*(array.length-1));
    console.log(`Oh no! A wolf appeared on the parcel number ${array.length-(wolfIndex)}, be careful sheeps! :C .`);
    array.splice(wolfIndex,1,"Wolf");
    console.log(array);
    return array.length - wolfIndex;
}
            //  0       1        2       3      4       5       6
let array = ["Sheep","Sheep","Sheep","Sheep","Sheep","Sheep","Sheep"];
console.log(array);
let nights = wolfJoin(array);

for(let i = 0; i < nights; i++) {
    if(i != 0){
        console.log(array);
    }
    wolfAlert(array);
}