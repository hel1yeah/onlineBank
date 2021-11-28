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
    isAuthenticated(_, getters) {
      return !!getters.token;
    },
  },
};
