<template>
    <article class="slide">
        <div class="slide__content" :style="backgroundStyle">
            <div id="slide__linkbox" :class="linkBoxClass">
                <a href="" v-for="stepLink in steps"
                    :key="stepLink.id"
                    :class="stepLink.class"
                    @click.prevent="changeSlide(stepLink.step)"
                >
                    <p v-if="slide.state === 'world-stats'" class="world-stats__text">
                        <span class="bigger"><RatioByEnding :ending="finalGame" />%</span> {{ $t(stepLink.step.content) }}
                    </p>

                    <span v-if="slide.state !== 'world-stats'">{{ $t(stepLink.step.content) }}</span>
                </a>
            </div>
        </div>
    </article>
</template>

<script>
import axios from "axios";
import { Howl, Howler } from 'howler';
import { TweenMax } from "gsap";
import * as data from "@/data";
import RatioByEnding from "./RatioByEnding";

export default {
    name: 'Slide',
    props: ['slide'],
    components: {
        RatioByEnding,
    },
    data: () => ({
        errored: false,
        entry: null,
        lang: null,
        result: null,
    }),
    computed: {
        finalGame: function () {
            this.result = this.slide.ending
            localStorage.result=this.result
            this.addResultToBase(this.result)
            return this.result
        },
        backgroundStyle: function () {
            if (this.slide) {
                return (this.slide.language_image)
                    ? `background-image: url('assets/slides/images/${this.language()}/${this.slide.image}')`
                    : `background-image: url('assets/slides/images/${this.slide.image}')`
            }
        },
        linkBoxClass: function () {
            return {
                smartphone: "smartphone",
                smartphone2: "smartphone2",
                "world-stats": "world-stats",
                laptop: "laptop",
            }[this.slide.state];
        },
        steps: function () {
            const stepLinks = [];
            let count = 0;

            if(this.slide.sound_effect != undefined){
                this.newsPlay(this.slide.sound_effect)
            }

            for(const step of this.slide.steps) {
                const link = {
                    id: count++,
                    class: "",
                    step,
                    percents: 0.8
                    // await data.getRatioByEnding(final)
                    //     .then(results => Math.round(parseFloat(results[final]) * 100) || 0)
                    //     .catch(err => 0),
                }

                link.class = {
                    smartphone: "smartphone__link",
                    smartphone2: "smartphone2__link",
                    "world-stats": "slide__default " + step.style,
                    laptop: "laptop__link",
                }[this.slide.state] || ('slide__default ' + step.style);

                stepLinks.push(link);
            }

            return stepLinks;
        },
    },
    methods: {
        /**
         * @param {string} slideId
         */
        changeSlide(step) {
            this.playMouseClickSoundEffect();
            if (step.link_to) {
                this.$emit('goToSlide', step.link_to);
            } else if (step.finish) {
                this.$emit('finish');
            }
        },

        playMouseClickSoundEffect() {
            const mouse = new Howl({
                src: 'assets/slides/audios/Transmission_Click1.mp3'
            });
            mouse.play();
        },
        async linkToContent(content) {
            const slotClear = document.querySelector('.slide');
            const slotContent = document.querySelector('.slide__content');
 
            const tl = new TimelineMax({
                delay: 0.5
            });
            console.log({result});
 
            //animation
            tl.fromTo(slotContent, 0.5, {opacity: 1}, {delay: 1, opacity: 0, onComplete: slotClear.innerHTML = ''});
            
            if (this.slides[content] == undefined){
                alert(content);
            }

            await data.addResult(result);
         },
        show() {
            this.lang = document.querySelector('body').getAttribute('data-lang');

            this.musicPlay();
        },
        async addResultToBase(final) {
            const result = {
                ending: final,
                country: await data.getCountry(),
            };

            await data.addResult(result);
        },
        newsPlay(fileName) {
             const news = new Howl({
                 src: `assets/slides/audios/${fileName}`,
               autoplay: true, 
           });

           news.play();
        },
   },
}
</script>

<style lang="scss">
.slide {
    background: $darker;
    color: $white;
    width: 100vw;
    height: 100vh;
}

.slide__default {
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
     white-space: pre-wrap;
}

.slide__content {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    @include center(relative);
}

.slide .center {
    @include center(absolute);
}

.slide .top {
    top: 5%;
    &.center{
        transform: translateX(-50%) translateY(0);
    }
}

.slide .bottom {
    bottom: 20%;
    top: inherit;
    &.center{
        transform: translateX(-50%) translateY(0);
    }
}

.slide .left {
    left: 5%;
    &.center{
        transform: translateX(0) translateY(-50%);
    }
}

.slide .right {
    right: 5%;
    left: inherit;
    &.center{
        transform: translateX(0) translateY(-50%);
    }
}

.slide .full-left {
    width: 50%;
    height: 100%;
    left: 0;
    border: 0;
    background-color: rgba(0,0,0,0);
    max-width: inherit;
    @include font-scale(22, 52);
}

.slide .full-right {
    width: 50%;
    height: 100%;
    right: 0;
    border: 0;
    background-color: rgba(0,0,0,0);
    max-width: inherit;
    @include font-scale(22, 52);
}

.slide .full-screen {
    width: 100%;
    height: 100%;
    max-width: 90vw;
    text-align: center;
    border: 0;
    background-color: rgba(0,0,0,0);
    @include center(absolute);
    @include font-scale(14, 45);
}

.slide .smartphone {
    display: flex;
    flex-flow: column;
    color: #000;
    @include font-scale(10, 39);
    position: relative;
    left: 40%;
    padding-top: 22%;
    width: 28vw;

    @media (orientation: landscape) and (max-width: 1202px) {
        @include font-scale(10, 23);
    }

  a:link, 
  a:visited,
  a:hover,
  a:active {
    font-family: $regular;
    font-weight: 400;
    color: $black;
  }
}

.slide .smartphone2 {
    display: flex;
    flex-flow: column;
    color: #000;
    @include font-scale(10, 35);
    position: relative;
    left: 35%;
    padding-top: 23%;
    width: 28vw;

    @media (max-width: 1202px) {
        @include font-scale(10, 20);
    }
    @media (orientation: landscape) and (max-width: 1202px) {
        @include font-scale(10, 20);
    }

  a:link, 
  a:visited,
  a:hover,
  a:active {
    font-family: $regular;
    font-weight: 400;
    color: $black;
  }
}

.slide .smartphone2__link {
    padding: 1% 0;
    cursor: pointer;
    font-weight: 300;
}

.slide .smartphone__link {
    padding: 1% 0;
    cursor: pointer;
    font-weight: 300;
}

.slide .laptop {
    display: flex;
    flex-flow: column;
    color: #000;
    @include font-scale(10, 35);
    position: relative;
    left: 16%;
    padding-top: 20%;

    @media (max-width: 1202px) {
        @include font-scale(10, 20);
    }

    @media (orientation: landscape) and (max-width: 1202px) {
        @include font-scale(10, 20);
    }

  a:link, 
  a:visited,
  a:hover,
  a:active {
    font-family: $regular;
    font-weight: 400;
    color: $black;
  }
}

.slide .laptop__link {
    padding: 1% 0;
    cursor: pointer;
}

.slide .world-stats__text {
    width: 35%;
    max-width: 360px;
    color: $black;
    position: relative;
    left: 7%;
    top: -7%;
    @include font-scale(10, 20);

    @media (min-width: 1202px) {
        @include font-scale(8, 25);
    }

    @media (max-width: 450px) {
        @include font-scale(8, 10);
    }

    .bigger {
        @include font-scale(20, 40);
    }
}

.world-stats {
    .slide__default.bottom {
        max-width: 49vw;
    }
}

.world-stats {
    .bottom {
        .bigger{
            display: none;
        }
        .world-stats__text {
            width: inherit;
            color: white;
            font-size: inherit;
            left: inherit;
            top: inherit;
            margin: 0;
        }
    }
}
</style>