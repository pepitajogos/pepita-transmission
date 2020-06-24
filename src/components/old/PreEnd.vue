<template>
  <article class="form">
    <div class="form__content">
      <div class="form__center">
        <div class="manifest__panel">
          <div class="message">
            <img src="../../src/assets/logo.png" class="form__logo" alt="Pepita" />
            <h1>{{$t('Manifesto TRANSMISSION')}}</h1>
            <p>{{$t('Nossas escolhas definem o que vivemos. E escolhemos o que é melhor para gente quando estamos em equilíbrio.')}}</p>
            <p>{{$t('TRANSMISSION nasceu para espalhar mensagens positivas em um momento que desafia nossas emoções.')}}</p>
            <p>{{$t('Após a experiência, você recebe uma mensagem sob medida, que dialoga com suas escolhas.')}}</p>
            <p>{{$t('Compartilhando mensagens positivas, podemos mudar o nosso olhar sobre o mundo.')}}</p>
            <p>{{$t('Na próxima versão do TRANSMISSION, trabalharemos com histórias reais do mundo todo.')}}</p>
            <p>{{$t('Contribua contando uma escolha sua na quarentena, ou deixe sua contribuição para uma CAUSA que ajuda a mudar o mundo.\nEstamos conectados com diversas iniciativas no mundo todo e você pode escolher como contribuir.')}}</p>
          </div>
        </div>
        <div class="slide__default" id="next-button" @click="nextPage()">{{$t('Avançar')}}</div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  methods: {
    nextPage() {
      this.$emit("clicked");
    }
  }
};
</script>

<style lang="scss">
.message {
  width: 100%;
  height: 100%;
}
.message h1 {
  font-weight: bold;
  @include font-scale(10, 30);
  color: $white;
  text-align: center;
  white-space: pre-wrap;
}
.message h2 {
  @include font-scale(10, 30);
  color: $white;
  white-space: pre-wrap;
}
.message p {
  font-family: $regular;
  @include font-scale(12, 24);
  color: $white;
  white-space: pre-wrap;
  font-weight: 400;
}
@media screen and (max-width: 800px) {
  .message p {
    @include font-scale(12, 18);
  }
}
@media screen and (max-height: 800px) {
  .message p {
    @include font-scale(12, 18);
  }
  .message h1 {
  @include font-scale(12, 26);
}
}
.button__right__bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: $white;
  cursor: pointer;
  border: 1px solid $border-link;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5em 1em;
  max-width: 29vw;
  @include font-scale(10, 30);
  font-weight: 400;
  white-space: pre-wrap;

  position: absolute;
  right: 5%;
  bottom: 20%;
}
.manifest__panel {
  width: 60vw;
  height: 80vh;
}
@media screen and (max-width: 800px) {
  .manifest__panel {
    width: 80vw;
  }
}
#next-button {
  position: absolute;
  max-width: 20vw;
  bottom: 30%;
  top: inherit;
  &.center {
    transform: translateX(-50%) translateY(0);
  }
  right: 5%;
  &.center {
    transform: translateX(0) translateY(-50%);
  }
}
@media screen and (max-width: 800px) {
  #next-button {
    position: static;
    bottom: 5%;
    max-width: 100vw;
  }
}
</style>