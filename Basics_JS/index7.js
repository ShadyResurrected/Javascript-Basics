// Most object-oriented languages use classes as abstractions for the ideas or concepts manipulated by a program. A class is used to create objects representing a concept. It offers a convenient syntax to give both data and behavior to these objects


// A special method named constructor() can be added to a class definition. It is called during object creation and is often used to give it data properties.
class Character {
    constructor(name, health, strength) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
    }

    // Attack a target
    attack(target) {
        if (this.health > 0) {
            const damage = this.strength;
            console.log(
                `${this.name} attacks ${target.name} and causes ${damage} damage points`
            );
            target.health -= damage;
            if (target.health > 0) {
                console.log(`${target.name} has ${target.health} health points left`);
            } else {
                target.health = 0;
                const bonusXP = 10;
                console.log(
                    `${this
                        .name} eliminated ${target.name} and wins ${bonusXP} experience points`
                );
                this.xp += bonusXP;
            }
        } else {
            console.log(`${this.name} can't attack (they've been eliminated)`);
        }
    }

    describe() {
        return `${this.name} has ${this.health} health points, ${this
            .strength} as strength and ${this.xp} XP points`;
    }
}

const aurora = new Character('Aurora', 32, 900)
console.log(aurora.describe())

// To create relationships between objects, JavaScript uses prototypes.

// In addition to its own particular properties, any JavaScript object has an internal property which is a link (known as a reference) to another object called its prototype

// When trying to access a property that does not exist in an object, JavaScript tries to find this property in the prototype of this object

const anObject = {
    myProp: 2
};

// Create anotherObject using anObject as a prototype
const anotherObject = Object.create(anObject);

console.log(anotherObject.myProp); // 2

// This type of relationship between JavaScript objects is called delegation: an object delegates part of its operation to its prototype.

// In class-based object-oriented languages like C++, Java and C#, classes are static blueprints (templates). When an object is created, the methods and properties of the class are copied into a new entity, called an instance. After instantiation, the newly created object has no relation whatsoever with its class

// JavaScript’s object-oriented model is based on prototypes, not classes, to share properties and delegate behavior between objects

//  “Instantiating” a class creates a new object linked to a prototype object.