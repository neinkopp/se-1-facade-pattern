class HomeTheater {
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

class AudioPlayer {
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

enum HDRMode {
  ENABLED = "on",
  DISABLED = "off",
}
class TV {
  turnOff() {
    console.debug(`Turned off tv`);
  }
  watch(name: string) {
    console.debug(`Play movie with title ${name}`);
  }
  setHDRMode(mode: HDRMode) {
    console.debug(`Turned ${mode} HDR mode`);
  }
}
