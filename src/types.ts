
let helloWorld: string = "Hello World"

interface User {
    name: string,
    id: number
}

const user: User = {
    name: "Hayes",
    id: 0
}  

console.log(user)

//  Type	        Predicate
// ======         ============
// string	      typeof s === "string"
// number         typeof n === "number"
// boolean	      typeof b === "boolean"
// undefined	  typeof undefined === "undefined"
// function	      typeof f === "function"
// array	      Array.isArray(a)


// Structural Type System
// =======================
// One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.
// In a structural type system, if two objects have the same shape, they are considered to be of the same type.



// Since JavaScript supports classes and object - oriented programming, so does TypeScript. You can use an interface declaration with classes:


// GENERICS
// Generics provide variables to types.A common example is an array.An array without generics could contain anything.An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// You can declare your own types that use generics:

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add("23");

console.log(backpack)

