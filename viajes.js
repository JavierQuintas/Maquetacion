

let arrayInfo=[];
function infoForm(){

    let nombre = (document.getElementById("nombre").value).toLowerCase()
    let origen = (document.getElementById("origen").value).toLowerCase()
    let destino = (document.getElementById("destino").value).toLowerCase()
    let personas = (document.getElementById("personas").value)
    let fecha = (document.getElementById("fecha").value)
    let traveler ={
        "nombre": nombre,
        "origen": origen,
        "destino": destino,
        "personas": personas,
        "fecha": fecha,
}
document.getElementById("nombre").value = ""
document.getElementById("origen").value = ""
document.getElementById("destino").value = ""
document.getElementById("personas").value = 0
document.getElementById("fecha").value = ""

arrayInfo.push(traveler);

console.log(arrayInfo)
}

arrayFiltrado = [];
function filtrarForm()
{

    ciudades = ["mayorca", "canarias", "galicia"]
    arrayFiltrado = [];
    for(destino in ciudades)
    {
        if(ciudades[destino] == "mallorca" || ciudades[destino] == "canarias" || ciudades[destino] == "galicia")
        {
            arrayFiltrado.push(arrayFiltrado);

            // return "el traveler quiere viajar a: " + destino

            console.log(arrayFiltrado)
            console.log(destino)
        }
        
    }


    
}


