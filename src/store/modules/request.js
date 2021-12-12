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
    async onLoad({ commit, dispatch }) {
      try {
        const token = store.getters['auth/token'];
        const { data } = await axios.get(`/requests.json?auth=${token}`);
        const requests = Object.keys(data).map((id) => ({ ...data[id], id }));

        commit('setRequest', requests);
      } catch (err) {
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
    requests(state) {
      return state.requests;
    },
  },
};
