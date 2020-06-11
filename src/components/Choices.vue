<template>
  <article class="choices" @click="next">
    <div class="choices__content">
      <a href="javascript:void(0);" class="choices__default full-screen">{{ $t('Nossas pequenas escolha definem o que vivemos') }}</a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Choices',
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
.choices {
  background: url('../../src/assets/08_02_escolhas.jpg') no-repeat center;
  cursor: pointer;
  background-size: cover;
  color: $white;
  width: 100vw;
  height: 100vh;
}

.choices__content {
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @include center(relative);
}

.choices__default {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: $white;
  position: absolute;
  border: 1px solid $border-link;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5em 1em;
  max-width: 29vw;
  @include font-scale(10, 30);
  font-weight: 400;
}

.choices .full-screen {
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
