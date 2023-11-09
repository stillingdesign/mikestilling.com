import gsap from "gsap";

export const enterDefault = (container) => {
    return gsap.from(container, {autoAlpha: 0, duration: 2, clearProps: "all"})
}

export const leaveDefault = (container) => {
    return gsap.to(container, {autoAlpha: 0, duration: 0.5})
}