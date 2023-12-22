import gsap from "gsap";

export const blogCards = function () {
    const thumbs = document.querySelectorAll("[data-blog-thumbnail]");
    thumbs.forEach(thumb => {
        const img = thumb.querySelector("[data-blog-thumbnail-img]");
        const button = thumb.querySelector("[data-blog-thumbnail-button]");
        const buttonWidth = (thumb.querySelector("[data-blog-thumbnail-button-inner]").offsetWidth + 28) + `px`;
        function enter() {
            const tl = gsap.timeline({});
            tl
                .to(img, { duration: 1, scale: 1.2, ease: "power4.out" })
                .to(button, { duration: 1, width: buttonWidth, ease: "power4.out" }, 0)
        }
        function leave() {
            const tl = gsap.timeline({});
            tl
                .to(img, { duration: 0.75, overwrite:true, scale: '1', ease: "power3.out" })
                .to(button, { duration: 0.75, width: 32, overwrite:true, ease: "power3.out" }, 0)
        }
        thumb.addEventListener("mouseenter", enter);
        thumb.addEventListener("mouseleave", leave);
        // on blur
        thumb.addEventListener("focus", enter);
        thumb.addEventListener("blur", leave);
    });
}