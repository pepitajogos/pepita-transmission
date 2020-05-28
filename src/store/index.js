import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    experience_start: false,
  },
  mutations: {
    experience_start: (state, bool) => { state.experience_start =  bool },
  },
  actions: {
    experience_start: ({ commit }, bool) => { commit('experience_start', bool) },
  },
  modules: {
  }
})