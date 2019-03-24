import { stickMainWindow } from '@/util/ipc';
import { TOGGLE_STICK } from '../mutations';
const state = {
  stick: false,
};

const mutations = {
  [TOGGLE_STICK](state, stick) {
    const result = stick === undefined ? !state.stick : stick;
    stickMainWindow(result);
    state.stick = result;
  },
};

const actions = {
  toggleStick({ commit }, { stick }) {
    commit(TOGGLE_STICK, stick);
  },
};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters,
};
