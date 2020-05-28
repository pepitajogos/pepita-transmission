<template>
  <article class="start">
    <div class="start__content">
      <h1 class="start__title">Trans.Mission</h1>
      <p class="start__text">{{ $t('Quem é você na quarentena?') }}</p>
      <a href="javascript:void(0);" class="start__new" @click="startGame">{{ $t('Novo Jogo') }}</a>
    </div>
    <a href="javascript:void(0);" class="start__back" @click="selectLanguage"></a>
  </article>
</template>

<script>
import {Howl, Howler} from 'howler';

export default {
  name: 'Start',
  data: () => ({
  }),
  methods: {
    show(){
      // console.log('Show Start');
    },
    hide(){
      // console.log('Hide Start');
    },
    startGame() {
      const screen = document.querySelector('#app');

      // if(navigator.userAgent.toLowerCase().match(/mobile/i)){
      //   screen.requestFullscreen();
      // }

      this.mouseClick();
      this.$emit('clicked', true);
    },
    selectLanguage(e) {
      this.mouseClick();
      this.$emit('clicked', false);
    },
    mouseClick(){
        const mouse = new Howl({
            src: 'assets/slides/audios/Transmission_Click1.mp3'
        });
        mouse.play();
    },
  },
}
</script>

<style lang="scss">
.start{
  background: url('../../public/assets/default.jpg') no-repeat $black center;
  background-size: cover;
  color: $white;
  width: 100vw;
  height: 100vh;
  position: absolute;
  text-align: center;
  z-index: 2;
}

.start__content {
  max-width: 1024px;
  @include center(absolute);
}

.start__title {
  @include font-scale(22, 88);
  text-transform: uppercase;
  margin: 0;
}

.start__text {
  @include font-scale(20, 30);
   color: $white;
  font-weight: 100;
}

.start__new {
  @include font-scale(20, 30);
  display: block;
  margin-top: 10vh;
  text-transform: uppercase;
  text-decoration: none;
  color: $white;
  transition: all 0.2s $ease-in-out;
}

.start__new:hover{
  transform: scale(1.1);
}

.start__back {
  background: url('../../public/assets/config.png') no-repeat;
  background-size: cover;
  width: 115px;
  height: 100px;
  position: absolute;
  right: 10vw;
  bottom: 10vw;
  transition: all 1s $ease-in-out; 
  
  @media (max-width: 700px){
    width: 50px;
    height: 44px;
  }
}

.start__back:hover {
  transform: rotate(180deg);
}


</style>