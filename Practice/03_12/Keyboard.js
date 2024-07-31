class Keyboard {
  constructor(size, color, price, numpad, lights, wireless, stand) {
    this.size = size;
    this.color = color;
    this.price = price;
    this.numpad = numpad;
    this.lights = lights;
    this.wireless = wireless;
    this.stand = stand;
  }

  changeStand(status) {
    this.stand = status;
  }
}

export default Keyboard;
