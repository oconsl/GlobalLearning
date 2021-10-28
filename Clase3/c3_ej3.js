class Person{
    constructor(firstName,country,continent,age,language){
        this.firstName = firstName;
        this.country = country;
        this.continent = continent;
        this.age = age;
        this.language = language;
    }
}

function addGreeting(list){
    list.forEach(element => element.greeting = `Hi ${element.firstName}, what do you like the most about ${element.language}?`);
    return list;
}

let person1 = new Person("Sofia","Argentina","Americas",35,"Java");
let person2 = new Person("Lukas","Croatia","Europe",35,"Python");
let person3 = new Person("Madison","United States","Americas",32,"Ruby");

const list1 = [person1,person2,person3];
console.log(addGreeting(list1));
