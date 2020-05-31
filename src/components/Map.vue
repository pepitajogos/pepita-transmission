<template>
  <div class="map__chart">
    <MapChart
      :countryData="countryMap"
      highColor="#0099ff"
      lowColor="#a7ccf1"
      countryStrokeColor="#909090"
      defaultCountryFillColor="#dadada"
    />
  </div>
</template>

<script>
import MapChart from "vue-map-chart";
import * as data from "@/data";

export default {
  name: "Map",
  components: {
    MapChart
  },
  data: () => ({
    countryTotal: 0,
    players: 0,
    countryMap: {},
    orderCountries: []
  }),
  mounted() {
    this.getResults();
  },
  methods: {
    async getResults() {
      const countryList = await data.getCountByCountry();
      const players = [];
      const listOfCountries = [];

      this.countryMap = countryList;

      for (let country in countryList) {
        this.countryTotal++;
        players.push(countryList[country]);

        let b = [countryList[country], country];
        listOfCountries.push(b);
      }

      const reducer = (a, b) => a + b;
      this.players = players.reduce(reducer, 1);

      const orderList = players.sort((a, b) => (a > b ? -1 : 1));

      for (let i = 0; i < orderList.length; i++) {
        const number = orderList[i];

        for (let index = 0; index < listOfCountries.length; index++) {
          const item = listOfCountries[index];

          if (item.includes(number)) {
            this.orderCountries.push(item);
          }
        }
      }
    }
  }
};
</script>

<style lang="scss">
.map__chart {
  color: $black;
  width: 100%;
}
</style>