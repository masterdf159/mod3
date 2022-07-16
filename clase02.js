/* const name = ['pepe' , 'marina']
console.log(name)
name.forEach((valor, index) => {
    console.log(valor, index)
    
}) 

//FOR

for(let i = 0; 100 > i; i++){
    console.long(i)
} */






function values(){
    const value = [
        {num1: 12, num2: 222},
        {num1: 3, num2: 11},
        {num1: 33, num2: 44},
        {num1: 66, num2: 99},
        {num1: 555, num2: 888},
    ];


for(let i = 0; i < value.length; i++){ 
    
     console.log( `La Suma de ${value[i].num1}  y ${value[i].num2} es: ${value[i].num1 + value[i].num2}`, `La multi de ${value[i].num1}  y ${value[i].num2} es: ${value[i].num1 * value[i].num2}`)
}
return 'OK'
}
console.log(values())
