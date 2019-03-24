import { TOGGLE_READ_BARRAGE } from '../mutations';
const state = {
  readBarrage: true, // 是否自动
};

const mutations = {
  [TOGGLE_READ_BARRAGE](state) {
    state.readBarrage = !state.readBarrage;
  },
  // INCREMENT_MAIN_COUNTER(state) {
  //   state.main += 1;
  // },
};

const actions = {
  toggleReadBarrage({ commit }) {
    commit(TOGGLE_READ_BARRAGE);
  },
};

export default {
  state,
  mutations,
  actions,
};
