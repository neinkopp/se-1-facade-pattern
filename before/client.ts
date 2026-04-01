import { SecuritySystem, SecuritySystemState } from "../SecuritySystem";
import { ClimateControl } from "../ClimateControl";
import { LightingSystem } from "../LightingSystem";
import { TV } from "../HomeTheater";

function clientBefore() {
  // ... let's say we want to watch our favorite movie ...
  const securitySystem = new SecuritySystem();
  if (securitySystem.state === SecuritySystemState.ARMED) {
    throw new Error("Cannot watch movie when security system is armed");
  }
  const climate = new ClimateControl();
  climate.setTemperature(23);
  const lightingSystem = new LightingSystem();
  lightingSystem.dim(0.1);
  const tv = new TV();
  tv.watch("Barbie");
}
