function ejercicio5(Precio_basico) { 
    let impuesto = 0;

    if (Precio_basico > 20 && Precio_basico <= 40) {
        impuesto = 0.3 * (Precio_basico - 20);
    } else if (Precio_basico > 40 && Precio_basico <= 500) {
        impuesto = 0.3 * 20 + 0.4 * (Precio_basico - 40);
    } else if (Precio_basico > 500) {
        impuesto = 0.3 * 20 + 0.5 * (Precio_basico - 500) + 0.4 * (500 - 40);
    }

    const Precio_Total = Precio_basico + impuesto;
    return Precio_Total.toFixed(2);
}
