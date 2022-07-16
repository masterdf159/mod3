/* const name = ['pepe' , 'marina']
console.log(name)
name.forEach((valor, index) => {
    console.log(valor, index)
    
}) 

//FOR

for(let i = 0; 100 > i; i++){
    console.long(i)
} */


const total= 0
const value = [
    {num1: 12, num2: 222},
    {num1: 3, num2: 11},
    {num1: 33, num2: 44},
    {num1: 66, num2: 99},
    {num1: 555, num2: 888},
];

function values(){
for(let i = 0; i < value.length; i++){
    if(value[i]!=0){
     total = total + (value[i]*total);
      }
}return total;
}
console.log(values());