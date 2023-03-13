alert('HOLA!! Estás ingresando al simulador del costo de la Casa de tus Sueños!')
alert('Somos Casas JS!')
alert('Expertos en Tasación y Venta de Propiedades')
alert('Sabías que el valor de una propiedad depende mayormente de:  \n - La Ubicación \n - La Cantidad de Ambientes  \n - La Cantidad de Metros Cuadrados ')

const metrosDormitorio = 9
const metrosLiving = 18
const metrosCocina = 6
const metrosBano = 5

const metroBelgrano = 2138
const metroPalermo = 2079
const metroRecoleta = 1978
const metroCaballito = 1861
const metroAlmagro = 1685
const metroBarracas = 1478
const metroMataderos = 1416
const metroBoca = 1150

const promedioMetroCuadrado = (metroBelgrano + metroPalermo + metroRecoleta + metroCaballito + metroAlmagro + metroBarracas + metroMataderos + metroBoca) / 8

const metrosDosAmbientes = (metrosDormitorio * 1) + (metrosLiving * 1) + (metrosCocina * 1) + (metrosBano * 1)
const promedioDosAmbientes = metrosDosAmbientes * promedioMetroCuadrado

alert('Te contamos los valores de metro cuadrado por cada barrio: \n 1- Belgrano: u$s '  + metroBelgrano + ' \n 2- Palermo: u$s '  + metroBelgrano + ' \n 3- Recoleta: u$s '  + metroPalermo + ' \n 4- Caballito: u$s '  + metroCaballito + ' \n  5- Almagro: u$s '  + metroAlmagro + ' \n  6- Mataderos: u$s '  + metroMataderos + ' \n  7- Barracas: u$s '  + metroBarracas + ' \n  8- La Boca: u$s '  + metroBoca + ' \n Y que un departamento de 2 ambientes con Living Comedor más un dormitorio y un baño de ' + metrosDosAmbientes + ' metros cuadrados te saldría en promedio : u$s ' + promedioDosAmbientes)

alert('Ahora, imagina en que zona te gustaría vivir, y cuantos ambientes te gustaría que tenga tu próxima vivienda.')
alert('Si querés saber cuanto dinero necesitás para comprar esa propiedad, decinos tu nombre y continuemos: ')

let cliente = ''

cliente = prompt('Ingresá tu Nombre:')

const dondeVivir = (nombreCliente) => {

    alert('Hola ' + nombreCliente)

    let otraPropiedad = false

    do {
        let barrioElegido = 0
        let valorMetroElegido = 0  
        let nombreBarrio = ''    
        let valorPropiedad = 0
        let strDormitorios = ' Dormitorios'
        let strBanios = ' Baños'
        let totalAmbientes = 0

        nombreBarrio = elegirBarrio(nombreCliente,barrioElegido)

        valorMetroElegido = valorMetroCuadrado(nombreBarrio)

        alert('Ahora decidí cuantos ambientes querés que tenga.')

        let cantidadDormitorios = parseInt(prompt('¿Cuántos dormitorios necesitás?'))
        let dormitoriosCorrecto = validarAmbientes(cantidadDormitorios, 'Dormitorios')

        let cantidadBanios = parseInt(prompt('¿Cuántos baños necesitás?'))
        let baniosCorrecto = validarAmbientes(cantidadBanios, 'Baños')

        let totalMetros = metrosPropiedad(dormitoriosCorrecto,baniosCorrecto)

        totalAmbientes = dormitoriosCorrecto + baniosCorrecto + 1

        valorPropiedad = totalMetros * valorMetroElegido

        if (dormitoriosCorrecto == 1) {
            strDormitorios = ' Dormitorio';
        } else if (dormitoriosCorrecto == 0) {
            dormitoriosCorrecto = ''
            strDormitorios = ' No tiene Dormitorio';
        }

        if (baniosCorrecto == 1) {
            strBanios = 'Baño';
        } else if (baniosCorrecto == 0) {
            baniosCorrecto = ''
            strBanios = 'No tiene Baño';
        }

        alert(nombreCliente + ' Tu propiedad ideal está ubicada en ' + nombreBarrio + '.\n Cuenta con: Living Comedor, cocina, ' + dormitoriosCorrecto +  strDormitorios + ' , ' + baniosCorrecto + ' ' + strBanios + '. \n Tiene un total de ' + totalMetros + ' Metros Cuadrados.   \n Por su ubicación y cantidad de metros, el valor total es de aproximadamente u$S ' + valorPropiedad)

        otraPropiedad = confirm('¿Querés buscar otra alternativa?')

    } while (otraPropiedad)

    alert ('Gracias por utilizar los servicios de Casas JS.')

}

const clienteValidado = (cliente) => {

    if (cliente == '')  {

        alert('Debes ingresar tu nombre para continuar')

        while (cliente == '')  {
            cliente = prompt('Ingresá tu Nombre:')
        }
    }

    return cliente
}

const elegirBarrio = (clienteValidado,barrioElegido) => {

    let confirmaBarrio = false
        
    do {

        informarBarrios()
        
        barrioElegido = parseInt(prompt('¿Cuál es el número del Barrio que te gusta?'))

        let barrioCorrecto = validarBarrio(barrioElegido)

        nombreBarrio = nombreBarrioElegido(barrioCorrecto)

        alert(clienteValidado + ' Elegiste vivir en ' + nombreBarrio)

        confirmaBarrio = confirm('¿Queres cambiar de barrio?')

               
        
    } while (confirmaBarrio)  

    
    return nombreBarrio

}

const validarBarrio = (barrioElegido) => {

    while (Number.isNaN(barrioElegido) || barrioElegido === 0 || barrioElegido > 8 ) {
        
        alert('Necesitamos saber el número del barrio que te gusta para continuar.')
        
        informarBarrios()

        barrioElegido = parseInt(prompt('¿Cuál es el número del Barrio que te gusta? '))       
    }

    return barrioElegido

}

const validarAmbientes = (numeroAmbientes, tipoAmbiente) => {

    while (Number.isNaN(numeroAmbientes) ||  numeroAmbientes > 6 ) {
        
        alert('Necesitamos el número de ' + tipoAmbiente)

        numeroAmbientes = parseInt(prompt('¿Cuántos ' + tipoAmbiente  + ' necesitás?'))      
    }

    return numeroAmbientes

}

const informarBarrios =  () => {

    alert('Acá están los barrios que podés elegir: \n 1- Belgrano \n 2- Palermo \n 3- Recoleta \n 4- Caballito \n  5- Almagro \n  6- Mataderos \n  7- Barracas \n  8- La Boca ')

}

const nombreBarrioElegido = (numeroBarrio) => {

    switch (numeroBarrio) {
        case 1:
            nombreBarrio = 'Belgrano'
            break
        case 2:
            nombreBarrio = 'Palermo'
            break
        case 3:
            nombreBarrio = 'Recoleta'
            break
        case 4:
            nombreBarrio = 'Caballito'
            break
        case 5:
            nombreBarrio = 'Almagro'
            break
        case 6:
            nombreBarrio = 'Mataderos'
            break
        case 7:
            nombreBarrio = 'Barracas'
            break
        case 8:
            nombreBarrio = 'La Boca'
            break
        default:
            alert('No elegiste ningún barrio! Igual te contamos los valores de metro cuadrado por cada barrio: \n 1- Belgrano: u$s '  + metroBelgrano + ' \n 2- Palermo: u$s '  + metroBelgrano + ' \n 3- Recoleta: u$s '  + metroPalermo + ' \n 4- Caballito: u$s '  + metroCaballito + ' \n  5- Almagro: u$s '  + metroAlmagro + ' \n  6- Mataderos: u$s '  + metroMataderos + ' \n  7- Barracas: u$s '  + metroBarracas + ' \n  8- La Boca: u$s '  + metroBoca + ' \n Y que un departamento de 2 ambientes con 1 dormitorios más cocina y Living Comedor de ' + metrosDosAmbientes + ' metros cuadrados te saldría en promedio : u$s ' + promedioDosAmbientes)
            nombreBarrio = ''
            break
    }

    return nombreBarrio   
} 

const metrosPropiedad = (dormitorios,banios) => {

   const metrosTotales = (metrosDormitorio * dormitorios) + (metrosLiving * 1) + (metrosCocina * 1) + (metrosBano * banios)

   return metrosTotales
}

const valorMetroCuadrado = (nombreBarrio) => {

    switch (nombreBarrio) {
        case 'Belgrano':
            valorMetro = metroBelgrano
            break
        case 'Palermo':
            valorMetro = metroPalermo
            break
        case 'Recoleta':
            valorMetro = metroRecoleta
            break
        case 'Caballito':
            valorMetro = metroBelgrano
            break
        case 'Almagro':
            valorMetro = metroPalermo
            break
        case 'Mataderos':
            valorMetro = metroMataderos
            break
        case 'Barracas':
            valorMetro = metroRecoleta
            break
        case 'La Boca':
            valorMetro = metroRecoleta
            break
        default:
            alert('Te contamos los valores de metro cuadrado por cada barrio: \n 1- Belgrano: u$s '  + metroBelgrano + ' \n 2- Palermo: u$s '  + metroBelgrano + ' \n 3- Recoleta: u$s '  + metroPalermo + ' \n 4- Caballito: u$s '  + metroCaballito + ' \n  5- Almagro: u$s '  + metroAlmagro + ' \n  6- Mataderos: u$s '  + metroMataderos + ' \n  7- Barracas: u$s '  + metroBarracas + ' \n  8- La Boca: u$s '  + metroBoca + ' \n Y que un departamento de 2 ambientes con 1 dormitorios más cocina y Living Comedor de ' + metrosDosAmbientes + ' metros cuadrados te saldría en promedio : u$s ' + dosAmbientes)
            valorMetro = 0
            break
    }

    return valorMetro
}

let nombreCliente = clienteValidado(cliente)

if(nombreCliente === null) {

    alert('Gracias por utilizar los servicios de Casas JS')

} else {

    dondeVivir(nombreCliente.toUpperCase())
}



