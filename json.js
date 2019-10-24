class Vehiculo {
    constructor(tipo, medio, velocidad_punta, c_transporte) {
        this.tipo = tipo;
        this.medio = medio;
        this.velocidad_punta = velocidad_punta;
        this.c_transporte = c_transporte;
    }
}

function init() {
    var coche = new Vehiculo("Coche", "Carretera", 120, 7);
    console.log(coche);
    var cocheJSON = JSON.stringify(coche);
    console.log(cocheJSON);

    var barco = new Mascota("perro", "Bozal", 7, ["comer", "ladrar", "cazar conejos"]);
    console.log(barco);
    var barcoJSON = JSON.stringify(barco);
    console.log(barcoJSON);
    deserialize(barcoJSON);
}