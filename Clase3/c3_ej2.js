class Person{
    constructor(firstName,country,continent,age,language){
        this.firstName = firstName;
        this.country = country;
        this.continent = continent;
        this.age = age;
        this.language = language;
    }
}

let person1 = new Person("Noah","Switzerland","Europe",19,"JavaScript");
let person2 = new Person("Carla","Tahiti","Oceania",28,"JavaScript");
let person3 = new Person("Maria","Taiwan","Asia",35,"HTML");
let person4 = new Person("Ramiro","Tajikistan","Asia",30,"CSS");

const list = [person1,person2,person3,person4];

console.log("Quantity of European devs in the conference:");
console.log(list.filter(element => element.continent == "Europe").length);