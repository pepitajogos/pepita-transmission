<template>
  <Slide @finish="finish" ref="Slide" :slide="currentSlide" v-if="isLoaded" @goToSlide="goToSlide" />
</template>

<script>
  import Slide from './Slide'

  export default {
    name: 'SlidePlayer',
    data: () => ({
      isLoaded: false,
      slides: [],
      entryPoint: null,
      currentSlide: null
    }),
    mounted() {
      this.fetchSlides()
    },
    components: {
      Slide
    },
    methods: {
      async fetchSlides() {
        const slidesData = await fetch('assets/slides/slides.json').then((res) => res.json())

        this.slides = slidesData.slides
        this.entryPoint = slidesData.entry_point
        this.isLoaded = true
        this.currentSlide = this.slides[this.entryPoint]
      },

      finish() {
        this.$emit('finished')
        this.$router.push('/end')
      },

      goToSlide(slideId) {
        if (this.slides[slideId]) {
          this.currentSlide = this.slides[slideId]
        } else throw `O slide ${slideId} não existe.`
      }
    }
  }
</script>
