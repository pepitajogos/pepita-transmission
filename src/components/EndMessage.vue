<template>
  <article class="slide">
    <div @click="goToEnding2()" v-show="!ending1">
      <div class="background__image" :style="backgroundStyle('light')">
        <div class="ending__center">
          <div class="ending__full"></div>
          <div class="slide__default" id="next-button">{{$t('Avançar')}}</div>
        </div>
      </div>
    </div>
    <div v-show="!ending2&&ending1">
      <div class="background__image" :style="backgroundStyle('dark')">
        <div class="ending__center">
          <div class="message__row">
            <div class="message__column">
              <div class="share__button">
                <div class="ending__portrait">
                  <img :src="lightEndingImage" />
                </div>
                <div class="ending__message">
                  <h1>{{endingMessage}}</h1>
                </div>
                <div class="ending__message">
                  <p>{{$t('Conte para seus amigos quem é você!')}}</p>
                </div>
                <div class="btn-group">
                  <ShareNetwork
                    class="btn"
                    v-for="network in networks"
                    :network="network.network"
                    :key="network.key"
                    :style="{backgroundColor: network.color}"
                    :url="sharing.url"
                    :title="network.title"
                    :description="network.description"
                    :quote="network.quote"
                    :hashtags="sharing.hashtags"
                  >
                    <font-awesome-icon :icon="network.icon"></font-awesome-icon>
                    {{ network.name }}
                  </ShareNetwork>
                </div>
              </div>
            </div>
            <div class="message__column">
              <div class="map__info">
                <ul class="table">
                  <li
                    class="table__text"
                    v-for="(ending) in orderEndings.slice(0, 9)"
                    :key="ending.id"
                  >
                    <span class="table__numbers">{{ ending[1] }}%</span>
                    {{ ending[0] }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import * as data from "@/data";

export default {
  data: () => ({
    loaded: false,
    ending1: false,
    ending2: false,
    countryTotal: 0,
    players: 0,
    orderEndings: [],
    sharing: {
      url: "https://transmission.earth",
      hashtags: "transmission"
    }
  }),
  computed: {
    networks: function() {
      return [
        {
          network: "facebook",
          name: "Facebook",
          icon: ["fab", "facebook-square"],
          color: "#1877f2",

          title: "",
          description: "",
          quote: this.$i18n.t(this.shareMessage)
        },
        {
          network: "twitter",
          name: "Twitter",
          icon: ["fab", "twitter"],
          color: "#1da1f2",

          title: this.$i18n.t(this.shareMessage),
          description: "",
          quote: ""
        },
        {
          network: "linkedin",
          name: "LinkedIn",
          icon: ["fab", "linkedin"],
          color: "#007bb5",

          title: this.$i18n.t(this.shareMessage),
          description: "",
          quote: ""
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: ["fab", "whatsapp"],
          color: "#25d366",

          title: this.$i18n.t(this.shareMessage),
          description: "",
          quote: ""
        },
        {
          network: "pinterest",
          name: "Pinterest",
          icon: ["fab", "pinterest"],
          color: "#bd081c",

          title: this.$i18n.t(this.shareMessage),
          description: "",
          quote: ""
        },
        {
          network: "email",
          name: "Email",
          icon: ["fas", "envelope"],
          color: "#333333",

          title: this.$i18n.t(this.shareMessage),
          description: "",
          quote: ""
        }
      ];
    },
    shareMessage: function() {
      if (localStorage.result == "ENDING_BORBOLETA") {
        return "Na pandemia, sou uma borboleta saindo do casulo. E você?";
      } else if (localStorage.result == "ENDING_CASA") {
        return "Estou pronto para descobrir um mundo novo após a pandemia. E você?";
      } else if (localStorage.result == "ENDING_ENFERMEIRA") {
        return "Na pandemia, eu sou altruísta. E você?";
      } else if (localStorage.result == "ENDING_HOMEM") {
        return "Na pandemia, eu estou em equilíbrio. E você?";
      } else if (localStorage.result == "ENDING_LAGO") {
        return "Na pandemia, eu sou um lago banhado pelo luar. E você?";
      } else if (localStorage.result == "ENDING_LENDO") {
        return "Na pandemia, eu sou como um grande leitor de livros. E você?";
      } else if (localStorage.result == "ENDING_MEDITANDO") {
        return "Na pandemia, eu sou um meditador. E você?";
      } else if (localStorage.result == "ENDING_OCIDENTAL") {
        return "Na pandemia, eu sou um ocidental numa lavanderia. E você?";
      } else if (localStorage.result == "ENDING_TURISTA") {
        return "Na pandemia, eu sou um turista no aeroporto. E você?";
      }
    },
    endingMessage: function() {
      let message = "";
      if (localStorage.result == "ENDING_BORBOLETA") {
        message =
          "VOCÊ É UMA BORBOLETA SAINDO DO CASULO\nSe você enfrentar seus medos, vai se transformar.";
      } else if (localStorage.result == "ENDING_CASA") {
        message =
          "VOCÊ ESTÁ PRONTO PARA SAIR DE CASA. \nÉ hora de, com muita coragem, abrir-se para o desconhecido.";
      } else if (localStorage.result == "ENDING_ENFERMEIRA") {
        message =
          "VOCÊ CUIDA DO PRÓXIMO, COMO UMA ENFERMEIRA DA CRUZ VERMELHA.\nVocê sabe ajudar o outro. E isso te leva pra frente.";
      } else if (localStorage.result == "ENDING_HOMEM") {
        message =
          "VOCÊ ESTÁ  NUMA CANOA, NO MEIO DE UM LAGO.\nO equilíbrio durante a pandemia te renovou.\nVocê está pronto para seguir em frente.";
      } else if (localStorage.result == "ENDING_LAGO") {
        message =
          "VOCÊ É UM LAGO BANHADO PELO LUAR\nVocê está em equilíbrio. Use esse momento para reinventar metas, ritmos e sonhos.";
      } else if (localStorage.result == "ENDING_LENDO") {
        message =
          "VOCÊ É COMO UM GRANDE LEITOR DE LIVROS.\nPara realmente mudar, você precisa deixar o passado para trás.";
      } else if (localStorage.result == "ENDING_MEDITANDO") {
        message =
          "VOCÊ ESTÁ EM ESTADO DE MEDITAÇÃO.\nVocê encontra paz interior e aprende a escutar o tempo.";
      } else if (localStorage.result == "ENDING_OCIDENTAL") {
        message =
          "VOCÊ É UM OCIDENTAL NUMA LAVANDERIA ORIENTAL\nSomos todos iguais, não importa a diferença.";
      } else if (localStorage.result == "ENDING_TURISTA") {
        message =
          "VOCÊ É UM TURISTA NO AEROPORTO\nVocê pode se abrir para novas oportunidades.";
      }
      message = this.$i18n.t(message);
      return message;
    },
    lightEndingImage: function() {
      if (localStorage.result == "ENDING_BORBOLETA") {
        return "assets/slides/images/06_02_05.jpg";
      } else if (localStorage.result == "ENDING_CASA") {
        return "assets/slides/images/06_018_04.jpg";
      } else if (localStorage.result == "ENDING_ENFERMEIRA") {
        return "assets/slides/images/06_10_04.jpg";
      } else if (localStorage.result == "ENDING_HOMEM") {
        return "assets/slides/images/06_022_04.jpg";
      } else if (localStorage.result == "ENDING_LAGO") {
        return "assets/slides/images/06_021_04.jpg";
      } else if (localStorage.result == "ENDING_LENDO") {
        return "assets/slides/images/06_09_04.jpg";
      } else if (localStorage.result == "ENDING_MEDITANDO") {
        return "assets/slides/images/06_08_04.jpg";
      } else if (localStorage.result == "ENDING_OCIDENTAL") {
        return "assets/slides/images/06_06_04.jpg";
      } else if (localStorage.result == "ENDING_TURISTA") {
        return "assets/slides/images/06_01_04.jpg";
      }
    },
    darkEndingImage: function() {
      if (localStorage.result == "ENDING_BORBOLETA") {
        return "assets/slides/images/06_02_06.jpg";
      } else if (localStorage.result == "ENDING_CASA") {
        return "assets/slides/images/06_018_05.jpg";
      } else if (localStorage.result == "ENDING_ENFERMEIRA") {
        return "assets/slides/images/06_10_05.jpg";
      } else if (localStorage.result == "ENDING_HOMEM") {
        return "assets/slides/images/06_022_05.jpg";
      } else if (localStorage.result == "ENDING_LAGO") {
        return "assets/slides/images/06_021_05.jpg";
      } else if (localStorage.result == "ENDING_LENDO") {
        return "assets/slides/images/06_09_05.jpg";
      } else if (localStorage.result == "ENDING_MEDITANDO") {
        return "assets/slides/images/06_08_05.jpg";
      } else if (localStorage.result == "ENDING_OCIDENTAL") {
        return "assets/slides/images/06_06_05.jpg";
      } else if (localStorage.result == "ENDING_TURISTA") {
        return "assets/slides/images/06_01_05.jpg";
      }
    }
  },
  updated() {
    if (!this.loaded) {
      this.getResults();
      this.loaded = true;
    }
  },
  methods: {
    backgroundStyle(type) {
      if (type == "light") {
        return "background-image: url(" + this.lightEndingImage + ")";
      } else if (type == "dark") {
        return "background-image: url(" + this.darkEndingImage + ")";
      }
    },
    goToEnding2() {
      this.ending1 = true;
    },
    playMouseClickSoundEffect() {
      const mouse = new Howl({
        src: "assets/slides/audios/Transmission_Click1.mp3"
      });
      mouse.play();
    },
    async getResults() {
      const endingList = await data.getRatioByEnding();
      const percents = [];
      const listOfEnding = [];

      for (let ending in endingList) {
        const percent = Math.round(endingList[ending] * 100);
        let finalTitle;

        if (ending == "ENDING_ENFERMEIRA") {
          finalTitle = this.$i18n.t("Enfermeira da cruz vermelha");
        } else if (ending == "ENDING_LENDO") {
          finalTitle = this.$i18n.t("Homem lendo dezenas de livros");
        } else if (ending == "ENDING_BORBOLETA") {
          finalTitle = this.$i18n.t("Borboleta saindo do casulo");
        } else if (ending == "ENDING_CASA") {
          finalTitle = this.$i18n.t("Mulher saindo de casa");
        } else if (ending == "ENDING_MEDITANDO") {
          finalTitle = this.$i18n.t("Mulher meditando");
        } else if (ending == "ENDING_TURISTA") {
          finalTitle = this.$i18n.t("Turista no aeroporto");
        } else if (ending == "ENDING_LAGO") {
          finalTitle = this.$i18n.t("Lago banhado pelo luar");
        } else if (ending == "ENDING_HOMEM") {
          finalTitle = this.$i18n.t("Homem numa lagoa");
        } else if (ending == "ENDING_OCIDENTAL") {
          finalTitle = this.$i18n.t("Ocidental numa lavanderia oriental");
        }

        let a = [finalTitle, percent];

        percents.push(percent);
        listOfEnding.push(a);
      }

      const orderPercents = percents.sort((a, b) => (a > b ? -1 : 1));

      for (let i = 0; i < orderPercents.length; i++) {
        const number = orderPercents[i];

        for (let index = 0; index < listOfEnding.length; index++) {
          const item = listOfEnding[index];

          if (item.includes(number) && !this.orderEndings.includes(item)) {
            this.orderEndings.push(item);
          }
        }
      }
    }
  }
};
</script>

<style lang="scss">
.map__info {
  width: 100%;
  height: 100%;
}
.table {
  @include font-scale(10, 16);
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.table__text {
  font-weight: 100;
  @include font-scale(12, 20);
  padding: 5px 0;
}

.table__numbers {
  width: 70px;
  display: inline-block;
}

.table {
  td {
    width: 1vw;
  }

  // @media (max-width: 1024px) {
  //   width: 100%;
  // }
}

.ending__portrait {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ending__portrait img {
  width: 100%;
  max-width: 60vw;
  height: auto;
}
.ending__center {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.background__image {
  height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.message__column {
  float: left;
  width: 50%;
  padding: 1em;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.message__row {
  width: 100%;

  padding: 10vw;
}
.message__row:after {
  content: "";
  display: table;
  clear: both;
}

.share__button {
  width: 100%;
  height: auto;
  border: 1px solid $border-link;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1em;
}
.share__button div {
  height: 100%;
}
.ending__message {
  height: 100%;
}
.ending__message h1 {
  @include font-scale(10, 30);
  color: $white;
  text-align: center;
  font-family: $regular;
  white-space: pre-wrap;
}
.ending__message p {
  text-align: center;
  font-family: $regular;
  @include font-scale(10, 30);
  font-weight: 100;
}
.ending__full {
  width: 100vw;
  cursor: pointer;
}
.ending__full h1 {
  font-family: $regular;
  text-align: center;
  @include font-scale(20, 40);
  white-space: pre-wrap;
}
.ending__full p {
  text-align: center;
  font-family: $regular;
  @include font-scale(10, 30);
  font-weight: 100;
}
.btn {
  width: 33%;
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 0.8em 0.5em; /* Some padding */
  margin: 0 auto;
  cursor: pointer; /* Mouse pointer on hover */
  float: left; /* Float the buttons side by side */
  font-family: $regular;
  @include font-scale(10, 18);
  font-weight: bold;
  text-align: center;
}
@media screen and (max-width: 800px) {
  .message__column {
    width: 100%;
  }
}
@media screen and (max-width: 1020px) {
  .btn {
    width: 50%;
  }
}
.btn-group {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

/* Clear floats (clearfix hack) */
.btn-group:after {
  content: "";
  clear: both;
  display: table;
}
</style>