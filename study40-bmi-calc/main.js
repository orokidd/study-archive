function bmiCalculator(w, h){
    return (w / (h*h)).toFixed(2)
}

const bmi = bmiCalculator(65, 1.6)
console.log(bmi)

// OR

function bmiCalculator2(w, h){
    bmi2Result = w / Math.pow(h, 2)
    return Math.round(bmi2Result)
}

const bmi2 = bmiCalculator2(65, 1.4)
console.log(bmi2)