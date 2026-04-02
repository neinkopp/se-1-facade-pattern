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
  const lightingSystem = new LightingSystem();
  const tv = new TV();

  climate.setTemperature(23);
  lightingSystem.dim(0.1);
  tv.watch("Barbie");
}
