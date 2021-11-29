import axios from 'axios';
import { error } from './../../untils/error';

const TOKEN_KEY = 'jwt-token';
export default {
  namespaced: true,

  state() {
    return {
      token: localStorage.getItem(TOKEN_KEY),
    };
  },
  mutations: {
    setTokin(state, payload) {
      state.token = payload;
      localStorage.setItem(TOKEN_KEY, payload);
    },
    removeTokin(state) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
  },
  actions: {
    async onLogin({ commit, dispatch }, payload) {
      try {
        const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`;
        const { data } = await axios.post(URL, {
          ...payload,
          returnSecureToken: true,
        });
        commit('setTokin', data.idToken);
        dispatch('clearMessage', null, { root: true });
      } catch (e) {
        dispatch(
          'setMessage',
          {
            value: error(e.response.data.error.message),
            type: 'danger',
          },
          { root: true }
        );
        console.log(error(e.response.data.error.message));
        throw new Error(e);
      }
    },
    onLogout(store) {
      console.log('onLogout');
      store.commit('removeTokin');
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuthenticated(_, getters) {
      return !!getters.token;
    },
  },
};
