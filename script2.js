 const $Cabecera = document.querySelector('header')
 const $Tabla = document.querySelector('#Principal__Tabla')
 const $BtnSend = document.querySelector('#Principal__Generar')

 //RECIBIR Y ORGANIZAR DATOS GET
 const DatosGet = location.search;
 const DatosSeparados = DatosGet.split('&')
 DatosSeparados[0] = DatosSeparados[0].substr(1, DatosSeparados[0].length)

//MEJORES
const $BtnTop = document.querySelector('#Principal__Ranking')
$BtnTop.addEventListener('click', () => {

    let VPromedios = [];
    let VNames = [];

    for(let i = 1; i < $Tabla.querySelectorAll('tr').length; i++)
    {
        let Valor = parseFloat($Tabla.querySelectorAll('tr')[i].querySelectorAll('td')[3].innerText);
        VPromedios[i] = Valor;

        let Estudent = $Tabla.querySelectorAll('tr')[i].querySelectorAll('td')[0].innerText
        VNames[i] = Estudent;
    }

    //MAYORES
    let VMayor = VPromedios[1]
    let NMayor = VNames[1]

    for(let i = 1 ; i <= VPromedios.length; i++)
    {
        if(VMayor < VPromedios[i])
        {
            VMayor = VPromedios[i]
            NMayor = VNames[i]
        }
    }
    
    let VMenor = VPromedios[1];
    let NMenor = VNames[1];

    for(let i = 1 ; i <= VPromedios.length; i++)
    {
        if(VMenor > VPromedios[i])
        {
            VMenor = VPromedios[i]
            NMenor = VNames[i]
        }
    }
    
    const EspacioHTML = document.querySelector('#FormRanking')
    const Formulario = document.createElement('form')
    Formulario.innerHTML = `
        <input type="text" name="NMejor" id="NMejor" value = "${NMayor}">    
        <input type="text" name="VMejor" id="Mejor" value = "${VMayor}">
        <input type="text" name="NPeor" id="NPeor" value = "${NMenor}">    
        <input type="text" name="VPeor" id="Peor" value = "${VMenor}">
    `
    Formulario.setAttribute('action','ranking.html');
    Formulario.setAttribute('method','get');
    Formulario.setAttribute('id','SentMejores');

    EspacioHTML.innerHTML = "";
    EspacioHTML.append(Formulario)
    const $Form = document.querySelector('#SentMejores')
    $Form.submit();
})

 //MOSTRAR IMÁGEN
 const NombreUser = DatosSeparados[0].substr(7, DatosSeparados[0].length)
 const ImagenUser = document.createElement('img')
 ImagenUser.setAttribute('src',`img/${NombreUser}.png`)

 //MOSTRAR NOMBRE
 const SaludoNombre = document.createElement('h2')
 const FechaHoy = new Date()
 SaludoNombre.innerHTML = `Bienvenido ${NombreUser} hoy es ${FechaHoy.getDate() + "/" + (FechaHoy.getMonth() +1) + "/" + FechaHoy.getFullYear()}`
 

 $Cabecera.append(ImagenUser)
 $Cabecera.append(SaludoNombre)

 /* GENERACIÓN DE LA TABLA */
 $BtnSend.addEventListener('click', ()=>{

    let Nombre = `Estudiante ${Math.round(Math.random()*10)}`
    let Edad = Math.abs(Math.round(Math.random()*35))
    // CALCULAR Y GENERAR NOTAS
    let CantidadNotas = Math.round(Math.random()*10)
    let Notas = []
    for(let i = 0; i < CantidadNotas; i++)
    {
        Notas[i] = parseFloat((Math.random()*5).toFixed(1))
    }
    // CALCULAR PROMEDIO
    let Promedio = 0;
    if(CantidadNotas != 0)
    {
        for(let i = 0; i < CantidadNotas; i++)
        {
            Promedio += parseFloat(Notas[i]);
        }
    
        Promedio = Promedio / parseInt(CantidadNotas);
    }

    RenderTable(Nombre, Edad, Notas, Promedio)
 })

 function RenderTable(VName, VEdad, VNotas, VPromedio)
 {
    const Registro = document.createElement('tr')
    const Elemento = `
    <td>${VName}</td>
    <td>${VEdad}</td>
    <td>${VNotas}</td>
    <td>${VPromedio.toFixed(1)}</td>
    `
    Registro.innerHTML = Elemento
    $Tabla.append(Registro)

    //MEJORES

 }