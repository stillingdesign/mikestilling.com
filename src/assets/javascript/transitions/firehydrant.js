import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {accordion} from '../interactions/accordion.js';
gsap.registerPlugin(ScrollTrigger, SplitText);

function firehydrantScroll() {

    const tl = gsap.timeline({
        defaults: { overwrite: true },
        scrollTrigger: {
            trigger: `[data-fh-hero]`,
            start: `top top`,
            end: `bottom center`,
            scrub: 1
        },
    });
    tl
        .to("[data-hero-text]", {y: 224, opacity: 0})
        .to("[data-fh-gradient]", {opacity: 0}, 0)
        .to("[data-fh-grids]", {y:224, opacity: 0, scale:0.5}, 0)
}

export const onceFirehydrant = (container) => {
    function enter() {
        const headline = new SplitText(document.querySelector("[data-fh-headline]"), {type:"words"});
        const subhead = new SplitText(document.querySelector("[data-fh-subhead]"), {type:"words"});
        const tl = gsap.timeline({});
            tl
                .from(container, {autoAlpha: 0, duration:2, clearProps: "all"})
                .from("[data-header]", {y: -32, autoAlpha:0, duration:1, ease: "power4.out"}, 0.25)
                .from("[data-fh-hero-img-outer]", {scale: 0.8, y:96, autoAlpha:0, duration:2, ease: "power4.out"}, 0.25)
                .from(headline.words, {autoAlpha: 0, y: 36, duration:2, ease: "power4.out", stagger:0.05}, 0.25)
                .from(subhead.words, {autoAlpha: 0, y: 24, duration:2, ease: "power4.out", stagger:0.02}, 0.5)
                .from("[data-fh-grid]", {scale: 0.5, y:48, autoAlpha:0, duration:1, ease: "power4.out"}, 0.75)
                .call(() => { headline.revert(); subhead.revert(); });
            firehydrantScroll()
    }
    return enter();
}

export const enterFirehydrant = (container) => {
    function enter() {
        const headline = new SplitText(document.querySelector("[data-fh-headline]"), {type:"words"});
        const subhead = new SplitText(document.querySelector("[data-fh-subhead]"), {type:"words"});
        const tl = gsap.timeline({});
            tl
                .from(container, {autoAlpha: 0, duration:2, clearProps: "all"})
                .from("[data-fh-hero-img-outer]", {scale: 0.8, y:96, autoAlpha:0, duration:2, ease: "power4.out"}, 0.25)
                .from(headline.words, {autoAlpha: 0, y: 36, duration:2, ease: "power4.out", stagger:0.05}, 0.25)
                .from(subhead.words, {autoAlpha: 0, y: 24, duration:2, ease: "power4.out", stagger:0.02}, 0.5)
                .from("[data-fh-grid]", {scale: 0.5, y:48, autoAlpha:0, duration:1, ease: "power3.out"}, 0.75)
                .call(() => { headline.revert(); subhead.revert(); });
            firehydrantScroll();
    }
    return enter();
}

export const leaveFirehydrant = (container) => {
    return gsap.to(container, {autoAlpha: 0, duration: 0.5})
}
