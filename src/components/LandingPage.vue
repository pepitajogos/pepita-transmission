<template>
  <div class="landing-page">
    <section class="hero-section">
      <header class="header">
        <div class="logo-container"><img src="../../src/assets/landing/TTTT.png" alt class="logo" /> transmission</div>
        <div class="link-container">
          <a href="#" class="link" @click.prevent="scrollToView('#sponsor')">{{ $t('Sponsor') }}</a>
          <a href="#" class="link outlined" @click.prevent="scrollToView('#share-story')">{{ $t('Share') }}</a>
          <a href="#" class="link" @click.prevent="selectLanguage">EN</a>
        </div>
      </header>
      <div class="content">
        <h2>{{ $t('Discover who you are in the pandemic') }}</h2>
        <p>{{ $t('A two minute experience designed to spread positive messages') }}</p>
        <a href="#" @click.prevent="startGame">{{ $t('Play it now') }}</a>
      </div>
      <div class="content-mobile">
        <img src="../../src/assets/landing/landing-phone.png" alt class="landing-phone" />
        <div class="chat-bubble chat-bubble-1">{{ $t('You need to open up to new opportunities') }}</div>
        <div class="chat-bubble chat-bubble-2">{{ $t('You are in state of meditation!') }}</div>
      </div>
    </section>

    <section class="world-map-section">
      <app-map></app-map>
    </section>

    <section class="about-section">
      <h2>{{ $t('About us') }}</h2>
      <p>{{ $t('We want to spread positive messages and create a global conversation') }}</p>

      <div class="cards">
        <div class="card">
          <img src="../../src/assets/landing/icons/icon1.png" alt class="icon" />
          <p>
            {{
              $t(
                '"Transmission" shows how our choices define our reality. And we choose what is best for us when we are in balance.'
              )
            }}
          </p>
        </div>
        <div class="card">
          <img src="../../src/assets/landing/icons/icon2.png" alt class="icon" />
          <p>
            {{
              $t(
                'After the experience, you receive a tailored message that shows your emotional state after the pandemic..'
              )
            }}
          </p>
        </div>
        <div class="card">
          <img src="../../src/assets/landing/icons/icon3.png" alt class="icon" />
          <p>{{ $t('You can share your story in the Pandemic with us. And we will share it with the world') }}</p>
        </div>
        <div class="card">
          <img src="../../src/assets/landing/icons/icon4.png" alt class="icon" />
          <p>{{ $t('By sharing positive messages, we can change the way we see world.') }}</p>
        </div>
      </div>
    </section>

    <section class="form-section" id="share-story">
      <app-form />
    </section>

    <section class="heal-stories">
      <h2>{{ $t('Heal Stories') }}</h2>
      <p>{{ $t('Leave your contribution to a cause that helps change the world.') }}</p>

      <div class="content">
        <p>
          {{
            $t(
              'We believe that a good story can shape the world. If you resonate with our cause, help us gather stories from all over the globe and tell them. Transmission 2.0 will tell real stories from the Pandemic.'
            )
          }}'
        </p>
        <p>
          {{
            $t(
              'Besides from telling stories, we can also heal stories from all over the world. Choose here which story you want to embrace and regenerate!'
            )
          }}
        </p>
        <div class="paypal" v-if="showPaymentForm">
          <app-paypal />
        </div>
      </div>
      <a href="#" @click.prevent="showPaymentForm = true" class="btn show-mobile" v-if="!showPaymentForm">{{
        $t('Heal stories')
      }}</a>
    </section>

    <section class="sharer-section">
      <div class="content">
        <h2>{{ $t('Discover who you are') }}</h2>
        <p>{{ $t('Tell your story, share to your friends') }}</p>
      </div>

      <a href="#" class="btn" @click.prevent="startGame">{{ $t('Play it now') }}</a>

      <footer class="footer">
        <div class="logo-container">
          <img src="../../src/assets/landing/TTTT.png" alt="transmission" class="logo" />
          <div class="text-container">
            <div>©2020.Transmission.{{ $t('All rights reserved.') }}</div>
            <div>
              {{ $t(' Have Questions? Send an') }}
              <a href="mailto:contact@transmission.earth">email</a>
            </div>
            <div>
              <a href="#">
                <font-awesome-icon :icon="['fab', 'twitter']" />
              </a>
              <a href="#">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </div>
</template>

<script>
  // import components
  import Map from '@/components/Map'
  import Form from '@/components/Form'
  import PaypalBundle from '@/components/PaypalHumbleBundle'

  export default {
    data: function() {
      return {
        showPaymentForm: false
      }
    },
    components: {
      appMap: Map,
      appForm: Form,
      appPaypal: PaypalBundle
    },
    mounted: function() {
      let windowWidth = window.innerWidth

      if (windowWidth > 768) {
        this.showPaymentForm = true
      }
    },
    methods: {
      show() {
        // console.log('Show Landing page');
      },
      hide() {
        // console.log('Hide Landing page');
      },
      selectLanguage() {
        this.$emit('chooseLanguage')
      },

      onShareClicked(method) {},

      startGame() {
        this.$emit('startGame')
      }
    }
  }
</script>

<style lang="scss" scoped>
  a.btn {
    @include font-scale(16, 16);
    margin-bottom: 50px;
    text-decoration: none;
    color: #000000;
    padding: 15px 30px;
    border-radius: 50px;
    margin-top: 20px;
    display: inline-block;
    background: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
  }
  .landing-page {
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto !important;
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
  .hero-section {
    background: url('../../src/assets/landing/hero-bg.png') no-repeat $black center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 3;
    overflow: hidden;

    .content-mobile {
      position: relative;
      height: 100%;
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
    }

    .content {
      color: #fff;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 5%;
      z-index: 1;
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

  .about-section {
    background: url('../../src/assets/landing/about-bg.png') no-repeat $black center;
    background-size: cover;
    width: 100vw;
    min-height: 100vh;
    position: relative;
    z-index: 3;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
    h2,
    > p {
      background: rgba(0, 0, 0, 0.5);
      padding: 5px 15px;
      color: #ffffff;
    }

    .cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 100px;
      .card {
        width: 250px;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid #707070;
        color: #ffffff;
        padding: 10px 15px;
        font-size: 10px;
        margin: 10px;
      }
    }
  }
  .heal-stories {
    background: url('../../src/assets/landing/heal-bg.png') no-repeat $black center;
    background-size: cover;
    width: 100vw;
    min-height: 100vh;
    position: relative;
    z-index: 3;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
    padding-bottom: 50px;
    h2,
    > p {
      background: rgba(0, 0, 0, 0.5);
      padding: 5px 15px;
      color: #ffffff;
    }

    .content {
      width: 90%;
      max-width: 800px;
      background: rgba(0, 0, 0, 0.5);
      padding: 5px 15px;
      color: #ffffff;
    }
  }

  .sharer-section {
    background: url('../../src/assets/landing/hero-bg.png') no-repeat $black center;
    background-size: cover;
    // width: 100vw;
    // height: 100vh;
    position: relative;
    z-index: 3;
    // overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 100px;
    // &:before {
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   display: block;
    //   content: '';
    // }
    .content {
      width: 80%;
      max-width: 800px;
      height: 100%;
      display: flex;
      padding: 50px 0;
      flex-direction: column;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      h2,
      p {
        color: #ffffff;
      }
    }

    .cards {
      width: 80%;
      max-width: 800px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 10%;
      .card {
        border: 1px solid #707070;
        color: #ffffff;
        padding: 30px;
        font-size: 30px;
        cursor: pointer;
      }
    }

    .footer {
      width: 100%;
      padding: 30px 20px;
      color: #fff;
      background: rgba(0, 0, 0, 0.4);
      font-size: 14px;

      a {
        color: #fff;
        text-decoration: underline;
        margin-left: 5px;
        margin-right: 5px;
      }

      .logo-container {
        display: flex;
        align-items: center;
        .logo {
          width: 50px;
          margin-right: 15px;
        }
      }
    }
  }
  // responsive
  @media screen and (max-width: 768px) {
    .hero-section {
      height: 700px;
      .content {
        position: relative;
        top: 0;
        margin-top: 100px;
        transform: translateY(0);
        text-align: center;
        left: 0;
      }

      .content-mobile {
        .landing-phone {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
        .chat-bubble {
          &.chat-bubble-1 {
            top: 100px;
            bottom: auto;
            right: 15%;
          }
          &.chat-bubble-2 {
            top: 300px;
            bottom: auto;
            left: 15%;
          }
        }
      }
    }
    .form-section {
      .form {
        height: auto;
      }
    }
    .about-section {
      height: auto;
      padding-bottom: 50px;

      .cards {
        flex-direction: column;
        align-items: center;
      }
    }
    .heal-stories {
      height: auto;
      padding-bottom: 50px;
    }
  }
  @media screen and (min-width: 769px) {
    .show-mobile {
      display: none;
    }
  }
</style>
