function canDrink(person) {
    if (person.age != null) {
        if (person.age < 18) {
            console.log("Can't drink")
        } else if (person.age < 21) {
            console.log("Can't drink in US")
        } else {
            console.log ("Can drink")
        }
    } else {
        
    }
} 

function canDrinkRefactor(person) {
  if (person.age == null) {
    console.log("Invalid age")
    return
  }

  if (person.age < 18) {
    console.log("Can't drink")
    return
  }

  if (person.age < 21) {
    console.log("Can't drink in US")
    return
  }

  console.log("Can drink")
}

const p = {
  age: 32
}

canDrinkRefactor(p)
// Run with node