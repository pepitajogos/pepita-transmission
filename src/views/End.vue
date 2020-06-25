<template>
  <article id="end">
    <transition v-on:enter="enter">
      <EndMessage v-if="ending" :userEnding="ending" />
    </transition>
  </article>
</template>

<script>
import EndMessage from "@/components/EndMessage";
const anim = require("@/anim.js");

export default {
  name: "End",
  data: () => ({}),
  components: {
    EndMessage
  },
  computed: {
    ending: function() {
      //console.log(localStorage["result"]);
      return localStorage["result"];
    }
  },
  methods: {
    enter(el, done) {
      anim.enter(el, done);
    }
  }
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
