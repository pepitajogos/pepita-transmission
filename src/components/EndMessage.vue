<template>
  <article class="slide">
    <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
      <div @click="goToPage(1)" v-show="page == 0">
        <div class="ending__image" :style="backgroundStyle('fg')">
          <div class="ending__center">
            <div class="ending__full"></div>
            <div class="slide__default right">{{ $t("Avançar") }}</div>
          </div>
        </div>
      </div>
    </transition>
    <transition v-on:enter="enter" v-on:leave="leave" v-bind:css="false" appear>
      <div v-show="page == 1">
        <div class="background__image" :style="backgroundStyle('bg')">
          <div class="slide__default home-btn" @click="returnToHome">
            <font-awesome-icon :icon="['fa', 'home']"></font-awesome-icon>
          </div>
          <div class="ending__center">
            <div class="ending__title bottom__padding">
              {{ $t(this.userEndingMessage.title) }}
            </div>
            <div class="message__row">
              <div class="message__column message__c1">
                <div class="description__row bottom__padding">
                  <div class="description__column description__label">
                    {{ $t("Significado\nO que fazer\nComo") }}
                  </div>
                  <div class="description__column description__content">
                    {{ $t(this.userEndingMessage.description) }}
                  </div>
                </div>
                <div class="ending__message">{{ $t(this.userEndingMessage.message) }}</div>
              </div>
              <div class="message__column message__c2">
                <div class="share__title bottom__padding">
                  {{ $t("Conte para seus amigos quem é você!") }}
                </div>
                <div class="btn-group bottom__padding">
                  <ShareNetwork
                    class="btn"
                    v-for="network in networks"
                    :network="network.network"
                    :key="network.key"
                    :style="{ backgroundColor: network.color }"
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
                <div class="column__frame">
                  <div class="stats__title bottom__padding">
                    {{ $t("Como o mundo escolheu") }}
                  </div>
                  <ul class="table bottom__padding">
                    <li
                      class="table__text"
                      v-for="ending in orderEndings.slice(0, 9)"
                      :key="ending.id"
                    >
                      <span class="table__numbers"> {{ ending[1] }}% </span>
                      {{ ending[0] }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </article>
</template>

<script>
import * as data from "@/data";
const anim = require("@/anim.js");
const audio = require("@/audio.js");
const endingData = require("@/assets/endingData.json");

export default {
  data: () => ({
    loaded: false,
    page: 0,
    countryTotal: 0,
    players: 0,
    orderEndings: [],
    sharing: {
      url: "https://transmission.earth",
      hashtags: "transmission",
    },
  }),
  props: {
    userEnding: String,
  },
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
          quote: this.$i18n.t(endingData[this.userEnding].shareText),
        },
        {
          network: "twitter",
          name: "Twitter",
          icon: ["fab", "twitter"],
          color: "#1da1f2",

          title: this.$i18n.t(endingData[this.userEnding].shareText),
          description: "",
          quote: "",
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: ["fab", "whatsapp"],
          color: "#25d366",

          title: this.$i18n.t(endingData[this.userEnding].shareText),
          description: "",
          quote: "",
        },
      ];
    },
    userEndingMessage: function() {
      let messageObj = {};
      messageObj["title"] = endingData[this.userEnding].title;
      messageObj["description"] = endingData[this.userEnding].description;
      messageObj["message"] = endingData[this.userEnding].message;
      return messageObj;
    },
  },
  updated() {
    if (!this.loaded) {
      this.getResults();
      this.loaded = true;
    }
  },
  methods: {
    backgroundStyle(type) {
      if (type == "fg") {
        return {
          backgroundImage:
            "url(" +
            require(`../assets/slides/images/${
              endingData[this.userEnding].fgImage
            }`) +
            ")",
        };
      } else if (type == "bg") {
        return {
          backgroundImage:
            "url(" +
            require(`../assets/slides/images/${
              endingData[this.userEnding].bgImage
            }`) +
            ")",
        };
      }
    },
    goToPage(page) {
      audio.playOnce("click");
      this.page = page;
    },
    async getResults() {
      // const mockEndingList = {
      //   ENDING_BORBOLETA: 1,
      //   ENDING_CASA: 1,
      //   ENDING_ENFERMEIRA: 1,
      //   ENDING_HOMEM: 1,
      //   ENDING_LAGO: 1,
      //   ENDING_LENDO: 1,
      //   ENDING_MEDITANDO: 1,
      //   ENDING_OCIDENTAL: 1,
      //   ENDING_TURISTA: 1,
      // };
      const endingList = await data.getRatioByEnding();
      const percents = [];
      const listOfEnding = [];

      for (let ending in endingList) {
        const percent = Math.round(endingList[ending] * 100);
        let finalTitle;

        finalTitle = this.$i18n.t(endingData[ending].alternateTitle);

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
    },
    enter(el, done) {
      anim.enterTransition(el, done);
    },
    leave(el, done) {
      anim.exitTransition(el, done);
    },
    returnToHome() {
      this.$emit("return");
    },
  },
};
</script>

<style lang="scss">
.table {
  width: 100%;
  margin: 0 auto;
  padding: 0;
}
.table__text {
  @include font-scale(8, 18);
  padding: 0.1em 0;
}

.table__numbers {
  font-weight: bold;
  display: inline-block;
}

.table {
  td {
    width: 1vw;
  }
}
.ending__title {
  @include font-scale(8, 50);
  text-align: center;
  font-weight: bold;
  width: 80%;
  text-transform: uppercase;
}
.description__column {
  float: left;
  height: 100%;
  white-space: pre-line;
  @include font-scale(4, 24);
}
.description__label {
  text-align: right;
  padding-right: 1em;
}
.description__content {
  font-weight: bold;
}
.description__row {
  width: 100%;
  overflow: auto;
}
.ending__message {
  @include font-scale(8, 30);
  font-family: $regular;
  white-space: pre-wrap;
}
.share__title {
  @include font-scale(8, 28);
  font-weight: bolder;
  text-transform: uppercase;
  text-align: center;
}
.stats__title {
  @include font-scale(8, 24);
  font-weight: bold;
  text-transform: uppercase;
}
.message__row:after {
  content: "";
  display: table;
  clear: both;
}
.bottom__padding {
  padding-bottom: 2%;
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
.ending__image {
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.background__image {
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.column__frame {
  height: 100%;
  border: 1px solid $border-link;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1em;
}
.message__column {
  float: left;
  // width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 1em;
}
.message__c1 {
  width: 70%;
}
.message__c2 {
  width: 30%;
}
.message__row {
  width: 100%;
  padding: 0 10vw;
  overflow: auto;
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
.ending__full {
  width: 100vw;
}
.btn {
  width: 100%;
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 0.8em 0.5em; /* Some padding */
  margin: 0 auto;
  cursor: pointer; /* Mouse pointer on hover */
  float: left; /* Float the buttons side by side */
  font-family: $regular;
  @include font-scale(8, 18);
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
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

.home-btn {
  top: 4%;
  left: 2%;
  @include font-scale(8, 18);
}

@media screen and (max-width: 1000px) {
  // .message__c1 {
  //   width: 60%;
  // }
  // .message__c2 {
  //   width: 40%;
  // }
  .column__frame {
    padding: 0.2em;
  }
  .message__column {
    padding: 0.2em;
  }
  .message__row {
    padding: 0 2vw;
  }
}
</style>
