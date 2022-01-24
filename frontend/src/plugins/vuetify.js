import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#607d8b',
                secondary: '#009688',
                accent: '#03a9f4',
                error: '#f44336',
                warning: '#ffc107',
                info: '#00bcd4',
                success: '#4caf50'
            },
        },
    },
});