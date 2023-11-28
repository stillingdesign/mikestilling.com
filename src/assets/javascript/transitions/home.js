import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import {accordion} from '../interactions/accordion.js';
gsap.registerPlugin(ScrollTrigger, SplitText);

function homeScroll() {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
            defaults: { overwrite: true },
            scrollTrigger: {
                trigger: `[data-home-hero]`,
                start: `top top`,
                end: `bottom top`,
                scrub: 1
            },
        });
        tl
            .to("[data-home-hero-img]", {y: '-43.75%'})
    });
}


export const onceHome = (container) => {
    function enter() {
        const headline = new SplitText(document.querySelector("[data-headline]"), {type:"words"});
        const subhead = new SplitText(document.querySelector("[data-subhead]"), {type:"lines, words"});
        const tl = gsap.timeline({});
            tl
                .from(container, {autoAlpha: 0, duration:0.5, clearProps: "all"})
                .from("[data-header]", {y: -32, autoAlpha:0, duration:1, ease: "power4.out"}, 0.25)
                .to("[data-reveal]", {scaleY: 0, duration:1.5, ease: "power4.out"}, 0.25)
                .from(headline.words, {autoAlpha: 0, y: 36, duration:2, ease: "power4.out", stagger:0.05}, 0.25)
                .from(subhead.lines, {autoAlpha: 0, y: 24, duration:2, ease: "power4.out", stagger:0.1}, 0.5)
                .from("[data-dash]", {width: 0, duration:0.75, ease: "power4.out"}, 1)
                .from("[data-intro]", {y: 16, autoAlpha:0, duration:1, ease: "power4.out", stagger:0.1}, 0.75)
                .from("[data-caption]", {y: 8, autoAlpha:0, duration:1, ease: "power4.out", stagger:0.1}, 1)
                .call(() => { headline.revert(); subhead.revert(); });
        homeScroll();
        accordion();
    }
    return enter();
}

export const enterHome = (container) => {
    function enter() {
        const headline = new SplitText(document.querySelector("[data-headline]"), {type:"words"});
        const subhead = new SplitText(document.querySelector("[data-subhead]"), {type:"lines, words"});
        const tl = gsap.timeline({});
            tl
                .from(container, {autoAlpha: 0, duration:0.5, clearProps: "all"})
                .to("[data-reveal]", {scaleY: 0, duration:1.5, ease: "power4.out"}, 0.25)
                .from(headline.words, {autoAlpha: 0, y: 36, duration:2, ease: "power4.out", stagger:0.05}, 0.25)
                .from(subhead.lines, {autoAlpha: 0, y: 24, duration:2, ease: "power4.out", stagger:0.1}, 0.5)
                .from("[data-dash]", {width: 0, duration:0.75, ease: "power4.out"}, 1)
                .from("[data-intro]", {y: 16, autoAlpha:0, duration:1, ease: "power4.out", stagger:0.1}, 0.75)
                .from("[data-caption]", {y: 8, autoAlpha:0, duration:1, ease: "power4.out", stagger:0.1}, 1)
                .call(() => { headline.revert(); subhead.revert(); });
        homeScroll();
        accordion();
    }
    return enter();
}

export const leaveHome = (container) => {
    return gsap.to(container, {autoAlpha: 0, duration: 0.5})
}