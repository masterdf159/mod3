const x = 12
const y = 30
const suma = x + y
const resta = x - y
const multi = x * y
const divi = x / y 

console.log('resultado suma es:', suma)
console.log('resultado resta es:', resta)
console.log('resultado multiplicacion es:' , multi)
console.log('resualtado division es:' , divi)

const text = 'hola'
const longitudtext = text.length < 2
console.log(longitudtext, 'longitudtext')

const arr =['pepe', 2 ,'aguilar', 4]
arr.push('juan')
console.log(arr[4])


newFunction()

function newFunction() {
    const a = 30
    const b = 50

    if (a > b) {
        console.log('es mayor')
    } else if (a >= b) {
        console.log('es mayor o igual')
    }
    else if (a <= b) {
        console.log('es menor o igual')
    }
    else if (a == b) {
        console.log('es igual')
    }
}
