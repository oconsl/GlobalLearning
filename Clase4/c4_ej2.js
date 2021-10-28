const newPerson = (firstName,lastName,country,continent,age,language) => {
    const person = {
        firstName: firstName,
        lastName: lastName,
        country: country,
        continent: continent,
        age: age,
        language: language
    }
    return person;
}

const findMaxAge = (list) => {
    // Desestructuro el atributo age de cada objeto de list1.
    let ages = [];
    for(dev of list){
        const {age} = dev;
        ages.push(age);
    }
    // Busco la mayor edad.
    return maxAge = Math.max(...ages);    
}

var maxAge;
const person1 = newPerson("Gabriel","X.","Monaco","Europe",49,"PHP");
const person2 = newPerson("Odval","F.","Mongolia","Asia",38,"Python");
const person3 = newPerson("Emilija","S.","Lithuania","Europe",19,"Python");
const person4 = newPerson("Sou","B.","Japan","Asia",49,"PHP");

const list1 = [person1,person2,person3,person4];

console.log(`Max age of all devs: ${findMaxAge(list1)}.`);

// Filtro list1 según el atributo age y la mayor edad.
let maxAgeDevs = list1.filter(dev => dev.age === maxAge);
console.log("Let's see whose have this age! :");
console.log(maxAgeDevs);