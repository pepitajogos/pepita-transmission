<template>
  <article class="game">
    <SlidePlayer @finished="finishedGame" />
    <RotationLock />
  </article>
</template>

<script>
import SlidePlayer from "./SlidePlayer";
import RotationLock from "./RotationLock";

export default {
  name: "Game",
  data: () => ({
    gameFinished: false
  }),
  components: {
    SlidePlayer,
    RotationLock
  },
  methods: {
    finishedGame() {
      this.gameFinished = !this.gameFinished;
      this.$emit("ended"); // reset the home page
    }
  }
};
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
