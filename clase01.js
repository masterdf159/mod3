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



/*
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

console.log(operadores('suma'), 'suma')
console.log(operadores('resta'), 'resta')
console.log(operadores('multi'), 'multi')
console.log(operadores('divi'), 'divi')

*/


switchOperation()

function switchOperation (operador) {
    const x = 12
    const y = 30
    switch(operador){
    case 'suma':
    return suma(x,y);
    break;
    case 'resta':
    return resta(x,y);
    break;
    case 'multi':
    return multi(x,y);
    break;
    case 'divi':
    return divi(x,y);
    break;
    default:
        console.log('operador no esta definido')

    }

    
}




console.log(switchOperation('suma'), 'suma')
console.log(switchOperation('resta'), 'resta')
console.log(switchOperation('multi'), 'multi')
console.log(switchOperation('divi'), 'divi')


/* 
Pepe tiene 24 años Ana 32 años y luis 10 años su abuelo dejo una herencia
para los menores de 25 deberan mostrar en consola obtiene 100.000 mil pesos 
mas que sus hermanos si tienen 24 años en adelante debera mostrar en consola
 tienes 30000 de herencia y debera mostrar en consola los 30000. */


 /* ejercicio()

 function ejercicio(){

 }*/

 /*Realizar una función de tienda de coches, si el coche es de marca ford tiene un 
 descuento del 5%, si el coche es chevrolet tiene un descuento del 10% si es de marca 
 mazda un descuento del 50% y kit de carretera debe recibir por parametro de entrada 
 la marca del vehiculo y el valor del vehiculo 
 
 Coche
 Marca: Ford  ----- chevrolet ------- Mazda + kit 
 descuento: 5% ---------- 10% ------- 50% 
 */





 function switchcarshop(marca , valor){
       const mazda = 5/100
       const ford = 10/100
       const chevrolet = 50/100

        switch(marca){
        case 'Mazda':
        return `costo del carro es ${valor} y su descuento es de ${valor * mazda}`
        break;
        case 'ford':
        return `costo del carro es ${valor} y su descuento es de ${valor * ford}`
        break;
        case 'chevrolet':
        return `costo del carro es ${valor} y su descuento es de ${valor * chevrolet}`
        break;
        default:
        console.log('no hay descuento')

    }

  
 }

 console.log(switchcarshop('mazda' , 10000000))
 console.log(switchcarshop('ford' , 20000000))
 console.log(switchcarshop('chevrolet' , 30000000))


