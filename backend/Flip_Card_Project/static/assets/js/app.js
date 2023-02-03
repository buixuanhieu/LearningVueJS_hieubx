import {footer} from "./components/Footer.js";
import {mainScreen} from "./components/MainScreen.js";
import {interactScreen} from  "./components/InteractScreen.js";

const app = Vue.createApp({
    template:`
        <main-screen v-if="statusMatch === 'default'" @onStart="onHandelBeforeStart($event)"></main-screen>
        <interact-screen v-if="statusMatch === 'match'"></interact-screen>
        <footer-view></footer-view>
    `,
    components: {
        'footer-view': footer,
        'main-screen': mainScreen,
        'interact-screen': interactScreen,
    },
    data(){
        return {
            statusMatch: 'default',
        };
    },
    methods: {
        onHandelBeforeStart(config) {
            console.log('sdjsadhuidh', config);
            this.statusMatch = 'match';
        }
    },
})

app.mount('#app');