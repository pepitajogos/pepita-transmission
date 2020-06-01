<template>
   <article class="tutorial5">
    <div class="tutorial5__content" @click="next">
      <a href="javascript:void(0);" class="tutorial5__default full-screen">{{ $t('Há 22 finais diferentes') }}</a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'tutorial5',
  data: () => ({
  }),
  methods: {
    next() {
      this.$emit('clicked');
    },
  },
}
</script>

<style lang="scss">
.tutorial5 {
  background: $darker;
  color: $white;
  width: 100vw;
  height: 100vh;
}

.tutorial5__content {
  background: url('../../../src/assets/tutorial/tutorial-1-2.jpg');
  width: 100vw;
  height: 57vw;
  max-height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @include center(relative);
}

.tutorial5__default {
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
  font-weight: 100;
}

.tutorial5 .full-screen {
  width: 100%;
  height: 100%;
  max-width: 90vw;
  text-align: center;
  border: 0;
  background-color: rgba(0,0,0,0);
  @include center(absolute);
  @include font-scale(14, 45);
}
</style>
