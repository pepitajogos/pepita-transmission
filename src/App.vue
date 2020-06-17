<template>
  <div id="app">
    <router-view />
    <transition>
      <LandingPage v-show="showLanding" @clicked="hideLandingPage" ref="LandingPage" />
    </transition>
    <transition v-on:enter="enter">
      <Language v-show="!showLanding && !langSelected" @clicked="selectedLanguage" ref="Language" />
    </transition>
    <transition v-on:enter="enter">
      <Start v-show="!start && !showLanding && langSelected" @clicked="startedGame" ref="Start" />
    </transition>
    <transition v-on:enter="enter">
      <Game v-show="start" ref="Game" />
    </transition>

    <RotationLock />
  </div>
</template>

<script>
import Language from "@/components/Language";
import Start from "@/components/Start";
import Game from "@/components/Game";
import Slide from "@/components/Slide";
import RotationLock from "@/components/RotationLock";
import LandingPage from "@/components/LandingPage";
import { TweenMax } from "gsap";

export default {
  name: "App",
  components: {
    Language,
    Start,
    Game,
    Slide,
    RotationLock,
    LandingPage
  },
  data: () => ({
    showLanding: true,
    loaded: false,
    lang: null,
    langSelected: false,
    start: false
  }),
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      });

      tl.set(el, {
        autoAlpha: 0,
        scale: 2,
        transformOrigin: "50% 50%"
      });

      tl.to(el, 1, {
        autoAlpha: 1,
        scale: 1,
        ease: Power4.easeOut
      });
    },
    hideLandingPage() {
      this.showLanding = false;
    },
    selectedLanguage(lang) {
      document.querySelector("body").setAttribute("data-lang", lang);
      this.language(lang);
      this.langSelected = !this.langSelected;
      this.$nextTick(() => {
        this.$refs.Language.hide();
        this.$refs.Start.show();
      });
    },
    startedGame(value) {
      if (value) {
        this.start = !this.start;
        this.$nextTick(() => {
          this.$refs.Start.hide();
          this.$refs.Game.show();
        });
      } else {
        this.langSelected = value;
        this.$nextTick(() => {
          this.$refs.Language.show();
        });
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: $regular;
}
</style>
