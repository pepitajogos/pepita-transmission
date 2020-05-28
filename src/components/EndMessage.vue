<template>
  <article class="slide">
    <div class="slide__content" :style="backgroundStyle">
      <div class="center">
        <p class="message">{{$t(endingMessage)}}</p>

        <div class="map__info">
          <ul class="table">
            <li
              class="table__text"
              v-for="(ending, index) in orderEndings.slice(0, 9)"
              :key="ending.id"
            >
              <span class="table__numbers">{{index + 1}} - {{ ending[1] }}%</span>
              {{ ending[0] }}
            </li>
          </ul>
        </div>
      </div>
      <div class="slide__default" @click="share()">
        <img src="../../public/assets/share.png" />
      </div>
    </div>
    <web-social-share show="false" class="social">
      <ion-icon
        name="logo-twitter"
        slot="twitter"
        style="color: #00aced; width: 1.4rem; display: block;"
      ></ion-icon>
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
  </article>
</template>

<script>
import * as data from "@/data";
import {
  applyPolyfills,
  defineCustomElements
} from "web-social-share/dist/loader";

export default {
  data: () => ({
    countryTotal: 0,
    players: 0,
    countryMap: {},
    orderCountries: [],
    orderEndings: []
  }),
  mounted() {
    this.getResults();
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
  computed: {
    backgroundStyle: function() {
      if (localStorage.result == "ENDING_BORBOLETA") {
        return `background-image: url('assets/slides/images/06_02_06.jpg')`;
      } else if (localStorage.result == "ENDING_CASA") {
        return `background-image: url('assets/slides/images/06_018_05.jpg')`;
      } else if (localStorage.result == "ENDING_ENFERMEIRA") {
        return `background-image: url('assets/slides/images/06_10_05.jpg')`;
      } else if (localStorage.result == "ENDING_HOMEM") {
        return `background-image: url('assets/slides/images/06_022_05.jpg')`;
      } else if (localStorage.result == "ENDING_LAGO") {
        return `background-image: url('assets/slides/images/06_021_05.jpg')`;
      } else if (localStorage.result == "ENDING_LENDO") {
        return `background-image: url('assets/slides/images/06_09_05.jpg')`;
      } else if (localStorage.result == "ENDING_MEDITANDO") {
        return `background-image: url('assets/slides/images/06_08_05.jpg')`;
      } else if (localStorage.result == "ENDING_OCIDENTAL") {
        return `background-image: url('assets/slides/images/06_06_05.jpg')`;
      } else if (localStorage.result == "ENDING_TURISTA") {
        return `background-image: url('assets/slides/images/06_01_05.jpg')`;
      }
    },
    endingMessage: function() {
      if (localStorage.result == "ENDING_BORBOLETA") {
        return "VOCÊ É UMA BORBOLETA SAINDO DO CASULO\nSe você enfrentar seus medos, vai se transformar.";
      } else if (localStorage.result == "ENDING_CASA") {
        return "VOCÊ É UMA MULHER SAINDO DE CASA\nÉ hora de, com muita coragem, abrir-se para o desconhecido.";
      } else if (localStorage.result == "ENDING_ENFERMEIRA") {
        return "VOCÊ É UMA ENFERMEIRA DA CRUZ VERMELHA\nVocê sabe ajudar o outro. E isso te leva pra frente.";
      } else if (localStorage.result == "ENDING_HOMEM") {
        return "VOCÊ É UM HOMEM NUMA LAGOA\nO equilíbrio durante a pandemia te renovou.\n Você está pronto para seguir em frente.";
      } else if (localStorage.result == "ENDING_LAGO") {
        return "VOCÊ É UM LAGO BANHADO PELO LUAR\nVocê está em equilíbrio. Use esse momento para reinventar metas, ritmos e sonhos.";
      } else if (localStorage.result == "ENDING_LENDO") {
        return "VOCÊ É UM HOMEM LENDO DEZENAS DE LIVROS\nPara realmente mudar, você precisa deixar o passado para trás.";
      } else if (localStorage.result == "ENDING_MEDITANDO") {
        return "VOCÊ É UMA MULHER MEDITANDO\nVocê encontra paz interior e aprende a escutar o tempo.";
      } else if (localStorage.result == "ENDING_OCIDENTAL") {
        return "VOCÊ É UM OCIDENTAL NUMA LAVANDERIA ORIENTAL\nSomos todos iguais, não importa a diferença.";
      } else if (localStorage.result == "ENDING_TURISTA") {
        return "VOCÊ É UM TURISTA NO AEROPORTO\nVocê pode se abrir para novas oportunidades.";
      }
    }
  },
  methods: {
    playMouseClickSoundEffect() {
      const mouse = new Howl({
        src: "assets/slides/audios/Transmission_Click1.mp3"
      });
      mouse.play();
    },
    share() {
      return new Promise(async resolve => {
        const webSocialShare = document.querySelector(".social");

        if (!webSocialShare || !window) {
          return;
        }

        const shareUrl = `${window.location.protocol}//${window.location.host}`;

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
        };
        // The configuration, set the share options
        webSocialShare.share = share;
        // Show/open the share actions
        webSocialShare.show = true;

        resolve();
      });
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
.message {
  font-family: $regular;
  font-weight: bold;
  @include font-scale(10, 30);
  color: $white;
  white-space: pre-wrap;
}

.center {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -25%);
}

.slide {
  background: $darker;
  color: $white;
  width: 100vw;
  height: 100vh;
}

.slide__content {
  width: 100vw;
  height: 57vw;
  max-height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @include center(relative);
}
.map__info {
  width: 100%;
}
.table {
  @include font-scale(10, 16);
  width: 60%;
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
.slide__default {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: $white;
  cursor: pointer;
  border: 1px solid $border-link;
  background-color: rgba(0, 0, 0, 0.6);
  max-width: 29vw;
  @include font-scale(10, 30);
  font-weight: 100;
  white-space: pre-wrap;

  position: absolute;
  right: 5%;
  bottom: 20%;
}
</style>