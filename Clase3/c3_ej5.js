class Person{
    constructor(firstName,country,continent,age,language){
        this.firstName = firstName;
        this.country = country;
        this.continent = continent;
        this.age = age;
        this.language = language;
    }
}

let person1 = new Person("Sofia","Argentina","Americas",35,"Java");
let person2 = new Person("Lukas","Croatia","Europe",35,"Python");
let person3 = new Person("Madison","United States","Americas",32,"Ruby");

function thereIs(list,lang){
    for(person of list){
        if(person.language == lang){
            return true;
        }
    }
    return false;
}

let person1 = new Person("Emma","Netherlands","Europe",29,"Ruby");
let person2 = new Person("Piotr","Poland","Europe",128,"JavaScript");
let person3 = new Person("Jayden","Jamaica","Americas",42,"JavaScript");

const list1 = [person1,person2,person3];
console.log("Is there any C# developer in the conference? ");
console.log(thereIs(list1,"C#"));
console.log("Is there any Ruby developer in the conference? ");
console.log(thereIs(list1,"Ruby"));