<template>
   <article class="producer">
    <div class="producer__content" @click="next">
      <a href="javascript:void(0);" class="producer__default full-screen">{{ $t('Somos uma produtora que trabalhou muito para dividir essa experiência e queremos desenvolver uma segunda versão com histórias reais!') }}</a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Producer',
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
.producer {
  background: $darker;
  color: $white;
  width: 100vw;
  height: 100vh;
}

.producer__content {
  background: url('../../public/assets/08_3_produtora.jpg');
  width: 100vw;
  height: 57vw;
  max-height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @include center(relative);
}

.producer__default {
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

.producer .full-screen {
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
