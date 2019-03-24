<template>
    <div class="container">
        <list-header :roomId="roomId"></list-header>
        <div class="barrage-list drag">
            <el-scrollbar ref="scroller" style="height: 100%;overflow-x: hidden;">
                <barrage-item v-for="barrage in barrageList" :content="barrage" :key="barrage.time"></barrage-item>
            </el-scrollbar>
        </div>
    </div>
</template>

<script>
  import HuyaSocket from '@/util/Huya/socket';
  import BarrageItem from '@/views/huya/BarrageList/BarrageItem';
  import ListHeader from '@/views/huya/BarrageList/ListHeader';

  export default {
    name: 'BarrageList',
    components: { ListHeader, BarrageItem },
    data() {
      return {
        barrageList: [],
        roomId: 11342412,
        socket: null,
      };
    },
    mounted() {
      this.roomId = this.$route.query.roomId;
      this.initSocket();
    },
    computed: {
      scrollerWrap() {
        return this.$refs.scroller.wrap;
      },
    },
    methods: {
      initSocket() {
        const api = ['getMessageNotice', 'getSendItemNotice', 'getVipEnterBannerNotice'][0];
        this.socket = new HuyaSocket(api, this.roomId);

        this.socket.on('message', (messageItem) => {
          this.addMessage(Object.assign(messageItem, { time: Date.now() }));
        });

        this.socket.on('error', (e) => {
          this.$message.error('发生错误', e);
        });
      },

      addMessage(msg) {
        this.barrageList.push(msg);
        if (this.barrageList.length > 30) {
          this.barrageList.shift();
        }
        this.$nextTick(this.scrollToEnd);
      },

      // 滚动到末尾
      scrollToEnd() {
        const wrap = this.scrollerWrap;
        wrap.scrollTop = wrap.scrollHeight;
      },
    },
    destroyed() {
      if (this.socket) {
        this.socket.close();
      }
    },
  };
</script>

<style scoped>
    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .barrage-list {
        width: 100%;
        height: calc(100% - 30px);
        box-sizing: border-box;
        padding: 10px;
        overflow: hidden;
        background: rgba(128, 128, 128, 0.36);
        position: absolute;
        left: 0;
        top: 30px;
    }

    /deep/ .el-scrollbar__wrap {
        overflow-x: hidden;
    }
</style>
