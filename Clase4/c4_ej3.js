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

const findYear = (age) => {
    const actualYear = 2021;
    //Esta función considera que la persona ya cumplió años en actualYear, de otra forma se debería restar 1.
    return actualYear - age;
}

const makeUserName = (dev) => {
    // Desestructuro los 3 datos necesarios (firstName,lastName,age)
    let {firstName,lastName,age} = dev;
    // A partir de los datos formo el username.
    dev.userName = firstName.toLowerCase() + lastName[0].toLowerCase() + findYear(age);
}

const person1 = newPerson("Emily","N.","Ireland","Europe",30,"Ruby");
const person2 = newPerson("Nor","E.","Malaysia","Asia",20,"Clojure");

const list1 = [person1, person2];

// Por cada elemento de list1 llamo a la función makeUserName.
list1.forEach(dev => makeUserName(dev));
console.log(list1);