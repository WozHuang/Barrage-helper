import { stickMainWindow } from '@/util/ipc';
const state = {
  stick: false,
  backgroundColor: 'rgba(0,0,0,0.5)',
};

const mutations = {
  TOGGLE_STICK(state, stick) {
    const result = stick === undefined ? !state.stick : stick;
    stickMainWindow(result);
    state.stick = result;
  },
  SET_BACKGROUND_COLOR(state, value) {
    state.backgroundColor = value;
  },
};

const actions = {
  toggleStick({ commit }, { stick }) {
    commit('TOGGLE_STICK', stick);
  },
  setBackgroundColor({ commit }, color) {
    commit('SET_BACKGROUND_COLOR', color);
  }
};

const getters = {
  backgroundColor: state => state.backgroundColor,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
