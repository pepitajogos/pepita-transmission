<template>
  <article class="tutorial1">
    <background image="../assets/tutorial/tutorial-1.jpg"></background>
    <div @click="next">
      <a href="javascript:void(0);" class="tutorial1__default full-screen">{{ $t('Nesse momento mundialmente difícil, queremos ouvir boas histórias e viralizar mensagens positivas.') }}</a>
    </div>
  </article>
</template>

<script>
  import Background from "@/components/Background";

  export default {
    name: 'tutorial1',
    data: () => ({}),
    methods: {
      next() {
        this.$emit('clicked');
      },
    },
    components: {
      Background
    }
  }
</script>

<style lang="scss">
  .tutorial1 {
    background: $darker;
    color: $white;
    width: 100vw;
    height: 100vh;
  }

  .tutorial1__default {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: $white;
    position: absolute;
    cursor: pointer;
    border: 1px solid $border-link;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0.5em 1em;
    max-width: 29vw;
    @include font-scale(10, 30);
    font-weight: 400;
  }

  .tutorial1 .full-screen {
    width: 100%;
    height: 100%;
    max-width: 90vw;
    text-align: center;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    @include center(absolute);
    @include font-scale(14, 45);
  }
</style>
