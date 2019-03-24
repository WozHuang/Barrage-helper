import getRoomInfo from '@/util/Huya/roomInfo';
const state = {
  roomInfo: {}, // 是否自动
};

const mutations = {
  SET_ROOM_INFO(state, roomInfo) {
    state.roomInfo = roomInfo;
  },
};

const actions = {
  async getRoomInfo({ commit }, { roomId }) {
    const roomInfo = await getRoomInfo(roomId);
    commit('SET_ROOM_INFO', roomInfo);
  },
};

const getters = {
  roomInfo: state => state.roomInfo,
  statInfo: state => (state.roomInfo && state.roomInfo.STATINFO) || {},
};

export default {
  state,
  mutations,
  actions,
  getters,
};
