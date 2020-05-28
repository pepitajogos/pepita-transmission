<template>
  <article id="end">
    <transition v-on:enter="enter">
      <PreEnd v-show="preEnd" @clicked="showPreEndForm" />
    </transition>
     <transition v-on:enter="enter">
      <PreEndForm v-show="preEndForm" @clicked="showEndMessage" />
    </transition>
     <transition v-on:enter="enter">
      <EndMessage v-show="endMessage"/>
    </transition>
  </article>
</template>

<script>
import PreEnd from "@/components/PreEnd";
import PreEndForm from "@/components/PreEndForm";
import EndMessage from "@/components/EndMessage";

export default {
  name: "End",
  data: () => ({
    preEnd: true,
    preEndForm: false,
    endMessage: false
  }),
  components: {
    PreEnd,
    PreEndForm,
    EndMessage
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
    },
    showPreEndForm() {
      this.preEndForm = true;
      this.preEnd = false;
      this.endMessage = false;
    },
    showEndMessage() {
      this.preEndForm = false;
      this.preEnd = false;
      this.endMessage = true;
    }
  }
};
</script>

<style>
#end {
  background: #050607;
  width: 100%;
  height: 100vh;
  z-index: 3;
  position: absolute;
}
</style>
