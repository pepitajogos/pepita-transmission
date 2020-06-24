import { TweenMax } from "gsap";

export function enterTransition(el, done) {
    TweenMax.fromTo(
        el,
        .5, {
            autoAlpha: 0,
        }, {
            autoAlpha: 1,
            x: 0,
            ease: "back.out(1.2)",
            onComplete: done
        }
    );
}
export function exitTransition(el, done) {
    TweenMax.fromTo(
        el,
        .5, {
            autoAlpha: 1,
        }, {
            autoAlpha: 0,
            ease: "power4.out",
            onComplete: done
        }
    );
}
export function enter(el, done) {
    TweenMax.fromTo(
        el,
        1, {
            autoAlpha: 0,
            scale: 1.5,
            transformOrigin: "50% 50%"
        }, {

            autoAlpha: 1,
            scale: 1,
            ease: Power4.easeOut,
            onComplete: done
        }
    );
}