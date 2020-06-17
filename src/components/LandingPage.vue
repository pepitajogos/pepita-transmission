<template>
  <div class="landing-page">
    <section class="hero-section">
      <div class="header">
        <div class="logo-container">
          <img src="../../src/assets/landing/TTTT.png" alt="" class="logo" /> transmission
        </div>
        <div class="link-container">
          <a href="#" class="link">Sponsor</a>
          <a href="#" class="link outlined">Share</a>
          <a href="#" class="link" @click.prevent="hideLandingPage">EN</a>
        </div>
      </div>
      <div class="content">
        <h2>Discover who you are in the pandemic</h2>
        <p>A two minute experience designed to spread positive messages</p>
        <a href="#" @click.prevent="hideLandingPage">Play it now</a>
      </div>
      <img src="../../src/assets/landing/landing-phone.png" alt="" class="landing-phone" />
      <div class="chat-bubble chat-bubble-1">
        You need to open up to new opportunities
      </div>
      <div class="chat-bubble chat-bubble-2">
        You are in state of meditation!
      </div>
    </section>
    <section>
      <div class="world-map-section">
        <app-map></app-map>
      </div>
    </section>

    <section>
      <div class="about-section">
        <h2>About us</h2>
        <p>We want to spread positive messages and create a global conversation</p>
      </div>
    </section>
  </div>
</template>

<script>
  // import components
  import Map from '@/components/Map'
  export default {
    components: {
      appMap: Map
    },
    methods: {
      hideLandingPage() {
        this.$emit('clicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .landing-page {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto !important;
  }
  .hero-section {
    background: url('../../src/assets/landing/hero-bg.png') no-repeat $black center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 3;
    overflow: hidden;

    .landing-phone {
      position: absolute;
      bottom: -50px;
      right: 10%;
    }

    .chat-bubble {
      background: rgba(255, 255, 255, 0.9);
      padding: 20px;
      border-radius: 30px;
      border: 1px solid #3a3a3a;
      &.chat-bubble-1 {
        position: absolute;
        bottom: 200px;
        right: 6%;
        max-width: 200px;
      }
      &.chat-bubble-2 {
        position: absolute;
        bottom: 50px;
        right: 20%;
        max-width: 200px;
      }
    }

    .content {
      color: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 5%;
      h2 {
        margin-bottom: 10px;
        font-size: 40px;
        @include font-scale(20, 40);
      }
      p {
        @include font-scale(14, 20);
        margin-top: 5px;
      }

      a {
        @include font-scale(16, 16);
        text-decoration: none;
        color: #000000;
        padding: 15px 30px;
        border-radius: 50px;
        margin-top: 5px;
        display: inline-block;
        background: rgba(255, 255, 255, 0.9);
        text-transform: uppercase;
      }
    }
  }
  .header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    color: #ffffff;
    padding: 20px 15px;
    display: flex;
    justify-content: space-between;
    .logo-container {
      display: flex;
      font-size: 20px;
      img {
        margin-right: 5px;
      }
    }

    .link-container {
      .link {
        color: #ffffff;
        padding: 5px 12px;
        &.outlined {
          border: 1px solid #ffffff;
          border-radius: 50px;
        }
      }
    }
  }
  .about-section {
    background: url('../../src/assets/landing/about-bg.png') no-repeat $black center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 3;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    h2,
    p {
      background: rgba(0, 0, 0, 0.5);
      padding: 5px 15px;
      color: #ffffff;
    }
  }
</style>
