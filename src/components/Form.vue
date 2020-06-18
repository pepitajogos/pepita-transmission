<template>
  <article class="form">
    <div class="heading">
      <h2>Join the Global Conversation</h2>
      <p class="form__p">"Transmission 2.0" {{ $t('contará histórias reais da quarentena! Conte a sua!') }}</p>
    </div>
    <div class="form-container">
      <!-- <img src="../../src/assets/logo.png" class="form__logo" alt="Pepita" /> -->
      <div class="form__group">
        <div class="form__form">
          <p>
            Share your best or worst choices in the Pandemic. <br />
            We will publish them in our social media!
          </p>
          <form action id="form">
            <div class="form__group">
              <input
                type="text"
                v-bind:placeholder="$t('Nome')"
                id="form__name"
                class="form__text"
                minlength="3"
                required
              />
              <input
                type="text"
                v-bind:placeholder="$t('E-mail')"
                id="form__email"
                class="form__text"
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                minlength="3"
                required
              />
            </div>
            <textarea
              v-bind:placeholder="$t('História')"
              id="form__story"
              class="form__textarea"
              minlength="3"
              required
            ></textarea>
            <span class="error_text">*Preencher todos os campos</span>
            <span class="sucess_text">Enviado com sucesso</span>
            <input type="button" class="form__button" v-bind:value="$t('Enviar')" @click="submit()" />
          </form>
        </div>
        <!-- <div class="button__big" @click="share()">
              <img src="../../src/assets/share.png" />
            </div>
            <div class="button__big" @click="worldStats()">
              <p>World Stats</p>
            </div> -->
      </div>
    </div>
    <!--
    <div class="form__content">
       <div class="form__center">
       <div class="form__flex">
          <div>
            <p class="form__p">{{ $t('Apoie o projeto!') }}</p>
          </div>
          <div class="form__paypal">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="contact@transmission.earth" />
              <input type="hidden" name="currency_code" value="BRL" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt
                border="0"
                src="https://www.paypal.com/en_BR/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </div> 
      </div>
      <web-social-share show="false" class="social">
        <ion-icon name="logo-twitter" slot="twitter" style="color: #00aced; width: 1.4rem; display: block;"></ion-icon>
        <ion-icon
          name="logo-facebook"
          slot="facebook"
          style="color: #3b5998; width: 1.4rem; display: block;"
        ></ion-icon>
        <ion-icon name="copy" slot="copy" style="color: #000000; width: 1.4rem; display: block;"></ion-icon>
        <ion-icon name="mail" slot="email" style="color: #00aced; width: 1.4rem; display: block;"></ion-icon>
        <ion-icon
          name="logo-linkedin"
          slot="linkedin"
          style="color: #0e76a8; width: 1.4rem; display: block;"
        ></ion-icon>
        <ion-icon
          name="logo-pinterest"
          slot="pinterest"
          style="color: #c8232c; width: 1.4rem; display: block;"
        ></ion-icon>
        <ion-icon
          name="logo-whatsapp"
          slot="whatsapp"
          style="color: #075e54; width: 1.4rem; display: block;"
        ></ion-icon>
      </web-social-share> 
    </div>-->
  </article>
</template>

<script>
  import { applyPolyfills, defineCustomElements } from 'web-social-share/dist/loader'
  import { addStory } from '@/data'

  export default {
    name: 'Form',
    data: () => ({}),
    components: {},
    methods: {
      submit() {
        this.validation()
      },
      worldStats() {
        this.$emit('clicked')
      },
      share() {
        return new Promise(async (resolve) => {
          const webSocialShare = document.querySelector('.social')

          if (!webSocialShare || !window) {
            return
          }

          const shareUrl = `${window.location.protocol}//${window.location.host}`

          const share = {
            displayNames: true,
            config: [
              {
                facebook: {
                  socialShareUrl: shareUrl,
                  socialSharePopupWidth: 300,
                  socialSharePopupHeight: 400
                }
              },
              {
                twitter: {
                  socialShareUrl: shareUrl,
                  socialSharePopupWidth: 300,
                  socialSharePopupHeight: 400
                }
              },
              {
                copy: {
                  socialShareUrl: shareUrl
                }
              },
              {
                email: {
                  socialShareUrl: shareUrl
                }
              },
              {
                linkedin: {
                  socialShareBody: shareUrl,
                  socialSharePopupWidth: 300,
                  socialSharePopupHeight: 400
                }
              },
              {
                whatsapp: {
                  socialShareUrl: shareUrl
                }
              }
            ]
          }
          // The configuration, set the share options
          webSocialShare.share = share
          // Show/open the share actions
          webSocialShare.show = true

          resolve()
        })
      },
      validation() {
        const name = document.querySelector('#form__name')
        const email = document.querySelector('#form__email')
        const phone = document.querySelector('#form__story')

        const validName = name.checkValidity()
        const validEmail = email.checkValidity()
        const validPhone = phone.checkValidity()

        if (validName && validEmail && validPhone) {
          const addStoryToBase = async () => {
            await data.addStory({
              name: name.value,
              email: email.value,
              story: story.value
            })
          }

          document.querySelector('#form').reset()
          document.querySelector('#form').classList.remove('error')
          document.querySelector('#form').classList.add('sucess')
        } else {
          document.querySelector('#form').classList.add('error')
          document.querySelector('#form').classList.remove('sucess')
        }
      }
    },
    render() {
      console.log('teste')
    },
    mounted() {
      applyPolyfills().then(() => {
        defineCustomElements()
      })
    }
  }
</script>

<style lang="scss" scoped>
  .share_stats_panel {
    display: flex;
  }

  .heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h2,
    > p {
      background: rgba(0, 0, 0, 0.5);
      padding: 5px 15px;
      color: #ffffff;
      font-size: 1rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }

  .form-container {
    margin-top: 5%;
  }

  .button__big {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 28px;
    border: 2px solid #d1d1d1;
    cursor: pointer;
    color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    font-family: $regular;
    font-size: 32px;
    text-align: center;
    width: 110px;
    height: 110px;
  }
  .button__big img {
    max-width: 100%;
    max-height: 100%;
  }

  .button__big p {
    font-size: 80%;
  }
  .form {
    background: url('../assets/slides/images/0_0_04.jpg') center;
    background-size: cover;
    color: $white;
    width: 100vw;
    height: 100vh;
    padding: 50px 0;
  }

  // .form__form {
  //   width: 70%;
  //   position: relative;
  //   padding-bottom: 50px;
  // }

  // .form__share {
  //   cursor: pointer;
  //   background-color: rgba(0, 0, 0, 0.2);
  //   border-radius: 28px;
  //   border: 2px solid #d1d1d1;
  //   display: inline-block;
  //   cursor: pointer;
  //   color: #ffffff;
  //   padding: 10px;
  // }

  // .form__share {
  //   cursor:pointer;
  //   background: url('../../src/assets/share.png') center no-repeat;
  //   background-size: cover;
  //   width: 150px;
  //   background-size: 100%;
  //   margin-left: 20px;
  //   @media (max-width: 700px) {
  //     width: 70px;
  //   }
  // }

  // .form__content {
  // background: url('../../src/assets/equipe.png') bottom no-repeat;
  // width: 100vw;
  // height: 100%;
  // max-height: 100vh;
  // background-size: cover;
  // @include center(relative);
  // }

  .form__form {
    padding: 20px 40px;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid #707070;
  }

  .form__logo {
    width: 210px;
    margin: 0 auto 30px;
    display: block;
  }

  .form__default {
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
    font-weight: 400;
  }

  .form .full-screen {
    width: 100%;
    height: 100%;
    max-width: 90vw;
    text-align: center;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    @include center(absolute);
    @include font-scale(14, 45);
  }

  .form__text {
    font-family: $regular;
    width: 50%;
    border: 1px solid #ffffff;
    padding: 7px;
    font-size: 13px;
    background: transparent;
    color: #ffffff;
    &:nth-of-type(1) {
      margin-right: 1%;
    }
  }

  .form__textarea {
    font-family: $regular;
    width: 100%;
    border: 1px solid #ffffff;
    padding: 7px;
    font-size: 13px;
    background: transparent;
    color: #ffffff;
  }

  .form__group {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .form__button {
    border: 1px solid #707070;
    font-size: 15px;
    padding: 10px 20px;
    text-transform: uppercase;
    right: 0;
    bottom: 0;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.42);
    color: #fff;
  }

  // .form__center {
  //   @media (max-width: 1023px) {
  //     width: 90%;
  //     margin: auto;
  //     @include center(absolute);
  //   }

  //   @media (min-width: 1024px) {
  //     @include center(absolute);
  //     width: 90%;
  //     max-width: 1000px;
  //   }
  // }

  // .form__paypal {
  //   width: 194px;
  //   height: 62px;
  //   display: block;
  //   background-size: cover;
  //   margin: 40px;
  // }

  .form__flex {
    display: flex;
  }

  .form__p {
    @include font-scale(10, 30);
  }

  .form {
    .error_text {
      display: none;
    }

    .sucess_text {
      display: none;
    }

    .sucess {
      .sucess_text {
        display: block;
      }
    }

    .error {
      .error_text {
        font-size: 11px;
        color: $red;
        display: block;
      }

      input,
      textarea {
        &:focus,
        &:required,
        &:valid {
          border: none;
        }

        &:invalid {
          border: 1px solid $red;
        }
      }
    }
  }
  ::placeholder {
    color: #ffffff;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    color: #ffffff;
  }

  ::-ms-input-placeholder {
    color: #ffffff;
  }
</style>
