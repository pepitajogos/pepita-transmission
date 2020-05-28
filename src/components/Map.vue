<template>
  <article class="map">
    <div class="map__content ">
      <div class="map__chart">
        <MapChart
        :countryData="countryMap"
        highColor="#0099ff"
        lowColor="#a7ccf1"
        countryStrokeColor="#909090"
        defaultCountryFillColor="#dadada"
        />
      </div>
      <div class="map__stats">
        <div class="map__intro" @click="next">
          <p class="map__text">{{ players }}<span>PLAYERS</span></p>
          <p class="map__text">{{ countryTotal }}<span>COUNTRIES</span></p>
        </div>
        <div class="map__info">
          <ul class="table" @click="next">
            <li class="table__text" v-for="(ending, index) in orderEndings.slice(0, 9)" :key="ending.id">
              <span class="table__numbers">{{index + 1}} - {{ ending[1] }}%</span> {{ ending[0] }}
            </li>
          </ul>
          <div @click="next" class="share__link">{{ $t('Share') }}</div>
        </div>
      </div>
      <web-social-share show="false" class="social2">
        <ion-icon name="logo-twitter" slot="twitter" style="color: #00aced; width: 1.4rem; display: block;"></ion-icon>
        <ion-icon name="logo-facebook" slot="facebook" style="color: #3b5998; width: 1.4rem; display: block;"></ion-icon>
        <ion-icon name="copy" slot="copy" style="color: #000000; width: 1.4rem; display: block;"></ion-icon>
        <ion-icon name="mail" slot="email" style="color: #00aced; width: 1.4rem; display: block;"></ion-icon>
        <ion-icon name="logo-linkedin" slot="linkedin" style="color: #0e76a8; width: 1.4rem; display: block;"></ion-icon>
        <ion-icon name="logo-pinterest" slot="pinterest" style="color: #c8232c; width: 1.4rem; display: block;"></ion-icon>
        <ion-icon name="logo-whatsapp" slot="whatsapp" style="color: #075e54; width: 1.4rem; display: block;"></ion-icon>
      </web-social-share>
    </div>
  </article>
</template>

<script>
import { applyPolyfills, defineCustomElements } from "web-social-share/dist/loader";
import MapChart from 'vue-map-chart'
import * as data from "@/data";

export default {
  name: 'Map',
  components: {
    MapChart,
  },
  data: () => ({
    countryTotal: 0,
    players: 0,
    countryMap: {},
    orderCountries: [],
    orderEndings: [],
  }),
  computed: {
  },
  mounted(){
    this.getResults();
  },
  methods: {
    share() {
      return new Promise(async (resolve) => {
        const webSocialShare =
              document.querySelector('.social2');

        if (!webSocialShare || !window) {
          return;
        }

        const shareUrl =
              `${window.location.protocol}//${window.location.host}`;

        const share = {
          displayNames: true,
          config: [{
            facebook: {
              socialShareUrl: shareUrl,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400
          },
          },{
            twitter: {
              socialShareUrl: shareUrl,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400
            }
          },{
            copy: {
              socialShareUrl: shareUrl,
            }
          },{
            email: {
              socialShareUrl: shareUrl,
            }
          },{
            linkedin: {
              socialShareBody: shareUrl,
              socialSharePopupWidth: 300,
              socialSharePopupHeight: 400
            }
          },{
            whatsapp: {
              socialShareUrl: shareUrl
            }
          }]
        };
        // The configuration, set the share options
        webSocialShare.share = share;
        // Show/open the share actions
        webSocialShare.show = true;

        resolve();
      });
    },
    async getResults() {
      const countryList = await data.getCountByCountry();
      const endingList = await data.getRatioByEnding();
      const players = [];
      const listOfCountries = [];
      const percents = []
      const listOfEnding = [];

      this.countryMap = countryList;

      for(let country in countryList){
        this.countryTotal++;
        players.push(countryList[country]);

        let b = [countryList[country], country];
        listOfCountries.push(b)
      }

      const reducer = (a, b) => a + b;
      this.players = players.reduce(reducer, 1);

      const orderList = players.sort((a, b) => (a > b ? -1 : 1));

      for (let i = 0; i < orderList.length; i++) {
        const number = orderList[i];

        for (let index = 0; index < listOfCountries.length; index++) {
          const item = listOfCountries[index];

          if(item.includes(number)){
            this.orderCountries.push(item);
          }
        }
      }

      for(let ending in endingList){
        const percent = Math.round(endingList[ending] * 100);
        let finalTitle;

        if(ending == 'ENDING_ENFERMEIRA'){
          finalTitle = this.$i18n.t('Enfermeira da cruz vermelha');
        } else if(ending == 'ENDING_LENDO'){
          finalTitle = this.$i18n.t('Homem lendo dezenas de livros');
        } else if(ending == 'ENDING_BORBOLETA'){
          finalTitle = this.$i18n.t('Borboleta saindo do casulo');
        } else if(ending == 'ENDING_CASA'){
          finalTitle = this.$i18n.t('Mulher saindo de casa');
        } else if(ending == 'ENDING_MEDITANDO'){
          finalTitle = this.$i18n.t('Mulher meditando');
        } else if(ending == 'ENDING_TURISTA'){
          finalTitle = this.$i18n.t('Turista no aeroporto');
        } else if(ending == 'ENDING_LAGO'){
          finalTitle = this.$i18n.t('Lago banhado pelo luar');
        } else if(ending == 'ENDING_HOMEM'){
          finalTitle = this.$i18n.t('Homem numa lagoa');
        } else if(ending == 'ENDING_OCIDENTAL'){
          finalTitle = this.$i18n.t('Ocidental numa lavanderia oriental');
        }

        let a = [finalTitle, percent];

        percents.push(percent);
        listOfEnding.push(a)
      }

      const orderPercents = percents.sort((a, b) => (a > b ? -1 : 1));

      for (let i = 0; i < orderPercents.length; i++) {
        const number = orderPercents[i];

        for (let index = 0; index < listOfEnding.length; index++) {
          const item = listOfEnding[index];

          if(item.includes(number) && !this.orderEndings.includes(item)){
            this.orderEndings.push(item);
          }
        }
      }
    },
    next() {
      this.$emit('clicked');
    },
  },
}
</script>

<style lang="scss">
.map {
  background: url('../../public/assets/08_01_world-stats.jpg') no-repeat center;
  background-size: cover;
  color: $white;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}

.share__link {
  @include font-scale(20, 50);
  text-align: center;
  margin-top: 40px;
  text-transform: uppercase;
}

.map__text {
  text-align: center;
  font-family: $regular;
  font-weight: 100;
  font-size: 50px !important;

  span {
    display: block;
    font-size: 16px;
  }
}

.map__intro {
  display: flex;
  justify-content: space-around;
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

.table{
  td{
    width: 1vw;
  }

  // @media (max-width: 1024px) {
  //   width: 100%;
  // }
}

.map__text {
  @include font-scale(10, 20);
}

.map__content {
  width: 100vw;
  height: 57vw;
  max-height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    @include center(relative);
    width: 100%;
    height: 90%;
  }
}

.map__chart {
  color: $black;
  width: 50%;

  @media (max-width: 1024px) {
    width: 80%;
    margin: auto;
    margin-top: 4vh;
  }
}

.map__stats {
  position: absolute;
  margin-left: 2vw;
  padding: 3vw;
  width: 45vw;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 85vw;
    margin: auto;
    left: inherit;
    position: relative;
    margin-top: 4vh;
    margin-bottom: 11vh;
  }

  @media (min-width: 1024px) {
    @include center(absolute);
    left: 73%;
  }
}

.table__bigger {
  width: 300%;
}
</style>