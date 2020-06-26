<template>
  <article class="map">
    <LoadingSpinner v-show="!loadedCountries" />
    <div class="map__bg" v-show="loadedCountries">
      <div class="map__content" @click="next()">
        <h2>{{ $t("The World is playing Transmission") }}</h2>
        <p>
          {{
            $t(
              "Até o momento, {0} pessoas jogaram Transmission em {1} países.",
              { 0: playersTotal, 1: countryTotal }
            )
          }}
        </p>
        <MapChart
          class="map__chart"
          :countryData="countryMap"
          highColor="#0099ff"
          lowColor="#a7ccf1"
          countryStrokeColor="#909090"
          defaultCountryFillColor="#dadada"
        />
        <!-- <p>{{ $t('Boa sorte!') }}</p> -->
      </div>
    </div>
  </article>
</template>

<script>
import LoadingSpinner from "./LoadingSpinner";
import MapChart from "vue-map-chart";
import * as data from "@/data";

export default {
  name: "Map",
  components: {
    MapChart,
    LoadingSpinner,
  },
  data: () => ({
    loadedCountries: false,
    countryTotal: 0,
    playersTotal: 0,
    countryMap: {},
    orderCountries: [],
  }),
  updated() {
    if (!this.loadedCountries) {
      this.getResults();
    }
  },
  methods: {
    next() {
      this.$emit("clicked");
    },
    async getResults() {
      const countryList = await data.getCountByCountry();

      this.countryMap = countryList;

      for (let country in countryList) {
        this.countryTotal++;
        this.playersTotal += countryList[country];
      }

      this.loadedCountries = true;
    },
  },
};
</script>

<style lang="scss">
.map {
  background: $darker;
  color: $white;
  width: 100vw;
  height: 100vh;
}
.map__bg {
  background: url("../../src/assets/landing/map-bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  max-height: 100vh;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
}
.map__content {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.map__content h2 {
  text-align: center;
  @include font-scale(10, 30);
  margin-top: 10px;
  margin-bottom: 5px;
}
.map__content p {
  text-align: center;
  color: $white;
  @include font-scale(10, 20);
  margin-top: 10px;
  font-weight: 400;
  margin-bottom: 50px;
}
.map__chart {
  width: 40vw;
}
.vue-map-legend {
  width: auto !important;
  background: whitesmoke !important;
  border: none !important;
  border-radius: 1em 1em 1em 1em !important;
}
.vue-map-legend-header {
  background-color: none !important;
  border: none !important;
}
.vue-map-legend-header span {
  font-family: $regular !important;
  @include font-scale(16, 24);
  color: black !important;
}
.vue-map-legend-content {
  background: none !important;
  border: none !important;
}
.vue-map-legend-content span {
  font-family: $regular !important;
  @include font-scale(16, 24);
  color: black !important;
}
</style>
