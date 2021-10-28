/*class Person{
    constructor(firstName,country,continent,age,language){
        this.firstName = firstName;
        this.country = country;
        this.continent = continent;
        this.age = age;
        this.language = language;
    }
}*/
// Si bien puedo usar la misma clase, a modo de práctica utilizo un objeto literal.

const newPerson = (firstName,country,continent,age,language) => {
    const person = {
        firstName: firstName,
        country: country,
        continent: continent,
        age: age,
        language: language
    }
    return person;
}

const person1 = newPerson("Sofia","Argentina","Americas",35,"Java");
const person2 = newPerson("Lukas","Croatia","Europe",35,"Python");
const person3 = newPerson("Madison","United States","Americas",32,"Ruby");

/*const person1 = newPerson("Sofia","Argentina","Americas",35,"Java");
const person2 = newPerson("Lukas","Croatia","Europe",35,"Java");
const person3 = newPerson("Madison","United States","Americas",32,"Java");*/

const list = [person1,person2,person3];

// Puedo realizar este ejercicio con every, pero prefiero realizarlo con la clase Set para ver su funcionamiento.
// Desestructuro el atributo language mediante map.
const langArray = list.map(dev => dev.language);

// Ahora genero un array nuevo que NO tenga elementos repetidos, para ello uso Set.
const newLangArray = [...new Set(langArray)];

// ############### Corrección! ###############
console.log("Are all languages ​​the same?:");
newLangArray.length === 1 ? console.log(true) : console.log(false);
