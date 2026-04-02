import { ClimateControl } from "../ClimateControl";
import { AudioPlayer, TV, HDRMode } from "../HomeTheater";
import { LightingSystem } from "../LightingSystem";
import { SecuritySystem, SecuritySystemState } from "../SecuritySystem";

export class SmartHomeFacade {
  private _securitySystem: SecuritySystem;
  private _climateControl: ClimateControl;
  private _lightingSystem: LightingSystem;
  private _audioPlayer: AudioPlayer;
  private _tv: TV;

  constructor() {
    this._securitySystem = new SecuritySystem();
    this._climateControl = new ClimateControl();
    this._lightingSystem = new LightingSystem();
    this._audioPlayer = new AudioPlayer();
    this._tv = new TV();
  }

  public watchMovie(title: string) {
    console.debug("Setting up home cinema...");

    if (this._securitySystem.state === SecuritySystemState.ARMED) {
      throw new Error(
        "Couldn't set up home cinema because security system is armed",
      );
    }

    this._lightingSystem.dim(0.1);
    this._climateControl.setTemperature(22);
    this._audioPlayer.stopPlaying();
    this._tv.setHDRMode(HDRMode.AUTO);
    this._tv.watch(title);

    console.debug("Set up home cinema. Enjoy!");
  }
}
