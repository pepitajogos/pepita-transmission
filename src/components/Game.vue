<template>
  <article class="game">
    <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
      <LoadingSpinner v-show="!loaded" />
    </transition>
    <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
      <SlidePlayer v-show="loaded" @finished="finishedGame" />
    </transition>
    <RotationLock />
  </article>
</template>

<script>
import SlidePlayer from "./SlidePlayer";
import RotationLock from "./RotationLock";
import LoadingSpinner from "./LoadingSpinner";
import { TimelineMax } from "gsap";
const audio = require("@/audio.js");
const anim = require("@/anim.js");

export default {
  name: "Game",
  data: () => ({
    gameFinished: false,
    loaded: false
  }),
  components: {
    SlidePlayer,
    RotationLock,
    LoadingSpinner
  },
  methods: {
    finishedGame() {
      this.gameFinished = !this.gameFinished;
      this.$emit("ended"); // reset the home page
    },
    finishLoad() {
      this.loaded = true;
      audio.playMusic("trilha1");
    },
    enter(el, done) {
      anim.enter(el, done);
    },
    leave(el, done) {
      anim.exitTransition(el, done);
    }
  },
  mounted: function() {
    var tl = new TimelineMax({ onComplete: this.finishLoad });
    tl.to({}, 2, {});
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
