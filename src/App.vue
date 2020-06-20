<template>
  <div id="app">
    <router-view />
    <transition v-on:enter="enter">
      <Language v-show="!langSelected" @clicked="selectedLanguage" ref="Language" />
    </transition>
    <transition v-on:enter="enter">
      <LandingPage
        v-show="showLanding"
        @chooseLanguage="onLanguageOptionClick"
        @startGame="onStartGameClicked"
        ref="LandingPage"
      />
    </transition>
    <transition v-on:enter="enter">
      <Start v-show="!start && !showLanding && langSelected" @clicked="startedGame" ref="Start" />
    </transition>
    <transition v-on:enter="enter">
      <Game v-show="start" ref="Game" @ended="backToStart" />
    </transition>

    <RotationLock />
  </div>
</template>

<script>
  import Language from '@/components/Language'
  import Start from '@/components/Start'
  import Game from '@/components/Game'
  import Slide from '@/components/Slide'
  import RotationLock from '@/components/RotationLock'
  import LandingPage from '@/components/LandingPage'
  import { TweenMax } from 'gsap'

  export default {
    name: 'App',
    components: {
      Language,
      Start,
      Game,
      Slide,
      RotationLock,
      LandingPage
    },
    data: () => ({
      showLanding: false,
      loaded: false,
      lang: null,
      langSelected: false,
      start: false
    }),
    methods: {
      enter(el, done) {
        const tl = new TimelineMax({
          onComplete: done
        })

        tl.set(el, {
          autoAlpha: 0,
          scale: 2,
          transformOrigin: '50% 50%'
        })

        tl.to(el, 1, {
          autoAlpha: 1,
          scale: 1,
          ease: Power4.easeOut
        })
      },
      // show start page of the game
      onStartGameClicked() {
        this.showLanding = false
        // this.start = true
        console.log(this.langSelected)
        // this.$refs.Start.show()
      },
      onLanguageOptionClick() {
        this.showLanding = false
        this.langSelected = false
        this.$nextTick(() => {
          this.$refs.Language.show()
          this.$refs.LandingPage.hide()
        })
      },
      selectedLanguage(lang) {
        document.querySelector('body').setAttribute('data-lang', lang)
        this.language(lang)
        this.langSelected = true
        this.showLanding = true
        this.$nextTick(() => {
          this.$refs.Language.hide()
          this.$refs.LandingPage.show()
        })
      },
      startedGame(value) {
        if (value) {
          this.start = !this.start
          this.$nextTick(() => {
            this.$refs.Start.hide()
            this.$refs.Game.show()
          })
        }
        //  else {
        //   this.langSelected = value
        //   this.$nextTick(() => {
        //     this.$refs.Language.show()
        //   })
        // }
      },
      backToStart: function() {
        this.showLanding = false
        this.loaded = false
        this.start = false
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: $regular;
  }
</style>
