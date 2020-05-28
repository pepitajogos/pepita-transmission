<template>
  <article class="form">
    <div class="form__content">
      <div class="form__center">
        <div>
          <p
            class="form__p"
          >"Transmission 2.0" {{ $t('contará histórias reais da quarentena! Conte a sua!') }}</p>
          <div class="form__group">
            <div class="form__form">
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
                <input
                  type="button"
                  class="form__button"
                  v-bind:value="$t('Enviar')"
                  @click="submit()"
                />
              </form>
            </div>

            <div class="humble__bundle__panel">
              <div>
                <p>"HUMBLE BUNDLE"</p>
              </div>
            </div>
          </div>
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


      </div>
      <div
        class="slide__default"
        @click="nextPage()"
      >{{$t("Clique aqui e descubra quem você é na quarentena")}}</div>
    </div>
  </article>
</template>

<script>
import { addStory } from "@/data";

export default {
  name: "Form",
  data: () => ({}),
  components: {},
  methods: {
    submit() {
      this.validation();
    },
    nextPage() {
      this.$emit("clicked");
    },
    
    validation() {
      const name = document.querySelector("#form__name");
      const email = document.querySelector("#form__email");
      const phone = document.querySelector("#form__story");

      const validName = name.checkValidity();
      const validEmail = email.checkValidity();
      const validPhone = phone.checkValidity();

      if (validName && validEmail && validPhone) {
        const addStoryToBase = async () => {
          await data.addStory({
            name: name.value,
            email: email.value,
            story: story.value
          });
        };

        document.querySelector("#form").reset();
        document.querySelector("#form").classList.remove("error");
        document.querySelector("#form").classList.add("sucess");
      } else {
        document.querySelector("#form").classList.add("error");
        document.querySelector("#form").classList.remove("sucess");
      }
    }
  },
  render() {
    console.log("teste");
  },
  mounted() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  }
};
</script>

<style lang="scss">

.form {
  background: url("../../public/assets/form_background.jpg") center;
  background-size: cover;
  color: $white;
  width: 100vw;
  height: 100vh;
}

.form__form {
  width: 70%;
  position: relative;
  padding-bottom: 50px;
}

.form__content {
  background: url("../../public/assets/equipe.png") bottom no-repeat;
  width: 100vw;
  height: 100%;
  max-height: 100vh;
  background-size: contain;
  @include center(relative);
}

.form__logo {
  width: 210px;
  margin: 0 auto 30px;
  display: block;
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
  width: 49%;
  border: 1px solid black;
  padding: 7px;
  font-size: 13px;
  background: #cacaca;
}

.form__textarea {
  font-family: $regular;
  width: 100%;
  border: 1px solid black;
  padding: 7px;
  font-size: 13px;
  background: #cacaca;
}

.form__group {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.form__button {
  border: 1px solid black;
  font-size: 15px;
  padding: 10px 20px;
  text-transform: uppercase;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
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

.form__paypal {
  width: 194px;
  height: 62px;
  display: block;
  background-size: contain;
  margin: 40px;
}

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

.humble__bundle__panel {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: $white;
  border: 1px solid $border-link;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5em 1em;
  @include font-scale(10, 30);
  font-weight: 100;
  white-space: pre-wrap;
}
</style>
