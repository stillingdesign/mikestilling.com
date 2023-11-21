import barba from "@barba/core";

// Page Transitions and Scripts
import {tabs} from './interactions/tabs.js';
import {enterDefault, leaveDefault} from './transitions/default.js';
import {onceHome, enterHome, leaveHome} from './transitions/home.js';
import {onceRewatch, enterRewatch, leaveRewatch} from './transitions/rewatch.js';

barba.hooks.once(() => {
    window.addEventListener('load', () => { tabs(); });
});

barba.hooks.enter(() => {
    window.scrollTo(0, 0);
    tabs();
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
                onceHome(next.container)
            },
            leave: ({current}) => leaveHome(current.container),
            enter({next}) {
                enterHome(next.container)
            }
        },
        {
            name: 'rewatch',
            to: { namespace: ['rewatch'] },
            once({next}) {
                onceRewatch(next.container)
            },
            leave: ({current}) => leaveRewatch(current.container),
            enter({next}) {
                enterRewatch(next.container)
            }
        }
    ]
})