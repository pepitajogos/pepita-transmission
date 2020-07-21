<template>
  <article class="form">
    <div class="form-container">
      <div class="form__group">
        <div class="form__form">
          <p>
            {{ $t("Meses se passam.") }}
            <br />
            {{
              $t("Você se lembra de uma história da quarentena que te marcou.")
            }}
            <br />
            {{ $t("Qual foi?") }}
          </p>
          <form action id="form">
            <div class="form__group">
              <input
                type="text"
                v-bind:placeholder="$t('Nome')"
                class="form__text"
                v-model="name"
              />
            </div>
            <textarea
              v-bind:placeholder="$t('História')"
              class="form__textarea"
              v-model="story"
            ></textarea>
            <div class="form__group">
              <div id="error__msg" class="error_text">
                {{ $t("Preencher todos os campos") }}
              </div>
            </div>
            <input
              type="button"
              class="form__button"
              v-bind:value="$t('Enviar')"
              @click="submit"
            />
          </form>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { addStory } from "@/data";

export default {
  name: "SlideForm",
  data: () => ({
    name: "",
    story: "",
  }),
  methods: {
    submit() {
      this.validation();
    },
    validation() {
      const validName = this.name.length > 0;
      const validStory = this.story.length > 0;
      if (validName && validStory) {
        const addStoryToBase = async () => {
          await addStory({
            name: this.name,
            story: this.story,
          });
        };
        addStoryToBase();
        document.getElementById("error__msg").classList.remove("error");

        this.$emit("onFormSubmit");
      } else {
        document.getElementById("error__msg").classList.add("error");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-container {
  display: flex;
  justify-content: center;
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
    clear: both;
  }
}
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
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translate(0, -50%);
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
  width: 100vw;
  height: 100vh;
  padding: 50px 0;
}
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
  width: 100%;
  border: 1px solid #ffffff;
  padding: 7px;
  font-size: 13px;
  background: transparent;
  color: #ffffff;
  // &:nth-of-type(1) {
  //   margin-right: 1%;
  // }
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

  .error {
    font-size: 11px;
    color: $red;
    display: block !important;
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
