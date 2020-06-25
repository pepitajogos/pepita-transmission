import { Howl, Howler } from "howler";

var music = null;
var musicVolume = 0.6;
var sfxVolume = 0.8;
var fadeOutDuration = 500;
var fadeInDuration = 200;

const sounds = {
    click: null,
    ambiencia: null,
    trilha1: null,
    trilha2: null,
}

export function loadAudio() {
    sounds.trilha1 = new Howl({
        src: [require('@/assets/audios/Transmission_Trilha_Ambiencia.mp3')],
        loop: true,
        volume: musicVolume,
        buffer: true
    });
    sounds.trilha2 = new Howl({
        src: [require('@/assets/audios/Transmission_Trilha_2.mp3')],
        loop: true,
        volume: musicVolume,
        buffer: true
    });
    sounds.ambiencia = new Howl({
        src: [require('@/assets/audios/Ambiencia_Vozerio.mp3')],
        volume: sfxVolume,
    });
    sounds.click = new Howl({
        src: [require('@/assets/audios/Transmission_Click1.mp3')],
        volume: sfxVolume,
    });
}

export function playOnce(id) {
    const once = sounds[id];
    once.play();
}

export function playMusic(id) {
    if (music != null) {
        music.fade(musicVolume, 0, fadeOutDuration);
    }
    music = sounds[id];
    music.play();
    music.fade(0, musicVolume, fadeInDuration);
}