newFunction_constan()

function newFunction_constan(){

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

}



newFunction_text()

function newFunction_text()
{
const text = 'hola'
const longitudtext = text.length < 2
console.log(longitudtext, 'longitudtext')
}

newFunction_array()

function newFunction_array(){

const arr =['pepe', 2 ,'aguilar', 4]
arr.push('juan')
console.log(arr[4])

}


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


function suma(x,y){
    return x + y
}

function resta(x,y){
    return x - y
}

function multi(x,y){
    return x * y
}
function divi(x,y){
    return x / y
}



operadores()


function operadores(action){
    const x = 12
    const y = 30

    if(action == 'suma'){
       return suma(x,y)
    }else if(action == 'resta'){
       return resta(x,y)
    }else if(action == 'multi'){
       return multi(x,y)
    }else if(action == 'divi'){
       return divi(x,y)
    }else {
        console.log('no hay operacion disponible')
    }

    
}

console.log(operadores('suma'))
console.log(operadores('resta'))
console.log(operadores('multi'))
console.log(operadores('divi'))


