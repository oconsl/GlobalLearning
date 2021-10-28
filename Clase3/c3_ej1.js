class Hero{
    constructor(name = "Heroe"){
        this.name = name;
        this.position = "00";
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }
}

let hero1 = new Hero();
let hero2 = new Hero("Mordekaiser");

console.log(hero1);
console.log(hero2);