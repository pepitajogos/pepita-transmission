<template>
  <article class="form">
    <div class="form__content">
      <div class="form__center">
        <div>
          <img src="../../public/assets/logo.png" class="form__logo" alt="Pepita" />
          <h1>{{$t("Obrigado por participar!")}}</h1>
          <p>{{$t("Criamos TRANSMISSION para passar mensagens positivas neste momento mundialmente desafiador!")}}</p>
          <p>{{$t("Estamos preparando uma segunda versão com histórias reais da quarentena!")}}</p>
          <p>{{$t("Apoie o projeto! Parte da nossa receita será repassada para instituições que precisam do nosso apoio nesse momento! Escolha como contribuir")}}</p>
        </div>
      </div>
      <div class="slide__default" @click="nextPage()">></div>
    </div>
  </article>
</template>

<script>
export default {
  methods:{
     nextPage() {
      this.$emit("clicked");
    }
  }
};
</script>

<style lang="scss">
h1 {
  font-family: $regular;
  font-weight: bold;
  @include font-scale(10, 30);
  color: $white;
}
p {
  font-family: $regular;
  font-weight: 100;
  @include font-scale(8,24);
  color: $white;
}
.slide__default {
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
  font-weight: 100;
  white-space: pre-wrap;

  position: absolute;
  right: 5%;
  bottom: 20%;
}
.form {
  background: url("../../public/assets/form_background.jpg") center;
  background-size: cover;
  color: $white;
  width: 100vw;
  height: 100vh;
}
.form__content {
  background: url("../../public/assets/equipe.png") bottom no-repeat;
  width: 100vw;
  height: 100%;
  max-height: 100vh;
  background-size: contain;
}

.form__center {
  @media (max-width: 1023px) {
    width: 90%;
    margin: auto;
    @include center(absolute);
  }

  @media (min-width: 1024px) {
    @include center(absolute);
    width: 90%;
    max-width: 1000px;
  }
}
</style>