import { Howl, Howler } from "howler";
const sfxAssets = {
  click: require('@/assets/audios/Transmission_Click1.mp3'),
  ambiencia: require('@/assets/audios/Ambiencia_Vozerio.mp3')
};
const musicAssets = {
  trilha1: require('@/assets/audios/Transmission_Trilha_1.mp3'),
  trilha2: require('@/assets/audios/Transmission_Trilha_2.mp3')
};

var music = null;
var musicVolume = 0.6;
var sfxVolume = 0.8;
var fadeDuration = 500;

export function playOnce(id) {
  const once = new Howl({
    src: [sfxAssets[id]],
    volume: sfxVolume
  });
  once.play();
}

export function playMusic(id) {
  if (music != null) {
    music.fade(musicVolume, 0, fadeDuration);
  }
  music = new Howl({
    src: [musicAssets[id]],
    loop: true,
    volume: musicVolume
  });
  music.play();
}

