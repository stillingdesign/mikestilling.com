import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

export const accordion = function (){
    const accordions = document.querySelectorAll('[data-accordion]');
    // Function
    function toggleAccordion(el, event) {
        const button = el.querySelector('[data-accordion-button]');
        const carat = el.querySelector('[data-accordion-carat]');
        const content = el.querySelector("[data-accordion-content]");
        const height = el.querySelector("[data-accordion-content] > p").offsetHeight;
        if(button.getAttribute("aria-expanded") === "true" && event.type === "click") {
            // Close accordion
            const tmln = gsap.timeline({});
            tmln.set(button, {attr: {"aria-expanded":false}})
                .to(content, { overwrite:true, autoAlpha: 0, y:0, height: 0, duration: 1, ease: "power4.out" })
                .to(carat, { overwrite:true, rotate: 0, duration: 1, ease: "power4.out" }, 0)
        } else if(button.getAttribute("aria-expanded") === "false" && event.type === "click") {
            // Open Accordion
            const tmln = gsap.timeline({});
            tmln.set(button, {attr: {"aria-expanded":true}})
                .to(content, { overwrite:true, autoAlpha: 1, y:-8, height: height, duration: 1, ease: "power4.out" })
                .to(carat,   { overwrite:true, rotate: 180, duration: 1, ease: "power4.out" }, 0)
                .set(content, {clearProps: 'height'})
            // Close other accordions
            accordions.forEach(accordion => {
                if(accordion !== el && accordion.querySelector("[data-accordion-button]").getAttribute("aria-expanded") === "true") { 
                    toggleAccordion(accordion, event, false) 
                }
            });
        }
    }
    // Add click event listener
    accordions.forEach(accordion => {
        accordion.addEventListener("click", function(event) { toggleAccordion(this, event) });
    });
}