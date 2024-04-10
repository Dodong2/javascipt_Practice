const pizza = 2.99
const coke = 0.99
let tip = (pizza + coke) * 0.2 

console.log(tip)

/* Farenheit */
const farenheit = 58
const const1 = 32
const const2 = 1.8

const FarToC = (farenheit) => {
    return (farenheit - const1) / const2
}

const celsius = FarToC(farenheit)
console.log(`Farenheit Result: ${celsius.toFixed(2)} °C`)

/* BMI */
const weight = 70
const height = 1.75

const BmiCalc = (weight, height) => {
    return weight / (height * height)
}
const MyBmi = BmiCalc(weight,height)
console.log(`BMI Result: ${MyBmi.toFixed(2)}`)

