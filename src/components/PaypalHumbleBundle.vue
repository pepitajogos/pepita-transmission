<template>
  <article class="humble__bundle__panel">
    <div class="bundle__container">
      <div class="bundle__column">
        <h1>{{$t("Contribua!")}}</h1>
        <currency-input class="currency__input" id="totalValue" v-model="totalValue" />
        <div class="paypal__panel">
          <div ref="paypal"></div>
        </div>
      </div>
      <div class="bundle__column">
        <p>{{$t("Você escolhe o destino da sua contribuição")}}</p>
        <div class="slider__bg">
          <div class="slider__panel">
            <span style="float:left">Elemento 1</span>
            <span style="float:right">{{ percentageFormat(sliders[0])}}</span>
            <range-slider
              class="range-slider"
              min="0"
              max="100"
              v-model="sliders[0]"
              v-on:input="calculateLinkedSliders(0)"
            ></range-slider>
          </div>
          <div class="slider__panel">
            <span style="float:left">Elemento 2</span>
            <span style="float:right">{{ percentageFormat(sliders[1])}}</span>
            <range-slider
              class="range-slider"
              min="0"
              max="100"
              v-model="sliders[1]"
              v-on:input="calculateLinkedSliders(1)"
            ></range-slider>
          </div>
          <div class="slider__panel">
            <span style="float:left">Elemento 3</span>
            <span style="float:right">{{ percentageFormat(sliders[2])}}</span>
            <range-slider
              class="range-slider"
              min="0"
              max="100"
              v-model="sliders[2]"
              v-on:input="calculateLinkedSliders(2)"
            ></range-slider>
          </div>
          <div class="slider__panel">
            <span style="float:left">Elemento 4</span>
            <span style="float:right">{{ percentageFormat(sliders[3])}}</span>
            <range-slider
              class="range-slider"
              min="0"
              max="100"
              v-model="sliders[3]"
              v-on:input="calculateLinkedSliders(3)"
            ></range-slider>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import RangeSlider from "vue-range-slider";

export default {
  name: "PaypalHumbleBundle",
  data: () => ({
    totalValue: 1,
    sliders: [25, 25, 25, 25],
    loaded: false,
    locale: "en",
    currency: "USD"
  }),
  components: {
    RangeSlider
  },
  methods: {
    percentageFormat(val) {
      return (
        Number(val / this.totalValue)
          .toFixed(1)
          .toString()
          .replace(".", ",") + "%"
      );
    },
    calculateLinkedSliders: function(index) {
      if (this.sliders.length < 2) {
        return;
      }
      let totalDiff = this.totalPercentage - 100;
      let partialDiff = totalDiff / this.sliders.length;
      for (let i = 0; i < this.sliders.length; i++) {
        if (this.sliders[index] == 100 && i != index) {
          this.sliders[i] = 0;
        } else {
          this.sliders[i] = this.sliders[i] - partialDiff;
          if (this.sliders[i] < 0) {
            this.sliders[i] = 0;
          }
          if (this.sliders[i] > 100) {
            this.sliders[i] = 100;
          }
        }
      }
    },
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  name: "Transmission",
                  description: this.description,
                  amount: {
                    currency_code: "USD",
                    value: this.totalValue
                  }
                }
              ]
            });
          }
        })
        .render(this.$refs.paypal);
    }
  },
  computed: {
    description: function() {
      return (
        "Elemento 1:" +
        this.percentageFormat(this.sliders[0]) +
        " || Elemento 2:" +
        this.percentageFormat(this.sliders[1]) +
        " || Elemento 3:" +
        this.percentageFormat(this.sliders[2]) +
        " || Elemento 4:" +
        this.percentageFormat(this.sliders[3])
      );
    },
    totalPercentage() {
      let percentage = 0;
      for (let index = 0; index < this.sliders.length; index++) {
        percentage += this.sliders[index];
      }
      return percentage;
    }
  },
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=ASCNE_yzVshXYeTw5rQqdlRwq9EQrhT12Dc5LbJPGcR2hH2O2xI_cyamdSdlDGqUXY9_VDKkO2ZS3jDq";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  }
};
</script>
<style lang="scss">
.humble__bundle__panel {
  width: auto;
  height: auto;
}
.humble__bundle__panel h1 {
  font-weight: bold;
  @include font-scale(10, 24);
  color: $white;
  text-align: center;
}
.humble__bundle__panel p {
  font-weight: 100;
  @include font-scale(8, 18);
  color: $white;
  text-align: center;
}
.humble__bundle__panel span {
  font-weight: 100;
  @include font-scale(8, 18);
  color: $white;
}
.currency {
  width: auto;
}

$slider-height: auto !default;
$slider-width: 100% !default;
$rail-height: 1em !default;
$knob-size: 1.2em !default;
$rail-color: #2c2c2c !default;
$rail-fill-color: rgba(255, 196, 57, 1) !default;
$knob-color: rgba(255, 196, 57, 1) !default;
$knob-border: 0px !default;
$knob-shadow: 0px !default;

.slider {
  display: inline-block;
  padding: 0 ($knob-size / 2);
  height: $slider-height;
  width: $slider-width;
}
.range-slider.disabled {
  opacity: 0.5;
}
.range-slider-inner {
  display: inline-block;
  position: relative;
  height: 100%;
  width: 100%;
}
.range-slider-rail,
.range-slider-fill {
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  height: $rail-height;
  border-radius: $rail-height / 2;
  transform: translateY(-50%);
}
.range-slider-rail {
  width: 100%;
  background-color: $rail-color;
}
.range-slider-fill {
  background-color: $rail-fill-color;
}
.range-slider-knob {
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  box-sizing: border-box;
  height: $knob-size;
  width: $knob-size;
  border: $knob-border;
  border-radius: 50%;
  background-color: $knob-color;
  box-shadow: $knob-shadow;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.range-slider-hidden {
  display: none;
}
.currency__input {
  border-color: #cccccc;
  padding: 0.2em;
  @include font-scale(14, 30);
  text-align: center;
  border-width: 0px;
  border-style: hidden;
  width: 100%;
}
.currency__input:focus {
  outline: none;
}
.slider__panel {
  height: auto;
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}
.slider__bg {
  margin-top: 0.4em;
  margin-bottom: 0.4em;
}
.paypal__panel {
  height: auto;
  margin-top: 1em;
}
.bundle__column {
  float: left;
  width: 50%;
  padding: 0.2em;
}

.bundle__container:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 800px) {
  .bundle__column {
    width: 100%;
  }
}
</style>