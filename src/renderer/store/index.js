import Vue from 'vue';
import Vuex from 'vuex';

// import { createPersistedState, createSharedMutations } from 'vuex-electron';
import { createPersistedState } from 'vuex-electron';

import modules from './modules';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  getters,
  plugins: [
    createPersistedState(),
    //  这个破插件不能用，用了就不能dispatch，不知道为什么
    //   createSharedMutations(),
  ],
  strict: process.env.NODE_ENV !== 'production',
});
