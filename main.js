alert('HOLA!! Estás ingresando al simulador del costo de la Casa de tus Sueños!')
alert('Somos Casas JS!')
alert('Expertos en Tasación y Venta de Propiedades')
alert('Sabías que el valor de una propiedad depende mayormente de:  \n - La Ubicación \n - La Cantidad de Ambientes  \n - La Cantidad de Metros Cuadrados ')

alert('Ahora, imagina en que zona te gustaría vivir, y cuantos ambientes te gustaría que tenga tu próxima vivienda.')
alert('Si querés saber cuanto dinero necesitás para comprar esa propiedad, decinos tu nombre y continuemos: ')

const metrosDormitorio = 9
const metrosLiving = 18
const metrosCocina = 6
const metrosBano = 5
const propiedades = []

let cliente = ''

cliente = prompt('Ingresá tu Nombre:')


const barriosActualizadoPromedio = (cliente) => {
   
     barrios.forEach((barrio) => {
        barrio.promedio = valorPromedioBarrio(barrio.metroMinimo, barrio.metroMaximo) 
    })

    const valorPromedioCaba = valorPromedioTotal()

    const masBarato = buscarMasBarato()
    const masCaro = buscarMasCaro()

    alert(cliente + ', te vamos a mostrar cuánto vale en metro cuadrado en cada barrio de CABA. \n Tené en cuenta que: \n El valor  PROMEDIO del metro cuadrado es de u$s ' + valorPromedioCaba + '\n El Valor MÍNIMO del metro cuadrado es en el barrio de ' + masBarato.toUpperCase() + '\n El Valor MÁXIMO del metro cuadrado es en el barrio de  ' + masCaro.toUpperCase())

    elegirOrden(cliente)
}

let ordenado = ''
const barrioElegido = []

const ordenPosible = ['1- Alfabéticamente', '2- Menor Valor Metro Cuadrado', '3- Mayor Valor Metro Cuadrado']

const elegirOrden = (cliente) => {

    const orden = parseInt(prompt(cliente + ' ¿Cómo ordenamos los valores? Elegí 1, 2 o 3 \n' + ordenPosible.join('\n')))

    if(orden === 1) {
        ordenarAlfabeticamente()
    } else if (orden === 2) {
        ordenarPromedioMasBaratos()
    } else {
        ordenarPromedioMasCaros()
    }
    
}

const buscarMasBarato = () => {
    const minPromedio = barrios.reduce((minProm, item) => minProm.promedio < item.promedio ? minProm : item
    );

    const barrioMasBarato = minPromedio.nombre + ' con un valor de metro cuadrado promedio de u$s ' + minPromedio.promedio
    return barrioMasBarato

}

const buscarMasCaro = () => {
    const maxPromedio = barrios.reduce((maxProm, item) => maxProm.promedio > item.promedio ? maxProm : item
    );

    const barrioMasCaro = maxPromedio.nombre + ' con un valor de metro cuadrado promedio de u$s ' + maxPromedio.promedio
    return barrioMasCaro

}

const valorPromedioBarrio = (mMinimo,mMaximo) => {
    const valorMetroPromedio = parseInt((mMinimo + mMaximo) / 2)
    return valorMetroPromedio
}

const valorPromedioTotal = () => {
    const sumaBarrios = barrios.length
    const sumaPromedios = barrios.reduce((acc, item) => acc + item.promedio, 0)
    const promedioTodos = parseInt(sumaPromedios / sumaBarrios)
    return promedioTodos
}

const ordenarAlfabeticamente = () => {
    barrios.sort((a,b) => a.nombre - b.nombre)
    mostrarBarrios('Alfabéticamente')
}

const ordenarPromedioMasBaratos = () => {
    barrios.sort((a,b) => a.promedio - b.promedio)
    mostrarBarrios('por Valor Promedio mas Baratos')
}

const ordenarPromedioMasCaros = () => {
    barrios.sort((a,b) => b.promedio - a.promedio)
    mostrarBarrios('por Valor Promedio mas Caros')
}


const mostrarBarrios = (ordenado) => {
    
    const listaBarrios = barrios.map(barrio => {
        return '(' + barrio.id + ') ' + barrio.nombre + ' Valor Metro Mínimo: u$s ' + barrio.metroMinimo + ' Valor Metro Máximo: u$s ' + barrio.metroMaximo + ' PROMEDIO: u$s ' + barrio.promedio
    })

    alert('Lista de barrios ordenados ' + ordenado + '\n\n' + listaBarrios.join('\n'))

    const cambiarOrden = confirm('Si querés cambiar el orden poné "Aceptar" O  "Cancelar" y te muestro el valor de tu barrio preferido')
    if(cambiarOrden) {
        elegirOrden()
    } else {
        elegirBarrio()
    }
    
}


const elegirBarrio = () => {

    let barrioElegido = ''
    let otraPropiedad = true  
    let totalAmbientes = 0
    let totalMetros = 0


    do {

        barrioElegido = prompt('Ingresá el nombre de un barrio para comparar')

        const barrio = barrios.find(barrio => barrio.nombre.toLowerCase() === barrioElegido.toLowerCase());


        if (barrio) {
            alert('Ahora decidí cuantos ambientes querés que tenga.')

            let cantidadDormitorios = parseInt(prompt('¿Cuántos dormitorios necesitás?'))
            let dormitoriosCorrecto = validarAmbientes(cantidadDormitorios, 'Dormitorios')

            let cantidadBanios = parseInt(prompt('¿Cuántos baños necesitás?'))
            let baniosCorrecto = validarAmbientes(cantidadBanios, 'Baños')

            totalMetros = metrosPropiedad(dormitoriosCorrecto,baniosCorrecto)

            totalAmbientes = dormitoriosCorrecto + baniosCorrecto + 1

            const aceptaMetros = confirm('Tu propiedad elegida tiene ' + totalAmbientes + ' ambientes y el total de metros cuadrados standard es de ' + totalMetros + '\n Si querés modificar la cantidad de metros presioná "Cancelar", sino presioná "Aceptar".')

            if(aceptaMetros == false) {

                const nuevosMetros = parseInt(prompt('Ingresá la cantidad de metros que quisieras que tenga tu vivienda (Solo números menores a 300)'))

                totalMetros = validarMetros(nuevosMetros)

            }

            let barrioNombre = barrio.nombre.toUpperCase()
            let barrioMax = barrio.metroMaximo
            let barrioMin = barrio.metroMinimo
            let barrioProm = barrio.promedio

            listaComparar(barrioNombre, barrioMax, barrioMin, barrioProm, totalAmbientes, dormitoriosCorrecto, baniosCorrecto, totalMetros)
           

        } else {

            alert('No tenemos registrado ese barrio.')
        }


        otraPropiedad = confirm('¿Querés agregar otro barrio para comparar?')

    } while (otraPropiedad)

    mostrarPropiedades()

}

class Propiedad {
    constructor(nombreBarrio, metrosMax, metrosMin,metroProm, ambientes, dormitorios, banos, metros) {
        this.nombreBarrio = nombreBarrio.toUpperCase();
        this.metrosMax = parseInt(metrosMax)
        this.metrosMin = parseInt(metrosMin)
        this.metroProm = parseInt(metroProm)
        this.ambientes = ambientes
        this.metros = metros
        this.dormitorios = dormitorios
        this.banos = banos
        this.minimo = parseInt(this.metrosMin * metros)
        this.maximo = parseInt(this.metrosMax * metros)
        this.promedio = parseInt(this.metroProm * metros)
    }
}



const listaComparar = (barrioNombre, barrioMax, barrioMin, barrioProm, totalAmbientes, cantidadDormitorios, cantidadBanios, totalMetros) => {

    const nuevaPropiedad = new Propiedad(barrioNombre, barrioMax, barrioMin, barrioProm, totalAmbientes, cantidadDormitorios, cantidadBanios, totalMetros)

    propiedades.push(nuevaPropiedad)

}

const mostrarPropiedades = () => {

    const listaPropiedades = propiedades.map(propiedad => {
        return '- ' + propiedad.nombreBarrio + '\n Valor Metro -- Max u$s ' + propiedad.metrosMax + ' -- Min u$s ' + propiedad.metrosMin + ' -- Promedio u$s ' + propiedad.metroProm + '\n Ambientes: ' + propiedad.ambientes + ' -- Metros Cuadrados: ' + propiedad.metros + ' -- Dormitorios: ' + propiedad.dormitorios + ' -- Baños: ' + propiedad.banos + '\n Valor Mínimo u$s ' + propiedad.minimo + ' -- Valor Máximo u$s ' + propiedad.maximo + ' -- Valor Promedio u$s ' + propiedad.promedio
    })

    alert('Estas son las propiedades de tus sueños: ' + '\n\n ' + listaPropiedades.join('\n\n'))
    alert('Gracias por tu consulta, esperamos que muy pronto tu SUEÑO se haga realidad. \n ¡NUNCA DEJES DE SOÑAR!')

}

const validarMetros = (nuevosMetros) => {

    while (Number.isNaN(nuevosMetros) ||  nuevosMetros < 0 || nuevosMetros > 300 ) {
        
        alert('Necesitamos el número de Metros y este debe ser un número mayor a 0 y menor de 300. Ingresaste: ' + nuevosMetros)

        nuevosMetros = parseInt(prompt('¿Cuántos metros necesitás?'))      
    }

    return nuevosMetros

}

const validarAmbientes = (numeroAmbientes, tipoAmbiente) => {

    while (Number.isNaN(numeroAmbientes) ||  numeroAmbientes > 6 ) {
        
        alert('Necesitamos el número de ' + tipoAmbiente)

        numeroAmbientes = parseInt(prompt('¿Cuántos ' + tipoAmbiente  + ' necesitás?'))      
    }

    return numeroAmbientes

}

const metrosPropiedad = (dormitorios,banios) => {

    const metrosTotales = (metrosDormitorio * dormitorios) + (metrosLiving * 1) + (metrosCocina * 1) + (metrosBano * banios)

    return metrosTotales
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


let nombreCliente = clienteValidado(cliente)

if(nombreCliente === null) {

    alert('Gracias por utilizar los servicios de Casas JS')

} else {

    barriosActualizadoPromedio(nombreCliente.toUpperCase())
}




