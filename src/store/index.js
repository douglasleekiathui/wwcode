import Vue from 'vue'
import Vuex from 'vuex'
import seekers from './modules/seekers'
import applicants from './modules/applicants'
import company from './modules/company'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    seekers,
    applicants,
    company
  },
  strict: debug,
  plugins: []
})