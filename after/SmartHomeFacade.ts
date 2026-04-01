import { ClimateControl } from "../ClimateControl";
import { AudioPlayer, TV, HDRMode } from "../HomeTheater";
import { LightingSystem } from "../LightingSystem";

export class SmartHomeFacade {
  private _climateControl: ClimateControl;
  private _audioPlayer: AudioPlayer;
  private _tv: TV;
  private _lightingSystem: LightingSystem;

  constructor() {
    this._climateControl = new ClimateControl();
    this._audioPlayer = new AudioPlayer();
    this._tv = new TV();
    this._lightingSystem = new LightingSystem();
  }

  public watchMovie(title: string) {
    console.debug("Setting up home cinema...");

    this._lightingSystem.dim(0.1);
    this._climateControl.setTemperature(22);
    this._audioPlayer.stopPlaying(); // Ensure music doesn't overlap movie
    this._tv.setHDRMode(HDRMode.ENABLED);
    this._tv.watch(title);

    console.debug("Set up home cinema. Enjoy!");
  }

  public leaveHouse() {
    console.log("Shutting down the house...");

    this._tv.turnOff();
    this._audioPlayer.stopPlaying();
    this._lightingSystem.turnOffAll();
    this._climateControl.setEcoMode(true);

    console.debug("House is secure to leave");
  }
}
