export enum SecuritySystemState {
  ARMED = "armed",
  DISARMED = "disarmed",
}

export class SecuritySystem {
  arm() {
    // .. actual arming of the security system
    console.debug(`Armed security system`);
  }

  disarm() {
    // .. actual disarming of the security system
    console.debug(`Disarmed security system`);
  }

  get state(): SecuritySystemState {
    // dummy state
    let state = SecuritySystemState.DISARMED;
    console.debug(`Got security system state, is ${state}`);
    return state;
  }
}
