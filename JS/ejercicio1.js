function ejercicio1(radio, altura) {
    let area
    let volumen

    area = 2 * radio * Math.PI * (radio + altura)
    volumen = Math.PI * (radio**2 ) * altura

    volumen = volumen.toFixed(2)
    area = area.toFixed(2)

    r = [area, volumen]

    return r

}

