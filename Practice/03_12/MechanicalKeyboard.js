import Keyboard from "./Keyboard.js";

class MechanicalKeyboard extends Keyboard {
  constructor(size, color, price, numpad, lights, wireless, stand, switchType) {
    super(size, color, price, numpad, lights, wireless, stand),
      (this.switchType = switchType);
  }

  changeSwitches(type) {
    this.switchType = type;
  }
}

export default MechanicalKeyboard;
