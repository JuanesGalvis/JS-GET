const $Table = document.querySelector('table')

//RECIBIR Y ORGANIZAR DATOS GET
 const DatosGet = location.search;
 const DatosSeparados = DatosGet.split('&')
 DatosSeparados[0] = DatosSeparados[0].substr(1, DatosSeparados[0].length)

 const VMayor = parseFloat(DatosSeparados[1].substr(7,10));
 const VMenor = parseFloat(DatosSeparados[3].substr(6,10));

 const NMayor = DatosSeparados[0].substr(7,17).replace('+','');
 const NMenor = DatosSeparados[2].substr(6,17).replace('+','');

 (function RenderTable()
 {
    const $Mayor = document.createElement('tr')
    $Mayor.innerHTML = `
    <td class="Mayor">${NMayor}</td>
    <td class="Mayor">${VMayor}</td>`

    const $Menor = document.createElement('tr')
    $Menor.innerHTML = `
    <td class="Menor">${NMenor}</td>
    <td class="Menor">${VMenor}</td>`

    $Table.innerHTML= "";
    $Table.append($Mayor)
    $Table.append($Menor)   

 })(VMayor, VMenor)

