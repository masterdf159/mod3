

function convertir() {

    var valore = parseInt(document.getElementById("valor").value)
    var resultado = 0
    var dolar = 4408
    var euro = 4501
    
    if(document.getElementById("usd").value=="usd"){
        resultado = valore / dolar
        alert("EL cambio de Pesos Colombianos a Dolares es: $" + resultado.toFixed(2))
        
    }
    
    else if(document.getElementById("eu").value=="eu")
    {
        resultado = valore / euro
        alert("EL cambio de Pesos Colombianos a Euros es: €" + resultado.toFixed(2))
     
    }
    else{
        alert("Tienes que completar todos los campos requeridos.")
    }
}