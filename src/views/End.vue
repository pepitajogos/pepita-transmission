<template>
  <article id="end">
    <transition v-on:enter="enter">
      <EndMessage v-if="ending" :userEnding="ending" />
    </transition>
  </article>
</template>

<script>
import EndMessage from "@/components/EndMessage";

export default {
  name: "End",
  data: () => ({}),
  components: {
    EndMessage
  },
  computed: {
    ending: function() {
      return localStorage.result;
    }
  },
  methods: {
    enter(el, done) {
      const tl = new TimelineMax({
        onComplete: done
      });

      tl.set(el, {
        autoAlpha: 0,
        scale: 2,
        transformOrigin: "50% 50%"
      });

      tl.to(el, 1, {
        autoAlpha: 1,
        scale: 1,
        ease: Power4.easeOut
      });
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
