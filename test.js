
// stateful function used in functional programming paradigm and currying
const state = (value) => {
    let currentValue = value
    return (newValue = currentValue) => {
        currentValue = newValue
        return currentValue
    }
}

const names = state(["allan", "gabe", "kaio"])

console.log(names())

const namesK = names(names().map(el => el + "K"))

console.log(namesK)

// object data privacy through closure, the return object has privileged methods and access to 
// parent functions variables through closure
// used in object oriented programming (OOP)
const user = (name, email, password) => {
    return {
        getName: () => name,
        getEmail: () => email,
        getPassword: () => password,
        setName: newName => name = newName
    }
}

const allan = user("allan", "a@A.com", "pass123")

allan.setName("Bob")
console.log(allan.getName())




// a closure is the combination of a function bundled together with references to its surrounding state (lexical enviornment) closure gives you access to an outer functions scope from an inner function. in JS closures are created every time a function is created at function creation time

const init = () => {
    const name = 'Mozilla' // name is a local variable created by init
    const displayName = () => console.log(name) // displayName is the inner function, a closure
    displayName()
}
init()

const makeFunc = () => {
    let name = "Mozilla"
    const displayName = () => console.log(name)
    return displayName
}

const myFunc = makeFunc()
myFunc()


// makeAdder returns a function so it is essentially a function factory
const makeAdder = (x) => {
    return (y) => x + y
}

// add5 and add10 are both closures and each have their lexical enviornment. in add5 x is 5 and in add10 x is 10
const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log(add5(5))
console.log(add10(5))

// closures have obvious parallels to oop where objects allow you to associate data with methods. 


// you can emulate private methods with closure

const counter = (() => {
    let privateCounter = 0

    const changeBy = (val) => privateCounter += val
    
    return {
        increment: () => changeBy(1),
        decrement: () => changeBy(-1),
        value: () => privateCounter
    }
})()

console.log(counter.value())
