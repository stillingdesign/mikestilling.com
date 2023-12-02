import gsap from "gsap";
import {copyToClipboard} from '../interactions/copy-to-clipboard.js';

function anchorScroll() {
    console.log('Anchor Scroll Function initialized');
    const links = document.querySelectorAll("[data-anchor-scroll]");
    links.forEach(link => {
        const text = link.querySelector("[data-anchor-text]");
        const availableWidth = link.offsetWidth;
        const textWidth = text.offsetWidth;
        let timing = (textWidth - availableWidth) / 25;
        console.log(textWidth + " vs " + availableWidth);
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
        const tl = gsap.timeline({});
            tl
                .from(container, {autoAlpha: 0, duration:2, clearProps: "all"})
                .from("[data-header]", {y: -32, autoAlpha:0, duration:1, ease: "power4.out"}, 0.25)
        copyToClipboard();
        setTimeout(function(){ anchorScroll(); }, 50);
    }
    return enter();
}

export const enterBlogpost = (container) => {
    function enter() {
        const tl = gsap.timeline({});
            tl
                .from(container, {autoAlpha: 0, duration:2, clearProps: "all"})
        copyToClipboard();
        setTimeout(function(){ anchorScroll(); }, 50);
    }
    return enter();
}