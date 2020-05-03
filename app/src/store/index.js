import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: {},
    events: []
  },

  mutations: {
    setEvent(state, payload) {
      state.event = payload;
    },
    setEvents(state, payload) {
      state.events = payload;
    }
  },

  actions: {
    createEvent({commit}, payload) {
      axios
        .post('http://localhost:3010/event/new', payload)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
      commit('setEvent', payload);
    }
  },

  modules: {
  }
})
