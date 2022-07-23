
alert('prueba')
function convertir() {
    console.log('entro')
    var valore = parseInt(document.getElementById("valor").value)
    var resultado = 0
    var dolar = 4408
    var euro = 4501
    console.log(document.getElementById("estilo2").value )
    if(document.getElementById("estilo2").value == 'USD'){
        resultado = valore / dolar
        alert("EL cambio de Pesos Colombianos a Dolares es: $" + resultado.toFixed(2))
        
    }
    else if(document.getElementById("estilo2").value == 'EU')
    {
        resultado = valore / euro
        alert("EL cambio de Pesos Colombianos a Euros es: €" + resultado.toFixed(2))
     
    }
    else{
        alert("Tienes que completar todos los campos requeridos.")
    }
}