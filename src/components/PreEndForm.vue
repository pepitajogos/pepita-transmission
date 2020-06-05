<template>
  <article class="form">
    <div class="form__content">
      <div class="form__center">
        <div class="form__panel">
          <div>
            <h1>"Transmission 2.0" {{ $t('contará histórias reais da quarentena! Conte a sua!') }}</h1>
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

          <div>
            <PaypalHumbleBundle />
          </div>
        </div>
          <div
            class="slide__default"
            id="next-button"
            @click="nextPage()"
          >{{$t("Clique aqui e descubra quem você é na quarentena")}}</div>
        </div>
    </div>
  </article>
</template>

<script>
import { addStory } from "@/data";
import PaypalHumbleBundle from "@/components/PaypalHumbleBundle";
export default {
  name: "Form",
  data: () => ({
    loaded: false,
    donation: {
      description: "Doação",
      value: 1
    }
  }),
  components: {
    PaypalHumbleBundle
  },
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
  }
};
</script>

<style lang="scss">
.form {
  background: url("../../src/assets/form_background.jpg") center;
  background-size: cover;
  color: $white;
  width: 100vw;
  height: 100vh;
}
// .form__panel {
//   width: 80vw;
// }

.form__center {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.form__content {
  //background: url("../../src/assets/equipe.png") bottom no-repeat;
  width: 100vw;
  height: 100%;
  max-height: 100vh;
  background-size: cover;
  @include center(relative);
}

.form__logo {
  width: 210px;
  margin: 0 auto 30px;
  display: block;
}

.form__panel {
  border: 1px solid $border-link;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1em;
}
.form__panel h1{
  font-weight: bold;
  @include font-scale(10, 24);
  color: $white;
  text-align: center;
}
@media screen and (max-width: 800px) {
  .form__panel {
    width: 90%;
    //transform:scale(0.7);
  }
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
  height: 3vh;
  border: 1px solid black;
  padding: 7px;
  font-size: 13px;
  background: #cacaca;
}

.form__textarea {
  resize: none;
  font-family: $regular;
  width: 100%;
  height: 10vh;
  border: 1px solid black;
  padding: 7px;
  font-size: 13px;
  background: #cacaca;
}

.form__group {
  float: left;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 100%;
}

// .form__button {
//   border: 1px solid black;
//   font-size: 15px;
//   padding: 10px 20px;
//   text-transform: uppercase;
//   float: right;
//   cursor: pointer;
// }
// .form__paypal {
//   width: auto;
//   height: auto;
//   display: block;
//   background-size: cover;
//   margin: 40px;
// }

// .form__flex {
//   display: flex;
// }

// .form__p {
//   @include font-scale(10, 30);
// }

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
</style>
