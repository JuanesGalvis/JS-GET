const $Name = document.querySelector('#Nombre')
const $Date = document.querySelector('#Nacimiento')
const $btn = document.querySelector("#Enviar")

function ValidarDatos(nombre, fecha)
{
    let VNombre = false;
    let VEdad = false;

    if(nombre === "user1" || nombre === "user2")
    {
        VNombre = true;
    }

    let Edad = parseInt(fecha.substr(0,4))
    
    if(Edad >= 18)
    {
        VEdad = true;
    }

    if(VEdad && VNombre)
    {
        $btn.classList.remove('oculto')
    }else{
        console.log("USUARIO INCORRECTO O EDAD INSUFICIENTE")
    }
}

$Date.addEventListener('blur', ()=>{
    ValidarDatos($Name.value ,$Date.value)
})
