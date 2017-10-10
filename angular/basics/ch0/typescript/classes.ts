/*
    class-based programming
*/
class Person {
    name: string;
    age: number;
    hungry: boolean = true;
    constructor(name: string, age?: number){
        this.name = name;
        this.age = age;
    }
    feed() {
        this.hungry = false;
        return "Yummy";
    }
}
var Brendan = new Person("Brendan", 21)

/*
class Inheritance
*/
class SecretAgent extends Person {
    licenseToKill; boolean = true;
    weaponLoaded: boolean = true;
    unloadWeapon(){
        this.weaponLoaded = false;
        return "clip empty";
    }
    loadWeapon(){
        this.weaponLoaded = true;
        return 'Lock and Loaded';
    }
}

var doubleOSeven = new SecretAgent("James Bond");
let loadResut = doubleOSeven.loadWeapon();
console.log(loadResut);
let unloadResult = doubleOSeven.unloadWeapon();
console.log(unloadResult);
let feedresult = doubleOSeven.feed();
console.log(feedresult);