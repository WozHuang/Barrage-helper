import getRoomInfo from '@/util/Huya/roomInfo';
const state = {
  roomInfo: {}, // 是否自动
  roomId: 11342412,
};

const mutations = {
  SET_ROOM_INFO(state, roomInfo) {
    state.roomInfo = roomInfo;
  },
  SET_ROOMID(state, roomId) {
    state.roomId = roomId;
  },
};

const actions = {
  async getRoomInfo({ commit }, { roomId }) {
    const roomInfo = await getRoomInfo(roomId);
    commit('SET_ROOM_INFO', roomInfo);
  },
  setRoomId({ commit }, roomId) {
    commit('SET_ROOMID', roomId);
  }
};

const getters = {
  roomInfo: state => state.roomInfo,
  roomId: state => state.roomId,
  statInfo: state => (state.roomInfo && state.roomInfo.STATINFO) || {},
};

export default {
  state,
  mutations,
  actions,
  getters,
};
