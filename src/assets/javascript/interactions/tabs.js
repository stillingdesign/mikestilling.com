import { gsap } from "gsap";

export const tabs = function (){
    const tabGroups = document.querySelectorAll('[data-tab-group]');
    tabGroups.forEach(tabGroup => {
        const identifier = tabGroup.querySelector('[data-tab-active]');
        const tabs = Array.from(tabGroup.querySelectorAll('[data-tab]'));
        const currentPage = window.location.href;
        const matchingLink = tabs.find((tab) => tab.href === currentPage);

        function tabsEvents(defaultOpacity) {
            tabs.forEach(tab => {
                function enterHandler() {
                    identifier.style.opacity = 1;
                    identifier.style.left = `${tab.offsetLeft + 4}px`;
                    identifier.style.width = `${tab.offsetWidth}px`;
                }
                function leaveHandler() {
                    identifier.style.opacity = defaultOpacity;
                }
                tab.addEventListener('mouseenter', enterHandler);
                tab.addEventListener('mouseleave', leaveHandler);
                tab.addEventListener('click', () => {
                    tab.removeEventListener('mouseleave', leaveHandler);
                    enterHandler(); // Trigger enterHandler to set styles immediately on click
                });
            })
        }

        function tabsEventsMatched(defaultOpacity, defaultLeft, defaultWidth) {
            tabs.forEach(tab => {
                function enterHandler() {
                    identifier.style.opacity = 1;
                    identifier.style.left = `${tab.offsetLeft + 4}px`;
                    identifier.style.width = `${tab.offsetWidth}px`;
                }
                function leaveHandler() {
                    identifier.style.opacity = defaultOpacity;
                    identifier.style.left = defaultLeft;
                    identifier.style.width = defaultWidth;
                }
                tab.addEventListener('mouseenter', enterHandler);
                tab.addEventListener('mouseleave', leaveHandler);
                tab.addEventListener('click', () => {
                    tab.removeEventListener('mouseleave', leaveHandler);
                    enterHandler(); // Trigger enterHandler to set styles immediately on click
                });
            })
        }

        if(matchingLink) {
            console.log(`link matched`)
            const defaultOpacity = 0.7;
            const defaultLeft = `${matchingLink.offsetLeft + 4}px`;
            const defaultWidth = `${matchingLink.offsetWidth}px`;
            identifier.style.opacity = defaultOpacity;
            identifier.style.left = defaultLeft;
            identifier.style.width = defaultWidth;
            tabsEventsMatched(defaultOpacity, defaultLeft, defaultWidth);
        } else {
            console.log(`no match`)
            const defaultOpacity = 0;
            identifier.style.opacity = defaultOpacity;
            tabsEvents(defaultOpacity);
        }
    })
}