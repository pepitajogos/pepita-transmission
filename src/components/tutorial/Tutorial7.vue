<template>
   <article class="tutorial7">
    <div class="tutorial7__content" @click="next">
      <a href="javascript:void(0);" class="tutorial7__default full-screen">{{ $t('Boa sorte!') }}</a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'tutorial7',
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
.tutorial7 {
  background: $darker;
  color: $white;
  width: 100vw;
  height: 100vh;
}

.tutorial7__content {
  background: url('../../../src/assets/tutorial/tutorial-1-2.jpg');
  width: 100vw;
  height: 100vw;
  max-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @include center(relative);
}

.tutorial7__default {
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

.tutorial7 .full-screen {
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
