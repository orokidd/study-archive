class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function printName(userObj) {
    console.log(`The user's name is ${userObj.name}`)
}

function printAge(userObj) {
    console.log(`The user's age is ${userObj.age}`)
}

function returnName(userObj) {
    return `The user's name is ${userObj.name}`
}

function returnAge(userObj) {
    return `The user's age is ${userObj.age}`
}

export default User
export { printName, printAge, returnName, returnAge }