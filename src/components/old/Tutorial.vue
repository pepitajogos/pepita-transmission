<template>
  <article class="tutorial">
    <!-- <Map v-show="!sMap" @clicked="map" /> -->
    <Tutorial1 v-show="!sTutorial1" @clicked="tutorial1" />
    <Tutorial2 v-show="!sTutorial2 && sTutorial1" @clicked="tutorial2" />
    <Tutorial3 v-show="!sTutorial3 && sTutorial2" @clicked="tutorial3" />
    <Tutorial4 v-show="!sTutorial4 && sTutorial3" @clicked="tutorial4" />
    <Tutorial5 v-show="!sTutorial5 && sTutorial4" @clicked="tutorial5" />
    <Tutorial6 v-show="!sTutorial6 && sTutorial5" @clicked="tutorial6" />
    <Tutorial7 v-show="!sTutorial7 && sTutorial6" @clicked="tutorial7" />
  </article>
</template>

<script>
  import Map from '@/components/Map'
  import Tutorial1 from './tutorial/Tutorial1'
  import Tutorial2 from './tutorial/Tutorial2'
  import Tutorial3 from './tutorial/Tutorial3'
  import Tutorial4 from './tutorial/Tutorial4'
  import Tutorial5 from './tutorial/Tutorial5'
  import Tutorial6 from './tutorial/Tutorial6'
  import Tutorial7 from './tutorial/Tutorial7'
  import { Howl, Howler } from 'howler'

  export default {
    name: 'Tutorial',
    data: () => ({
      sTutorial1: false,
      sTutorial2: false,
      sTutorial3: false,
      sTutorial4: false,
      sTutorial5: false,
      sTutorial6: false,
      sTutorial7: false
      // sMap: false
    }),
    components: {
      Tutorial1,
      Tutorial2,
      Tutorial3,
      Tutorial4,
      Tutorial5,
      Tutorial6,
      Tutorial7,
      Map
    },
    methods: {
      show() {
        const hide = () => {
          this.$emit('finished')
        }
        this.playMouseClickSoundEffect()
      },
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
      playMouseClickSoundEffect() {
        const mouse = new Howl({
          src: 'assets/slides/audios/Transmission_Click1.mp3'
        })
        mouse.play()
      },
      map() {
        this.sMap = !this.sMap
      },
      tutorial1() {
        this.sTutorial1 = !this.sTutorial1
      },
      tutorial2() {
        this.sTutorial2 = !this.sTutorial2
      },
      tutorial3() {
        this.sTutorial3 = !this.sTutorial3
      },
      tutorial4() {
        this.sTutorial4 = !this.sTutorial4
      },
      tutorial5() {
        this.sTutorial5 = !this.sTutorial5
      },
      tutorial6() {
        this.sTutorial6 = !this.sTutorial6
      },
      tutorial7() {
        this.$emit('finished')
      }
    }
  }
</script>

<style lang="scss">
  .tutorial {
    color: $darker;
    width: 100vw;
    height: 100vh;
  }
</style>
