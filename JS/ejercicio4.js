 function ejercicio4(Sueldo) {

    let aumento
    let Nuevo_Sueldo

    if (Sueldo < 1000) {

        aumento = Sueldo * 0.15
        Nuevo_Sueldo = Sueldo + aumento

        return Nuevo_Sueldo.toFixed(2)
        
    } else {
        
        aumento = Sueldo * 0.12
        Nuevo_Sueldo = Sueldo + aumento

        return Nuevo_Sueldo.toFixed(2)

    }

    
 }