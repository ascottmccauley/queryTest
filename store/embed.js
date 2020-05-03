import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
  embedded: false
})

const getters = {
  isEmbedded(state) {
    console.log('getting status of embed: ' + state.embedded)
    return state.embedded
  }
}

const mutations = {
  SET_EMBEDDED(state) {
    console.log('changing value of embedded')
    state.embedded = true
  }
}

const actions = {
  checkEmbed({ commit }, payload) {
    console.log('checking embed status: ' + payload)
    if (payload === 'true' || payload === true) {
      console.log('this page is embedded')
      commit('SET_EMBEDDED')
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
