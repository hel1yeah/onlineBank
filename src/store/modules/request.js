import axios from './../../axios/request';
import store from './../index';
export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  mutations: {
    setRequest(state, payload) {
      state.requests = payload;
    },
    addRequest(state, request) {
      state.requests.push(request);
    },
  },
  actions: {
    async createRequest({ commit, dispatch }, payload) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.post(
          `/requests.json?auth=${token}`,
          payload
        );

        console.log(data);
        commit('addRequest', { ...payload, id: data.name });
        dispatch(
          'setMessage',
          {
            value: 'Application successful created',
            type: 'primary',
          },
          { root: true }
        );
      } catch (err) {
        console.log(err);
        dispatch(
          'setMessage',
          {
            value: err.message,
            type: 'warning',
          },
          { root: true }
        );
      }
    },
  },
  getters: {
    setRequest(state) {
      return state.requests;
    },
  },
};
