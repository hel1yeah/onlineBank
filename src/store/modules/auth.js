export default {
  namespaced: true,

  state() {
    return {
      token: null,
    };
  },
  mutations: {
    setTokin(state, payload) {
      state.token = payload;
      localStorage.setItem('jwt-token', payload);
    },
    removeTokin(state) {
      state.token = null;
      localStorage.removeItem('jwt-token');
    },
  },
  actions: {
    async onLogin({ commit }, payload) {
      commit('setTokin', 'testTokin');
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
    isAutheticated(_, getters) {
      return !!getters.token;
    },
  },
};
