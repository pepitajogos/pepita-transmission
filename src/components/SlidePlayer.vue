<template>
  <div>
    <Slide
      v-for="slide in slides"
      v-bind:key="slide.title"
      v-show="currentSlide == slide"
      ref="Slide"
      :slide="slide"
      @goToSlide="goToSlide"
      @finish="finish"
    />
  </div>
</template>

<script>
  import Slide from './Slide'
  import slideData from '@/assets/slides.json'
  const audio = require('@/audio.js')

  export default {
    name: 'SlidePlayer',
    data: () => ({
      isLoaded: false,
      slides: [],
      entryPoint: null,
      currentSlide: null
    }),
    components: {
      Slide
    },
    mounted() {
      this.fetchSlides()
    },
    methods: {
      fetchSlides() {
        this.slides = slideData.slides
        this.entryPoint = slideData.entry_point
        this.currentSlide = this.slides[this.entryPoint]
        this.isLoaded = true
      },
      finish() {
        this.$emit('finished')
        this.$router.push('/end')
      },
      goToSlide(slideId) {
        audio.playOnce('click')
        if (this.slides[slideId]) {
          this.currentSlide = this.slides[slideId]
          if (this.slides[slideId].sound_effect) audio.playOnce(this.slides[slideId].sound_effect)
        } else throw `O slide ${slideId} não existe.`
      }
    }
  }
</script>
