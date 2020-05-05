import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    event: {},
    events: [],
    isDeletable: false
  },

  mutations: {
    setEvent(state, payload) {
      state.event = payload;
    },
    setEvents(state, payload) {
      state.events = payload;
    },
    setIsDeletable(state, payload) {
      state.isDeletable = payload;
    }
  },

  actions: {
    updateDeletable({ commit }, payload) {
      commit('setIsDeletable', payload);
    },
    getAllEvents({ commit }) {
      axios
        .get('http://localhost:3010/event')
        .then(res => {
          if (res.status === 200) {
            let events = res.data.map(item =>
              Object.assign({}, item,
                { id: item._id }
              )
            );
            commit('setEvents', events);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    createEvent({ commit, dispatch }, payload) {
      axios
        .post('http://localhost:3010/event/new', payload)
        .then(res => {
          if (res.status === 201) {
            commit('setEvent', payload);
            dispatch('getAllEvents');
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateEvent({ commit, dispatch }, payload) {
      axios
        .put('http://localhost:3010/event/edit', payload)
        .then(res => {
          if (res.status === 200) {
            commit('setEvent', payload);
            dispatch('getAllEvents');
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteEvent({ dispatch }, payload) {
      axios
        .delete('http://localhost:3010/event/delete', { data: payload })
        .then(res => {
          if (res.status === 200) {
            dispatch('getAllEvents');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  getters: {
    getEvent: state => {
      return state.event;
    },
    getEvents: state => {
      return state.events;
    },
    getIsDeletable: state => {
      return state.isDeletable;
    }
  },

  modules: {
  }
})
