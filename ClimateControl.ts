export class ClimateControl {
  setTemperature(degreesCelsius: number) {
    console.debug(`Set temperature to ${degreesCelsius.toString()} °C`);
  }

  setEcoMode(mode: boolean) {
    console.debug(`Turned ${mode ? "on" : "off"} eco mode`);
  }
}
