var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    class-based programming
*/
var Person = (function () {
    function Person(name, age) {
        this.hungry = true;
        this.name = name;
        this.age = age;
    }
    Person.prototype.feed = function () {
        this.hungry = false;
        return "Yummy";
    };
    return Person;
}());
var Brendan = new Person("Brendan", 21);
/*
class Inheritance
*/
var SecretAgent = (function (_super) {
    __extends(SecretAgent, _super);
    function SecretAgent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boolean = true;
        _this.weaponLoaded = true;
        return _this;
    }
    SecretAgent.prototype.unloadWeapon = function () {
        this.weaponLoaded = false;
        return "clip empty";
    };
    SecretAgent.prototype.loadWeapon = function () {
        this.weaponLoaded = true;
        return 'Lock and Loaded';
    };
    return SecretAgent;
}(Person));
var doubleOSeven = new SecretAgent("James Bond");
var loadResut = doubleOSeven.loadWeapon();
console.log(loadResut);
var unloadResult = doubleOSeven.unloadWeapon();
console.log(unloadResult);
var feedresult = doubleOSeven.feed();
console.log(feedresult);
