<template>
  <span v-show="isLoaded" class="bigger">{{formattedValue}}</span>
</template>

<script>
import {getRatioByEnding} from "@/data"

export default {
  name: "RatioByEnding",
  props: ['ending'],
  data: () => ({
    isLoaded: false,
    value: 0,
  }),

  mounted() {
    this.fetchValue();
  },

  computed: {
    formattedValue: function () {
      return Number(this.value * 100).toLocaleString(undefined, {
        style: 'decimal',
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      })
    },
  },

  methods: {
    async fetchValue() {
      const results = await getRatioByEnding();

      if (results[this.ending]) {
        this.value = results[this.ending];
      } else {
        this.value = 0;
      }

      this.isLoaded = true;
    }
  }

}
</script>