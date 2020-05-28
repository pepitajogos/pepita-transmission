<template>
  <article class="loader">
    <svg class="loader__content" viewBox="0 0 120 120"></svg>
    <h1 class="loader__title">Trans.Mission</h1>
  </article>
</template>

<script>
import { TweenMax } from "gsap";
import 'createjs';
export default {
  props: ['completeCallback'],
  name: "loader",
  components: {},
  mounted(){
    this.setupLoadQueue()
  },
  methods: {
    show() {
      TweenMax.set(".loader", { display: "block" });
      TweenMax.fromTo('.loader', 0.6, { autoAlpha: 0 }, { autoAlpha: 1, ease: Quad.easeInOut })
      TweenMax.fromTo('.loader__content', 0.6, { autoAlpha: 0, x: '-50%', y: '-50%' }, { autoAlpha: 1, x: '-50%', y: '-50%', ease: Quad.easeInOut, delay: 0.4, onComplete: ()=> {
      }})
    },
    hide() {
      TweenMax.fromTo('.loader', 0.6, { autoAlpha: 1 }, { autoAlpha: 0, ease: Quad.easeInOut })
      TweenMax.fromTo('.loader__content', 0.6, { autoAlpha: 1, x: '-50%', y: '-50%' }, { autoAlpha: 0, x: '-50%', y: '-50%', ease: Quad.easeInOut, onComplete: ()=> {
        TweenMax.set(".loader", { display: "none" });
      }})
    },
    setupLoadQueue(){
      this.queue = new createjs.LoadQueue();
      this.queue.on("complete", this.handleComplete, this);
      this.queue.loadManifest([
        { id: '01_01_001', src: 'assets/slides/images/01_01_001.jpg' },
        // { id: '03_02_10', src: 'assets/slides/images/03_02_10.jpg' },
        // { id: '04_02_010_A.', src: 'assets/slides/images/04_02_010_A.jpg' },
        // { id: '04_06_0003', src: 'assets/slides/images/04_06_0003.jpg' },
        // { id: '05_05_0001', src: 'assets/slides/images/05_05_0001.jpg' },
        // { id: '05_10_06A', src: 'assets/slides/images/05_10_06A.jpg' },
        // { id: '06_016_003', src: 'assets/slides/images/06_016_003.jpg' },
        // { id: '06_02_002', src: 'assets/slides/images/06_02_002.jpg' },
        // { id: '01_01_002p', src: 'assets/slides/images/01_01_002.jpg' },
        // { id: '03_02_11A.', src: 'assets/slides/images/03_02_11A.jpg' },
        // { id: '04_02_010_', src: 'assets/slides/images/04_02_010_B.jpg' },
        // { id: '04_06_0004', src: 'assets/slides/images/04_06_0004.jpg' },
        // { id: '05_05_0002', src: 'assets/slides/images/05_05_0002.jpg' },
        // { id: '05_10_06B', src: 'assets/slides/images/05_10_06B.jpg' },
        // { id: '06_017_002', src: 'assets/slides/images/06_017_002.jpg' },
        // { id: '06_02_03', src: 'assets/slides/images/06_02_03.jpg' },
        // { id: '01_01_004', src: 'assets/slides/images/01_01_004.jpg' },
        // { id: '03_02_11B.', src: 'assets/slides/images/03_02_11B.jpg' },
        // { id: '04_02_06', src: 'assets/slides/images/04_02_06.jpg' },
        // { id: '04_06_0005', src: 'assets/slides/images/04_06_0005.jpg' },
        // { id: '05_05_0003', src: 'assets/slides/images/05_05_0003.jpg' },
        // { id: '05_11_01', src: 'assets/slides/images/05_11_01.jpg' },
        // { id: '06_017_003', src: 'assets/slides/images/06_017_003.jpg' },
        // { id: '06_02_04', src: 'assets/slides/images/06_02_04.jpg' },
        // { id: '01_01_005_A.', src: 'assets/slides/images/01_01_005_A.jpg' },
        // { id: '03_03_01', src: 'assets/slides/images/03_03_01.jpg' },
        // { id: '04_02_07', src: 'assets/slides/images/04_02_07.jpg' },
        // { id: '04_06_0006', src: 'assets/slides/images/04_06_0006.jpg' },
        // { id: '05_05_004A', src: 'assets/slides/images/05_05_004A.jpg' },
        // { id: '05_11_02', src: 'assets/slides/images/05_11_02.jpg' },
        // { id: '06_017_004', src: 'assets/slides/images/06_017_004.jpg' },
        // { id: '06_02_05', src: 'assets/slides/images/06_02_05.jpg' },
        // { id: '02_01_01', src: 'assets/slides/images/02_01_01.jpg' },
        // { id: '03_03_02', src: 'assets/slides/images/03_03_02.jpg' },
        // { id: '04_02_08', src: 'assets/slides/images/04_02_08.jpg' },
        // { id: '04_06_007A', src: 'assets/slides/images/04_06_007A.jpg' },
        // { id: '05_06_05', src: 'assets/slides/images/05_06_05.jpg' },
        // { id: '05_11_03', src: 'assets/slides/images/05_11_03.jpg' },
        // { id: '06_018_003', src: 'assets/slides/images/06_018_003.jpg' },
        // { id: '06_02_06', src: 'assets/slides/images/06_02_06.jpg' },
        // { id: '02_01_02', src: 'assets/slides/images/02_01_02.jpg' },
        // { id: '03_03_03', src: 'assets/slides/images/03_03_03.jpg' },
        // { id: '04_03_01', src: 'assets/slides/images/04_03_01.jpg' },
        // { id: '04_07_01', src: 'assets/slides/images/04_07_01.jpg' },
        // { id: '05_06_07A', src: 'assets/slides/images/05_06_07A.jpg' },
        // { id: '05_11_05A.', src: 'assets/slides/images/05_11_05A.jpg' },
        // { id: '06_018_04.', src: 'assets/slides/images/06_018_04.jpg' },
        // { id: '06_03_001.', src: 'assets/slides/images/06_03_001.jpg' },
        // { id: '02_01_04_j', src: 'assets/slides/images/02_01_04_A.jpg' },
        // { id: '03_03_04', src: 'assets/slides/images/03_03_04.jpg' },
        // { id: '04_03_011A', src: 'assets/slides/images/04_03_011A.jpg' },
        // { id: '04_07_02', src: 'assets/slides/images/04_07_02.jpg' },
        // { id: '05_06_07B', src: 'assets/slides/images/05_06_07B.jpg' },
        // { id: '05_11_05B.', src: 'assets/slides/images/05_11_05B.jpg' },
        // { id: '06_018_05.', src: 'assets/slides/images/06_018_05.jpg' },
        // { id: '06_03_002.', src: 'assets/slides/images/06_03_002.jpg' },
        // { id: '02_01_04_j', src: 'assets/slides/images/02_01_04_B.jpg' },
        // { id: '03_03_06', src: 'assets/slides/images/03_03_06.jpg' },
        // { id: '04_03_011B', src: 'assets/slides/images/04_03_011B.jpg' },
        // { id: '04_07_07', src: 'assets/slides/images/04_07_07.jpg' },
        // { id: '05_07_0001', src: 'assets/slides/images/05_07_0001.jpg' },
        // { id: '06_010_003', src: 'assets/slides/images/06_010_003.jpg' },
        // { id: '06_019_003', src: 'assets/slides/images/06_019_003.jpg' },
        // { id: '06_03_04', src: 'assets/slides/images/06_03_04.jpg' },
        // { id: '02_01_04_C', src: 'assets/slides/images/02_01_04_C.jpg' },
        // { id: '03_03_07A', src: 'assets/slides/images/03_03_07A.jpg' },
        // { id: '04_03_02', src: 'assets/slides/images/04_03_02.jpg' },
        // { id: '04_07_08', src: 'assets/slides/images/04_07_08.jpg' },
        // { id: '05_07_0002', src: 'assets/slides/images/05_07_0002.jpg' },
        // { id: '06_011_001', src: 'assets/slides/images/06_011_001.jpg' },
        // { id: '06_01_001', src: 'assets/slides/images/06_01_001.jpg' },
        // { id: '06_04_01', src: 'assets/slides/images/06_04_01.jpg' },
        // { id: '02_02_06', src: 'assets/slides/images/02_02_06.jpg' },
        // { id: '03_04_07', src: 'assets/slides/images/03_04_07.jpg' },
        // { id: '04_03_03', src: 'assets/slides/images/04_03_03.jpg' },
        // { id: '05_01_01', src: 'assets/slides/images/05_01_01.jpg' },
        // { id: '05_07_0003', src: 'assets/slides/images/05_07_0003.jpg' },
        // { id: '06_011_002', src: 'assets/slides/images/06_011_002.jpg' },
        // { id: '06_01_002', src: 'assets/slides/images/06_01_002.jpg' },
        // { id: '06_04_02', src: 'assets/slides/images/06_04_02.jpg' },
        // { id: '02_02_07', src: 'assets/slides/images/02_02_07.jpg' },
        // { id: '03_04_08', src: 'assets/slides/images/03_04_08.jpg' },
        // { id: '04_03_04', src: 'assets/slides/images/04_03_04.jpg' },
        // { id: '05_01_02', src: 'assets/slides/images/05_01_02.jpg' },
        // { id: '05_07_0004', src: 'assets/slides/images/05_07_0004.jpg' },
        // { id: '06_011_003', src: 'assets/slides/images/06_011_003.jpg' },
        // { id: '06_01_03', src: 'assets/slides/images/06_01_03.jpg' },
        // { id: '06_04_03', src: 'assets/slides/images/06_04_03.jpg' },
        // { id: '02_02_08', src: 'assets/slides/images/02_02_08.jpg' },
        // { id: '03_04_10A', src: 'assets/slides/images/03_04_10A.jpg' },
        // { id: '04_03_08', src: 'assets/slides/images/04_03_08.jpg' },
        // { id: '05_01_03', src: 'assets/slides/images/05_01_03.jpg' },
        // { id: '05_07_005A', src: 'assets/slides/images/05_07_005A.jpg' },
        // { id: '06_012_004', src: 'assets/slides/images/06_012_004.jpg' },
        // { id: '06_01_04', src: 'assets/slides/images/06_01_04.jpg' },
        // { id: '06_05_03', src: 'assets/slides/images/06_05_03.jpg' },
        // { id: '02_02_09A', src: 'assets/slides/images/02_02_09A.jpg' },
        // { id: '03_04_10B.', src: 'assets/slides/images/03_04_10B.jpg' },
        // { id: '04_03_09', src: 'assets/slides/images/04_03_09.jpg' },
        // { id: '05_01_04A', src: 'assets/slides/images/05_01_04A.jpg' },
        // { id: '05_08_0001', src: 'assets/slides/images/05_08_0001.jpg' },
        // { id: '06_012_01', src: 'assets/slides/images/06_012_01.jpg' },
        // { id: '06_01_05', src: 'assets/slides/images/06_01_05.jpg' },
        // { id: '06_06_03', src: 'assets/slides/images/06_06_03.jpg' },
        // { id: '02_02_09B', src: 'assets/slides/images/02_02_09B.jpg' },
        // { id: '03_05_01', src: 'assets/slides/images/03_05_01.jpg' },
        // { id: '04_04_07', src: 'assets/slides/images/04_04_07.jpg' },
        // { id: '05_02_001', src: 'assets/slides/images/05_02_001.jpg' },
        // { id: '05_08_0002', src: 'assets/slides/images/05_08_0002.jpg' },
        // { id: '06_012_03', src: 'assets/slides/images/06_012_03.jpg' },
        // { id: '06_020_003', src: 'assets/slides/images/06_020_003.jpg' },
        // { id: '06_06_04', src: 'assets/slides/images/06_06_04.jpg' },
        // { id: '02_02_09C', src: 'assets/slides/images/02_02_09C.jpg' },
        // { id: '03_05_02', src: 'assets/slides/images/03_05_02.jpg' },
        // { id: '04_04_08_A', src: 'assets/slides/images/04_04_08_A.jpg' },
        // { id: '05_02_002', src: 'assets/slides/images/05_02_002.jpg' },
        // { id: '05_08_0003', src: 'assets/slides/images/05_08_0003.jpg' },
        // { id: '06_013_003', src: 'assets/slides/images/06_013_003.jpg' },
        // { id: '06_021_001', src: 'assets/slides/images/06_021_001.jpg' },
        // { id: '06_06_05', src: 'assets/slides/images/06_06_05.jpg' },
        // { id: '03_01_01', src: 'assets/slides/images/03_01_01.jpg' },
        // { id: '03_05_03', src: 'assets/slides/images/03_05_03.jpg' },
        // { id: '04_04_08_B', src: 'assets/slides/images/04_04_08_B.jpg' },
        // { id: '05_02_003', src: 'assets/slides/images/05_02_003.jpg' },
        // { id: '05_08_0004', src: 'assets/slides/images/05_08_0004_A.jpg' },
        // { id: '06_013_01', src: 'assets/slides/images/06_013_01.jpg' },
        // { id: '06_021_002', src: 'assets/slides/images/06_021_002.jpg' },
        // { id: '06_07_03', src: 'assets/slides/images/06_07_03.jpg' },
        // { id: '03_01_02', src: 'assets/slides/images/03_01_02.jpg' },
        // { id: '03_05_04', src: 'assets/slides/images/03_05_04.jpg' },
        // { id: '04_05_001', src: 'assets/slides/images/04_05_001.jpg' },
        // { id: '05_02_004.', src: 'assets/slides/images/05_02_004.jpg' },
        // { id: '05_09_0001', src: 'assets/slides/images/05_09_0001.jpg' },
        // { id: '06_013_02', src: 'assets/slides/images/06_013_02.jpg' },
        // { id: '06_021_003', src: 'assets/slides/images/06_021_003.jpg' },
        // { id: '06_08_003', src: 'assets/slides/images/06_08_003.jpg' },
        // { id: '03_01_03.g', src: 'assets/slides/images/03_01_03.jpg' },
        // { id: '03_05_05', src: 'assets/slides/images/03_05_05.jpg' },
        // { id: '04_05_0010A.', src: 'assets/slides/images/04_05_0010A.jpg' },
        // { id: '05_02_005', src: 'assets/slides/images/05_02_005.jpg' },
        // { id: '05_09_0002', src: 'assets/slides/images/05_09_0002.jpg' },
        // { id: '06_014_001', src: 'assets/slides/images/06_014_001.jpg' },
        // { id: '06_021_04', src: 'assets/slides/images/06_021_04.jpg' },
        // { id: '06_08_04', src: 'assets/slides/images/06_08_04.jpg' },
        // { id: '03_01_05A', src: 'assets/slides/images/03_01_05A.jpg' },
        // { id: '03_05_06', src: 'assets/slides/images/03_05_06.jpg' },
        // { id: '04_05_0010B.', src: 'assets/slides/images/04_05_0010B.jpg' },
        // { id: '05_02_006B', src: 'assets/slides/images/05_02_006B.jpg' },
        // { id: '05_09_0003', src: 'assets/slides/images/05_09_0003.jpg' },
        // { id: '06_014_002', src: 'assets/slides/images/06_014_002.jpg' },
        // { id: '06_021_05', src: 'assets/slides/images/06_021_05.jpg' },
        // { id: '06_08_05', src: 'assets/slides/images/06_08_05.jpg' },
        // { id: '03_01_05B', src: 'assets/slides/images/03_01_05B.jpg' },
        // { id: '04_01_0006', src: 'assets/slides/images/04_01_0006_a.jpg' },
        // { id: '04_05_002', src: 'assets/slides/images/04_05_002.jpg' },
        // { id: '05_03_02', src: 'assets/slides/images/05_03_02.jpg' },
        // { id: '05_09_0005', src: 'assets/slides/images/05_09_0005.jpg' },
        // { id: '06_014_003', src: 'assets/slides/images/06_014_003.jpg' },
        // { id: '06_022_001', src: 'assets/slides/images/06_022_001.jpg' },
        // { id: '06_09_003', src: 'assets/slides/images/06_09_003.jpg' },
        // { id: '03_01_05Cp', src: 'assets/slides/images/03_01_05C.jpg' },
        // { id: '04_01_01', src: 'assets/slides/images/04_01_01.jpg' },
        // { id: '04_05_007', src: 'assets/slides/images/04_05_007.jpg' },
        // { id: '05_03_03', src: 'assets/slides/images/05_03_03.jpg' },
        // { id: '05_10_0001', src: 'assets/slides/images/05_10_0001.jpg' },
        // { id: '06_015_001', src: 'assets/slides/images/06_015_001.jpg' },
        // { id: '06_022_002', src: 'assets/slides/images/06_022_002.jpg' },
        // { id: '06_09_04', src: 'assets/slides/images/06_09_04.jpg' },
        // { id: '03_02_01', src: 'assets/slides/images/03_02_01.jpg' },
        // { id: '04_01_02', src: 'assets/slides/images/04_01_02.jpg' },
        // { id: '04_05_008', src: 'assets/slides/images/04_05_008.jpg' },
        // { id: '05_03_05A.', src: 'assets/slides/images/05_03_05A.jpg' },
        // { id: '05_10_0002', src: 'assets/slides/images/05_10_0002.jpg' },
        // { id: '06_015_002', src: 'assets/slides/images/06_015_002.jpg' },
        // { id: '06_022_003', src: 'assets/slides/images/06_022_003.jpg' },
        // { id: '06_09_05', src: 'assets/slides/images/06_09_05.jpg' },
        // { id: '03_02_02', src: 'assets/slides/images/03_02_02.jpg' },
        // { id: '04_01_03', src: 'assets/slides/images/04_01_03.jpg' },
        // { id: '04_05_009', src: 'assets/slides/images/04_05_009.jpg' },
        // { id: '05_04_06', src: 'assets/slides/images/05_04_06.jpg' },
        // { id: '05_10_0003', src: 'assets/slides/images/05_10_0003.jpg' },
        // { id: '06_015_003', src: 'assets/slides/images/06_015_003.jpg' },
        // { id: '06_022_04', src: 'assets/slides/images/06_022_04.jpg' },
        // { id: '06_10_04', src: 'assets/slides/images/06_10_04.jpg' },
        // { id: '03_02_08', src: 'assets/slides/images/03_02_08.jpg' },
        // { id: '04_01_05', src: 'assets/slides/images/04_01_05.jpg' },
        // { id: '04_06_0001', src: 'assets/slides/images/04_06_0001.jpg' },
        // { id: '05_04_08_A', src: 'assets/slides/images/05_04_08_A.jpg' },
        // { id: '05_10_0004', src: 'assets/slides/images/05_10_0004.jpg' },
        // { id: '06_015_04', src: 'assets/slides/images/06_015_04.jpg' },
        // { id: '06_022_05.', src: 'assets/slides/images/06_022_05.jpg' },
        // { id: '06_10_05', src: 'assets/slides/images/06_10_05.jpg' },
        // { id: '03_02_09', src: 'assets/slides/images/03_02_09.jpg' },
        // { id: '04_02_01', src: 'assets/slides/images/04_02_01.jpg' },
        // { id: '04_06_0002', src: 'assets/slides/images/04_06_0002.jpg' },
        // { id: '05_04_08_B', src: 'assets/slides/images/05_04_08_B.jpg' },
        // { id: '05_10_0005', src: 'assets/slides/images/05_10_0005.jpg' },
        // { id: '06_015_05', src: 'assets/slides/images/06_015_05.jpg' },
        // { id: '06_02_001.', src: 'assets/slides/images/06_02_001.jpg' },
      ]);
      this.queue.on("progress", (evt) => {
        let p = this.queue.progress * 100;
        let strokeVal = 339.292 + (348.708 * this.queue.progress)
        // console.log(" "+Math.round(p)+"%", strokeVal)
        TweenMax.set('.loader__value', { strokeDasharray: strokeVal })
      })
    },
    handleComplete() {
      if (this.completeCallback) this.completeCallback()
    },
  }
};
</script>

<style lang="scss">
.loader {
  // background: url(../../public/assets/background-loading.jpg) #000;
  background: $darker;
  background-size: cover;
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  left: 0;
  opacity: 0;
  display: none;
}

.loader__title {
  @include font-scale(20, 40);
  text-transform: uppercase;
  margin: 0;
  font-family: $regular;
  font-weight: 100;
  color: rgba(250, 250, 250, 0.5);
  text-align: center;
  @include center(absolute);
  top: 60%;
}

.loader__content {
  background: url(../../public/assets/loader.gif) no-repeat center;
  background-size: 8vw;
  width: 40vw;
  border-radius: 50%;
  height: 40vw;
  display: flex;
  @include center;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  display: block;
}

.loader__circle {
  stroke-dasharray: 339.292;
  stroke-dashoffset: 0;
}

.loader__value {
  stroke-dasharray: 339.292;
  stroke-dashoffset: 339.292;
}

@keyframes progress {
  from {
    stroke-dasharray: 339.292;
  }
  to {
    stroke-dasharray: 688;
  }
}
</style>
