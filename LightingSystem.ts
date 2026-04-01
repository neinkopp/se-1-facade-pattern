class LightingSystem {
  dim(level: number) {
    // .. the actual dimming (Hardware Interface)
    console.debug(`Dimmed lights to ${level}`);
  }

  setRGB(r: number, g: number, b: number) {
    // .. the actual setting of the color (HW)
    console.debug(`Set color to rgb(${r},${g},${b})`);
  }

  turnOn(address: string) {
    console.debug(`Turned on light with address ${address}`);
  }

  turnOffAll() {
    console.log(`Turned off all lighting`);
  }

  get energyUsage(): number {
    // dummy usage
    let usage = 1000;
    console.debug(`Retrieved energy usage (${usage} W)`);
    return usage;
  }
}
