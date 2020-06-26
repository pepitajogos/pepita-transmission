<template>
  <div id="app">
    <router-view />
    <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
      <Language
        v-cloak
        v-show="!langSelected"
        @clicked="selectedLanguage"
        ref="Language"
      />
    </transition>
    <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
      <LandingPage
        v-cloak
        v-show="showLanding"
        @chooseLanguage="onLanguageOptionClick"
        @startGame="onStartGameClicked"
        ref="LandingPage"
      />
    </transition>
    <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
      <Game v-if="start" v-cloak ref="Game" @ended="backToStart" />
    </transition>
  </div>
</template>

<script>
import Language from "@/components/Language";
import Game from "@/components/Game";
import LandingPage from "@/components/LandingPage";
const audio = require("@/audio.js");
const anim = require("@/anim.js");

export default {
  name: "App",
  components: {
    Language,
    Game,
    LandingPage,
  },
  data: () => ({
    showLanding: false,
    loaded: false,
    lang: null,
    langSelected: false,
    start: false,
  }),
  watch: {
    showLanding: function(newValue, oldValue) {
      //check if returned to the landing page and switching to the landing page audio track
      if (newValue && !oldValue) audio.playMusic("trilha2");
    },
    $route(to, from) {
      if (to.name == "home" && from.name == "end") {
        this.showLanding = true;
      }
    },
  },
  methods: {
    enter(el, done) {
      anim.enter(el, done);
    },
    leave(el, done) {
      anim.exitTransition(el, done);
    },
    // show start page of the game
    onStartGameClicked() {
      this.showLanding = false;
      this.start = true;
      //console.log(this.langSelected);
      // this.$refs.Start.show()
    },
    onLanguageOptionClick() {
      this.showLanding = false;
      this.langSelected = false;
      this.$nextTick(() => {
        this.$refs.Language.show();
        this.$refs.LandingPage.hide();
      });
    },
    selectedLanguage(lang) {
      document.querySelector("body").setAttribute("data-lang", lang);
      this.language(lang);
      this.langSelected = true;
      this.showLanding = true;
      this.$nextTick(() => {
        this.$refs.Language.hide();
        this.$refs.LandingPage.show();
      });
    },
    startedGame(value) {
      if (value) {
        this.start = !this.start;
        this.$nextTick(() => {
          this.$refs.Game.show();
        });
      }
    },
    backToStart: function() {
      this.showLanding = false;
      this.loaded = false;
      this.start = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: $regular;
}
</style>
