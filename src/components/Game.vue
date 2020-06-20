<template>
  <article class="game">
    <Tutorial v-show="!tutorialFinished" ref="Tutorial" @finished="finishedTutorial" />
    <SlidePlayer v-show="tutorialFinished && !gameFinished" @finished="finishedGame" />
  </article>
</template>

<script>
  import Tutorial from './Tutorial'
  import SlidePlayer from './SlidePlayer'

  export default {
    name: 'Game',
    data: () => ({
      tutorialFinished: false,
      gameFinished: false
    }),
    components: {
      Tutorial,
      SlidePlayer
    },
    methods: {
      show() {
        // console.log('Show Game');
        this.$nextTick(() => {
          this.$refs.Tutorial.show()
        })
      },
      hide() {
        // console.log('Hide Game');
      },
      finishedTutorial() {
        this.tutorialFinished = !this.tutorialFinished
        this.musicPlay()
      },
      finishedGame() {
        this.gameFinished = !this.gameFinished
        this.$emit('ended') // reset the home page
      },
      musicPlay() {
        const sound = new Howl({
          src: ['assets/slides/audios/Transmission_Trilha_1.mp3', 'assets/slides/audios/Transmission_Trilha_2.mp3'],
          autoplay: true,
          loop: true,
          volume: 0.5
        })

        const sound1 = sound.play(1, 0, 1000, sound1)
        const sound2 = sound.play(1.0, 1000, sound2)
      }
    }
  }
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
