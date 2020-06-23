import { TweenMax } from "gsap";

export function enterAnim(el, done) {
    TweenMax.fromTo(
        el,
        .5,
        {
            autoAlpha: 0,
        },
        {
            autoAlpha: 1,
            x: 0,
            ease: "back.out(1.2)",
            onComplete: done
        }
    );
}
export function exitAnim(el, done) {
    TweenMax.fromTo(
        el,
        .5,
        {
            autoAlpha: 1,
        },
        {
            autoAlpha: 0,
            ease: "power4.out",
            onComplete: done
        }
    );
}