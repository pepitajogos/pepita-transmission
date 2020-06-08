<template>
   <article class="tutorial2">
    <div class="tutorial2__content" @click="next">
      <a href="javascript:void(0);" class="tutorial2__default full-screen">{{ $t('Este é um game viral. Você faz 5 escolhas progressivas.') }}</a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'tutorial2',
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
.tutorial2 {
  background: $darker;
  color: $white;
  width: 100vw;
  height: 100vh;
}

.tutorial2__content {
  background: url('../../../src/assets/tutorial/tutorial-1.jpg');
  width: 100vw;
  height: 100vw;
  max-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @include center(relative);
}

.tutorial2__default {
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

.tutorial2 .full-screen {
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
