<template>
  <article class="language">
    <ul class="language__list">
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('en')">English</a></li>
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('es')">Español</a></li>
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('pt-br')">Português</a></li>
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('it')">Italiano</a></li>
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('fr')">Français</a></li>
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('de')">Deutsch</a></li>
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('ar')">العربية</a></li>
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('zh-cn')">汉语</a></li>
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('ja')">日本語</a></li>
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('ru')">Русский</a></li>
      <li class="language__item"><a href="javascript:void(0);" class="language__link" @click="changeLang('hi')">हिन्दी</a></li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'Language',
  data: () => ({
  }),
  methods: {
    show(){
      // console.log('Show Language');
    },
    hide() {
      // console.log('Hide Language');
    },
    changeLang(lang) {
      const elEnd = document.querySelector('#end');

      if(elEnd){
        this.$router.push('/');
      };
      this.$emit('clicked', lang)
    },
  },
}
</script>

<style lang="scss">
.language {
  background: url('../../src/assets/language.jpg') no-repeat $black center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  text-align: center;
  position: absolute;
  z-index: 3;
}

.language__list {
  padding: 0;
  margin: 0;
  @include center(absolute);
}

.language__item {
  list-style: none;
  transition: all 0.2s $ease-in-out;
}

.language__item:hover { 
  transform: scale(1.1);
}

.language__link {
  font-weight: 300;
  @include font-scale(20, 40);
  text-decoration: none;
  color: $white;
  font-weight: 400;
  
  @media (orientation: landscape) and (max-width: 1024px) {
    font-size: 19px;
  }
}
</style>
