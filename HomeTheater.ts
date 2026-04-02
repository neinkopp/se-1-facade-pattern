export class HomeTheaterFacade {
  private _audioPlayer: AudioPlayer;
  private _tv: TV;

  constructor() {
    this._audioPlayer = new AudioPlayer();
    this._tv = new TV();
  }

  playMovie(title: string) {
    this._tv.watch(title);
  }

  playSong(title: string) {
    this._tv.turnOff();
    this._audioPlayer.playTitle(title);
  }
}

export class AudioPlayer {
  playTitle(name: string) {
    console.debug(`Play audio with title ${name}`);
  }

  stopPlaying() {
    console.debug(`Stopped playing and cleared queue`);
  }

  addTitleToQueue() {
    console.debug(`Added title to queue`);
  }
}

export enum HDRMode {
  DISABLED = "off",
  AUTO = "auto",
  HDR10 = "HDR10",
  HDR10_PLUS = "HDR10+",
  DOLBY_VISION = "Dolby Vision",
}

export class TV {
  turnOff() {
    console.debug(`Turned off tv`);
  }
  watch(name: string) {
    console.debug(`Play movie with title ${name}`);
  }
  setHDRMode(mode: HDRMode) {
    console.debug(`Set HDR mode to: ${mode}`);
  }
}
