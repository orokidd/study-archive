const object1 = {
    name: "Brudud",
    age: 30,
    introduce: function () {
        console.log(`Halo! my name is ${this.name}`)
    },
    introduceAge() {
        console.log(`I'm ${this.age} years old`)
    }
}
object1.introduce()
object1.introduceAge()

function Person(name, age, sex) {
    this.name = name,
        this.age = age,
        this.sex = sex,
        this.introduce = function () {
            console.log(`Halo! my name is ${this.name}, I'm a ${this.sex} aged ${this.age}`)
        }
}

const larrs = new Person("larrs", 23, "male")
larrs.introduce()