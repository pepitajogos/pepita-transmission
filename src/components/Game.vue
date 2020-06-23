<template>
  <article class="game">
    <Tutorial v-show="!tutorialFinished" ref="Tutorial" @finished="finishedTutorial" />
    <SlidePlayer v-show="tutorialFinished && !gameFinished" @finished="finishedGame" />
    <RotationLock />
  </article>
</template>

<script>
import Tutorial from "./Tutorial";
import SlidePlayer from "./SlidePlayer";
import RotationLock from "./RotationLock";
const audio = require("@/audio.js");

export default {
  name: "Game",
  data: () => ({
    tutorialFinished: false,
    gameFinished: false
  }),
  components: {
    Tutorial,
    SlidePlayer,
    RotationLock
  },
  methods: {
    show() {
      // console.log('Show Game');
      this.$nextTick(() => {
        this.$refs.Tutorial.show();
      });
    },
    hide() {
      // console.log('Hide Game');
    },
    finishedTutorial() {
      this.tutorialFinished = !this.tutorialFinished;
      this.musicPlay();
    },
    finishedGame() {
      this.gameFinished = !this.gameFinished;
      this.$emit("ended"); // reset the home page
    },
    musicPlay() {
      audio.playMusic("trilha1");
    }
  }
};
</script>

<style lang="scss">
.game {
  background: $black;
  color: $white;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 2;
}

.game__content {
  @include center(relative);
}

.game__title {
  text-transform: uppercase;
  margin: 0;
}

.game__new {
  text-transform: uppercase;
  text-decoration: none;
  color: $white;
}
</style>
