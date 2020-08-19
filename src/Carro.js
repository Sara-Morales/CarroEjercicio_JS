import "./styles.css";

class Carro {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }
  elegir() {
    console.log(`Su carro es:  ${this.marca}, ${this.color},${this.modelo}`);
    return this;
  }
  encender() {
    setTimeout(() => console.log(`El carro encendió`), 2000);
    setTimeout(() => console.log(`El carro arrancó *brum brum* 🚗💨💨`), 3000);
    return this;
  }
  velocidad() {
    setTimeout(() => console.log(`El carro va a 300km/h`), 4000);
    return this;
  }

  frenar() {
    setTimeout(() => console.log(`El carro esta frenando`), 7000);

    setTimeout(() => console.log(`El carro frenó en la gasolineria`), 9000);
    return this;
  }

  gasolina() {
    setTimeout(() => console.log(`El carro recargo gasolina  `), 11000);
  }
  volvioarrancar() {
    setTimeout(() => console.log(`El carro volvio a arrancar  🚗💨💨 *brummm*`), 13000);
    return this;
  }
  destino() {
    setTimeout(() => console.log(`El carro llego a su destino 🌆`), 15000);
    return this;
  }
}
const carroFerrari = new Carro("Ferrari", "Rojo", "Modelo 2020");
console.log(carroFerrari.elegir());
console.log(carroFerrari.encender());
console.log(carroFerrari.velocidad());
console.log(carroFerrari.frenar());
console.log(carroFerrari.gasolina());
console.log(carroFerrari.volvioarrancar());
console.log(carroFerrari.destino());
