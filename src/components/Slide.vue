<template>
  <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
    <article class="slide">
      <div v-if="this.slide.image">
        <img
          v-if="this.slide.language_image"
          class="bg-image"
          :src="
            require(`../assets/slides/images/${this.language()}/${
              this.slide.image
            }`)
          "
        />
        <img
          v-else
          class="bg-image"
          :src="require(`../assets/slides/images/${this.slide.image}`)"
        />
      </div>
      <div class="slide__content">
        <div v-if="slide.form && slide.form == true">
          <SlideForm @onFormSubmit="onFormSubmit" />
        </div>
        <div id="slide__linkbox" :class="linkBoxClass">
          <a
            href
            v-for="step in slide.steps"
            :key="step.id"
            :class="stepStyle(step)"
            @click.prevent="changeSlide(step)"
          >
            <p
              v-if="slide.state && slide.state == 'world-stats'"
              class="world-stats__text"
            >
              <span class="bigger">
                <RatioByEnding :ending="finalGame" />%
              </span>
              {{ $t(step.content) }}
            </p>

            <span v-else>{{ $t(step.content) }}</span>
          </a>
        </div>
      </div>
    </article>
  </transition>
</template>

<script>
import RatioByEnding from "./RatioByEnding";
import SlideForm from "@/components/SlideForm";
const anim = require("@/anim.js");

export default {
  name: "Slide",
  props: ["slide"],
  components: {
    RatioByEnding,
    SlideForm,
  },
  data: () => ({
    errored: false,
    entry: null,
    lang: null,
    result: null,
  }),
  computed: {
    finalGame: function() {
      this.result = this.slide.ending;
      return this.result;
    },
    linkBoxClass: function() {
      return {
        smartphone: "smartphone",
        smartphone2: "smartphone2",
        "world-stats": "world-stats",
        laptop: "laptop",
      }[this.slide.state];
    },
  },
  methods: {
    onFormSubmit() {
      this.changeSlide(this.slide.steps[0]);
    },
    changeSlide(step) {
      if (step.link_to) {
        this.$emit("goToSlide", step.link_to);
      } else if (step.finish) {
        localStorage.result = this.result;
        this.$emit("finish", this.result);
      }
    },
    stepStyle: function(step) {
      return (
        {
          smartphone: "smartphone__link",
          smartphone2: "smartphone2__link",
          "world-stats": "slide__default " + step.style,
          laptop: "laptop__link",
        }[this.slide.state] || "slide__default " + step.style
      );
    },
    enter(el, done) {
      anim.enterTransition(el, done);
    },
    leave(el, done) {
      anim.exitTransition(el, done);
    },
  },
};
</script>

<style lang="scss">
.slide {
  background: $black;
  color: $white;
  width: 100vw;
  height: 100vh;
  position: absolute;
}
.bg-image {
  width: 100vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
.slide__default {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgba($white, 0.8);
  position: absolute;
  cursor: pointer;
  border: 1px solid $border-link;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5em 1em;
  max-width: 29vw;
  @include font-scale(10, 30);
  font-weight: 400;
  white-space: pre-wrap;
}

.slide__content {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  @include center(relative);
}

.slide .center {
  @include center(absolute);
}

.slide .top {
  top: 5%;
  &.center {
    transform: translateX(-50%) translateY(0);
  }
}

.slide .bottom {
  bottom: 20%;
  top: inherit;
  &.center {
    transform: translateX(-50%) translateY(0);
  }
}

.slide .left {
  left: 5%;
  &.center {
    transform: translateX(0) translateY(-50%);
  }
}

.slide .right {
  right: 5%;
  left: inherit;
  &.center {
    transform: translateX(0) translateY(-50%);
  }
}

.slide .full-left {
  width: 50%;
  height: 100%;
  left: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  max-width: inherit;
  @include font-scale(22, 52);
}

.slide .full-right {
  width: 50%;
  height: 100%;
  right: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  max-width: inherit;
  @include font-scale(22, 52);
}

.slide .full-screen {
  width: 100%;
  height: 100%;
  max-width: 90vw;
  text-align: center;
  border: 0;
  background-color: rgba(0, 0, 0, 0);
  @include center(absolute);
  @include font-scale(14, 45);
}

.slide .smartphone {
  display: flex;
  flex-flow: column;
  color: #000;
  @include font-scale(10, 39);
  position: relative;
  left: 40%;
  padding-top: 40vh;
  width: 28vw;

  @media (orientation: landscape) and (max-width: 1202px) {
    @include font-scale(10, 23);
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    font-family: $regular;
    font-weight: 400;
    color: $black;
  }
}

.slide .smartphone2 {
  display: flex;
  flex-flow: column;
  color: #000;
  @include font-scale(10, 35);
  position: relative;
  left: 35%;
  padding-top: 42vh;
  width: 28vw;

  @media (max-width: 1202px) {
    @include font-scale(10, 20);
  }
  @media (orientation: landscape) and (max-width: 1202px) {
    @include font-scale(10, 20);
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    font-family: $regular;
    font-weight: 400;
    color: $black;
  }
}

.slide .smartphone2__link {
  padding: 1% 0;
  cursor: pointer;
  font-weight: 300;
}

.slide .smartphone__link {
  padding: 1% 0;
  cursor: pointer;
  font-weight: 300;
}

.slide .laptop {
  display: flex;
  flex-flow: column;
  color: #000;
  @include font-scale(10, 35);
  position: relative;
  left: 16%;
  padding-top: 20%;

  @media (max-width: 1202px) {
    @include font-scale(10, 20);
  }

  @media (orientation: landscape) and (max-width: 1202px) {
    @include font-scale(10, 20);
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    font-family: $regular;
    font-weight: 400;
    color: $black;
  }
}

.slide .laptop__link {
  padding: 1% 0;
  cursor: pointer;
}

.slide .world-stats__text {
  width: 35%;
  max-width: 360px;
  color: $black;
  position: relative;
  left: 7%;
  top: -7%;
  @include font-scale(10, 20);

  @media (min-width: 1202px) {
    @include font-scale(8, 25);
  }

  @media (max-width: 450px) {
    @include font-scale(8, 10);
  }

  .bigger {
    @include font-scale(20, 40);
  }
}

.world-stats {
  .slide__default.bottom {
    max-width: 49vw;
  }
}

.world-stats {
  .bottom {
    .bigger {
      display: none;
    }
    .world-stats__text {
      width: inherit;
      color: white;
      font-size: inherit;
      left: inherit;
      top: inherit;
      margin: 0;
    }
  }
}
</style>
