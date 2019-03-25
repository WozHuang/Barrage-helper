const state = {
  readBarrage: true, // 是否自动
  readEmoji: true,
};

const mutations = {
  TOGGLE_READ_BARRAGE(state) {
    state.readBarrage = !state.readBarrage;
  },
  TOGGLE_READ_EMOJI(state) {
    state.readEmoji = !state.readEmoji;
  },
  // INCREMENT_MAIN_COUNTER(state) {
  //   state.main += 1;
  // },
};

const actions = {
  toggleReadBarrage({ commit }) {
    commit('TOGGLE_READ_BARRAGE');
  },
  toggleReadEmoji({ commit }) {
    commit('TOGGLE_READ_EMOJI');
  },
};

const getters = {
  readBarrage: state => state.readBarrage,
  readEmoji: state => state.readEmoji,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
