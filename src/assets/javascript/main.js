import barba from "@barba/core";

// Behaviors
import './interactions/accordion.js';

// Transitions
import {enterDefault, leaveDefault} from './transitions/default.js';

barba.init({
    transitions: [
        {
            once({next}) {
                enterDefault(next.container)
            },
            leave: ({current}) => leaveDefault(current.container),
            enter({next}) {
                enterDefault(next.container)
            }
        }
    ]
})