import Vue from 'vue'
import Vuetify from 'vuetify/lib'

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#4D61FC',
        secondary: '#3663b0',
        accent: '#36b09a',
        error: '#b0364a',
      }
    }
  }
})

Vue.use(Vuetify)

export default vuetify