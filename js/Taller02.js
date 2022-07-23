
function convertir(){
    var valore = parseInt(document.getElementById("valorC").value)
    var resultado = 0
    var dolar = 4408
    var euro = 4501
    if(document.getElementById("USD").checked){
        resultado = valore / dolar;
        alert("EL cambio de Pesos Colombianos a Dolares es:" + resultado)
    }
    else if(document.getElementById("EU").checked)
    {
        resultado = valore / euro;
        alert("EL cambio de Pesos Colombianos a Euros es:" + euro)
    }
    else{
        alert("Tienes que completar todos los campos requeridos.")
    }
}