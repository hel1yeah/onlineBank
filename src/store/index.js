import { createStore, createLogger } from 'vuex';
import auth from './modules/auth';
import request from './modules/request';

const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger());
}

export default createStore({
  plugins,
  state() {
    return {
      message: null,
    };
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload;
    },
    clearMessage(state) {
      state.message = null;
    },
  },
  actions: {
    setMessage({ commit }, payload) {
      commit('setMessage', payload);
      setTimeout(() => {
        commit('clearMessage');
      }, 10000);
    },
    clearMessage({ commit }) {
      commit('clearMessage');
    },
  },
  getters: {
    getMessage(state) {
      return state.message;
    },
  },
  modules: { auth, request },
});
