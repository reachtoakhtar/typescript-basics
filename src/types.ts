let helloWorld: string = "Hello World"

interface User {
    name: string,
    id: number
}

const user: User = {
    name: "Hayes",
    id: 0
}  


//  Type	        Predicate
// ======          ===========
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


export {}
