<template>
  <article id="end">
    <transition v-on:enter="enter">
      <EndMessage v-if="ending" :userEnding="ending" @return="returnToHome" />
    </transition>
    <RotationLock />
  </article>
</template>

<script>
import EndMessage from "@/components/EndMessage";
import RotationLock from "@/components/RotationLock";
const anim = require("@/anim.js");

export default {
  name: "End",
  data: () => ({}),
  components: {
    EndMessage,
    RotationLock,
  },
  computed: {
    ending: function() {
      return localStorage["result"];
    },
  },
  methods: {
    enter(el, done) {
      anim.enter(el, done);
    },
    returnToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
#end {
  width: 100%;
  height: 100vh;
  z-index: 3;
  position: absolute;
}
</style>
