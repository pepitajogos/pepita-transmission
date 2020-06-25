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
import * as data from "@/data";
import Slide from "./Slide";
import slideData from "@/assets/slides.json";
const audio = require("@/audio.js");

export default {
  name: "SlidePlayer",
  data: () => ({
    isLoaded: false,
    slides: [],
    entryPoint: null,
    currentSlide: null,
  }),
  components: {
    Slide,
  },
  mounted() {
    this.fetchSlides();
  },
  methods: {
    fetchSlides() {
      data.addCountByCountry();
      this.slides = slideData.slides;
      this.entryPoint = slideData.entry_point;
      this.goToSlide(this.entryPoint);
      this.isLoaded = true;
    },
    finish(result) {
      this.$emit("finished");
      this.addResultToBase(result);
      this.$router.push("/end");
    },
    async addResultToBase(final) {
      const result = {
        ending: final,
        country: await data.getCountry(),
      };

      await data.addResult(result);
    },
    goToSlide(slideId) {
      audio.playOnce("click");
      if (this.slides[slideId]) {
        this.currentSlide = this.slides[slideId];
        if (this.slides[slideId].sound_effect)
          audio.playOnce(this.slides[slideId].sound_effect);
      } else throw `O slide ${slideId} não existe.`;
    },
  },
};
</script>
