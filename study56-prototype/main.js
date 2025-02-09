function Person(){
  this.name = "John";
  this.age = 29;
  this.job = "trainer";
}

Person.prototype.greet = function(){
  console.log(`Halo my name is ${this.name} and im ${this.age}`)
}

const rira = new Person().greet() // output Halo my name is John and im 29


const string = new String("test arasaka")
console.log(string.constructor === String) // true


const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name} aged ${this.age}!`);
  },
};

function Person2(name, age){
  this.name = name;
  this.age = age;
}

Object.assign(Person2.prototype, personPrototype);

new Person2("andy", 33).greet() // hello, my name is andy aged 33
new Person2("naza", 31).greet() 


class Person3{
  constructor(){
    this.name = "Deandra";
    this.age = "23";
    this.job = "Software developer";
    this.greet = function(){
      console.log("hello pricks")
    }
  }
  shout(){
    console.log("Watchu looking at foo you wanna fight?")
  }
}

const dude1 = new Person3;
dude1.greet()

const dude2 = new Person3;
 dude2.shout()
