<template>
  <div id="app">
    <router-view />
    <transition v-on:enter="enter">
      <Language
        v-show="!langSelected"
        @clicked="selectedLanguage"
        ref="Language"
      />
    </transition>
    <transition v-on:enter="enter">
      <Start
        v-show="!start && langSelected"
        @clicked="startedGame"
        ref="Start"
      />
    </transition>
    <transition v-on:enter="enter">
      <Game v-show="start" ref="Game" />
    </transition>

    <div class="rotation-lock">
      <div class="rotation-lock-content">
        <img src="./assets/rotate.svg" alt="Rotate" />
        <p>Rotate your phone to landscape.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Language from "@/components/Language";
import Start from "@/components/Start";
import Game from "@/components/Game";
import Slide from "@/components/Slide";
import { TweenMax } from "gsap";

export default {
  name: "App",
  components: {
    Language,
    Start,
    Game,
    Slide,
  },
  data: () => ({
    loaded: false,
    lang: null,
    langSelected: false,
    start: false,
  }),
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done,
      });

      tl.set(el, {
        autoAlpha: 0,
        scale: 2,
        transformOrigin: "50% 50%",
      });

      tl.to(el, 1, {
        autoAlpha: 1,
        scale: 1,
        ease: Power4.easeOut,
      });
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
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: $regular;
}

// rotation lock
.rotation-lock {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  z-index: 99999;

  &-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    img {
      width: 65px;
    }

    p {
      font-size: 18px;
      color: #ffffff;
    }
  }
}
@media all and (orientation:portrait) {
  .rotation-lock {
    display: block;
  }
}
</style>
