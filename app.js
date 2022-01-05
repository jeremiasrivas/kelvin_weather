//create a variable kelvin
const kelvin = 293;
//convert Kelvin to Celsius by subtracting 273 from the kelvin variable. 
const celsius = kelvin - 273;
//will round the number saved to fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;
//round down the farenheit tempature 
fahrenheit = Math.floor(fahrenheit);
console.log(`The temapture is ${fahrenheit} degrees Fahrenheit.`)

