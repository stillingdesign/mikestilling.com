import barba from "@barba/core";

// Page Transitions and Scripts
import {enterDefault, leaveDefault} from './transitions/default.js';
import {enterHome, leaveHome} from './transitions/home.js';

barba.hooks.enter(() => {
    window.scrollTo(0, 0);
});

barba.init({
    transitions: [
        {
            name: 'default',
            once({next}) {
                enterDefault(next.container)
            },
            leave: ({current}) => leaveDefault(current.container),
            enter({next}) {
                enterDefault(next.container)
            }
        },
        {
            name: 'home',
            to: { namespace: ['home'] },
            once({next}) {
                enterHome(next.container)
            },
            leave: ({current}) => leaveHome(current.container),
            enter({next}) {
                enterHome(next.container)
            }
        }
    ]
})