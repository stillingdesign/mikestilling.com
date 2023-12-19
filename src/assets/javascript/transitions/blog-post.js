import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import {copyToClipboard} from '../interactions/copy-to-clipboard.js';
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin,SplitText);

function blogScrolls() {

    if(document.querySelectorAll(`[data-anchor-scroll]`)) {
        const anchors = document.querySelectorAll(`[data-anchor-scroll]`);
        anchors.forEach(anchor => {
            const link = anchor.href;
            const sectionId = link.split("/").pop();
            const scrollToSection = (event) => {
                event.preventDefault();
                gsap.to(window, {duration: 1, scrollTo: { y: sectionId, offsetY: 88 }, ease: "power3.inOut"});
            }
            anchor.addEventListener(`click`, scrollToSection, false);
        })
    }  

    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {

        const tocEnd = (document.querySelector("[data-blog-toc]").offsetHeight + 144) + "px";
        // Pin Toc
        let pinToc = ScrollTrigger.create({
            trigger: "[data-blog-content]",
            pin: "[data-blog-toc]",
            start: "top 72px",
            end: `bottom ${tocEnd}`,
        });
    });

    // Animate Hero Text
    const blogHeroText = gsap.timeline({
       scrollTrigger: {
           trigger: `[data-blog-hero]`,
           start: `top top`,
           end: `bottom top`,
           scrub: 2,
       },
   });
   blogHeroText
       .to("[data-blog-hero-text]", {y:96, opacity: 0, duration: 1}, 0)

     // Animate Blog CTA
     const ctaHeadline = new SplitText(document.querySelector("[data-blog-cta-head]"), {type:"words, chars"});
     const blogCta = gsap.timeline({
        scrollTrigger: {
            trigger: `[data-blog-cta]`,
            start: `top bottom`,
            end: `center center`,
            scrub: 2,
        },
    });
    blogCta
        .from("[data-blog-cta-sub]", {y:24, opacity: 0, duration: 0.5}, 0)
        .from(ctaHeadline.chars, {opacity: 0, y: 36, stagger:0.05, duration: 1}, 0)
        .from("[data-blog-cta-btn]", {y:24, opacity: 0, duration: 0.5}, 0.5)

    mm.add("(min-width: 768px)", () => {
        // Pin subhead
        let pinSubhead = ScrollTrigger.create({
            trigger: "[data-pin-blog-subheader]",
            pin: "[data-blog-subheader]",
            start: "top -1px",
            end: "bottom 56px",
        });
        // Change subhead color
        const changeColor = gsap.timeline({
            scrollTrigger: {
                trigger: `[data-blog-hero-img]`,
                start: `top -56px`,
                end: `center center`,
                duration: 0,
                toggleActions: "play none reverse none"
            },
        });
        changeColor
            .set("[data-blog-subheader-bg]", {backgroundColor: 'rgba(var(--sheet-6-i),1)'}, 0)
            .set("[data-blog-subhead-toggle]", {y: -30}, 0)
        // Swap link for headline
        const indicateScroll = gsap.timeline({
            scrollTrigger: {
                trigger: `[data-blog-content]`,
                start: `top top`,
                end: `bottom bottom`,
                scrub: 2,
            },
        });
        indicateScroll
            .to("[data-scroll-indicator]", {width: '100%', ease: "none"})
    });
}

function anchorScroll() {
    const links = document.querySelectorAll("[data-anchor-scroll]");
    links.forEach(link => {
        const text = link.querySelector("[data-anchor-text]");
        const availableWidth = link.offsetWidth;
        const textWidth = text.offsetWidth;
        let timing = (textWidth - availableWidth) / 25;
        if (textWidth > availableWidth + 32) {
            const enterHandler = function() { gsap.to(text, {x: (textWidth - availableWidth + 44) * -1, overwrite: true, duration: timing}); };
            const leaveHandler = function() { gsap.to(text, {x: "", overwrite: true, duration: 1, ease: "power4.out"}); };
            link.addEventListener("mouseenter", enterHandler);
            link.addEventListener("mouseleave", leaveHandler);
        } else if(textWidth >= (availableWidth - 32)) {
            let timing = 1;
            const enterHandler = function() { gsap.to(text, {x: (textWidth - availableWidth + 44) * -1, overwrite: true, duration: timing}); };
            const leaveHandler = function() { gsap.to(text, {x: "", overwrite: true, duration: 1, ease: "power4.out"}); };
            link.addEventListener("mouseenter", enterHandler);
            link.addEventListener("mouseleave", leaveHandler);
        }
    });
}

export const onceBlogpost = (container) => {
    function enter() {
        const headline = new SplitText(document.querySelector("[data-blog-headline]"), {type:"words"});
        const subhead = new SplitText(document.querySelector("[data-blog-subhead]"), {type:"words"});
        const tl = gsap.timeline({});
            tl
                .from(container, {autoAlpha: 0, duration:2, clearProps: "all"})
                .from("[data-header]", {y: -32, autoAlpha:0, duration:1, ease: "power4.out"}, 0.25)
                .from("[data-blog-type-line]", {scaleX: 0, duration:1, ease: "power4.out"}, 0.25)
                .from(headline.words, {autoAlpha: 0, y: 36, duration:2, ease: "power4.out", stagger:0.05}, 0.25)
                .from(subhead.words, {autoAlpha: 0, y: 24, duration:2, ease: "power4.out", stagger:0.02}, 0.5)
                .from("[data-blog-watermark]", {x: 96, opacity:0, duration:2, ease: "power4.out"}, 0.5)
                .from("[data-blog-type]", {y: 32, opacity:0, duration:1, ease: "power4.out"}, 0.5)
                .from("[data-blog-subheader-bg]", {y: 55, opacity:0, duration:1, ease: "power4.out"}, 0.5)
                .call(() => { headline.revert(); subhead.revert(); })
        copyToClipboard();
        blogScrolls();
        setTimeout(function(){ anchorScroll(); }, 50);
    }
    return enter();
}

export const enterBlogpost = (container) => {
    function enter() {
        const headline = new SplitText(document.querySelector("[data-blog-headline]"), {type:"words"});
        const subhead = new SplitText(document.querySelector("[data-blog-subhead]"), {type:"words"});
        const tl = gsap.timeline({});
            tl
                .from(container, {autoAlpha: 0, duration:2, clearProps: "all"})
                .from("[data-blog-type-line]", {scaleX: 0, duration:1, ease: "power4.out"}, 0.25)
                .from(headline.words, {autoAlpha: 0, y: 36, duration:2, ease: "power4.out", stagger:0.05}, 0.25)
                .from(subhead.words, {autoAlpha: 0, y: 24, duration:2, ease: "power4.out", stagger:0.02}, 0.5)
                .from("[data-blog-watermark]", {x: 96, opacity:0, duration:2, ease: "power4.out"}, 0.5)
                .from("[data-blog-type]", {y: 32, opacity:0, duration:1, ease: "power4.out"}, 0.5)
                .from("[data-blog-subheader-bg]", {y: 55, opacity:0, duration:1, ease: "power4.out"}, 0.5)
                .call(() => { headline.revert(); subhead.revert(); })
        copyToClipboard();
        blogScrolls();
        setTimeout(function(){ anchorScroll(); }, 50);
    }
    return enter();
}