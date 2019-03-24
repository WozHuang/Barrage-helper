<template>
    <div class="header-wrapper drag">
        <div class="header-title">
            <div class="roomName">{{ roomInfo.liveRoomName}}</div>
            <div class="btn back_btn no-drag" @click="goBack"></div>
            <div class="btn no-drag"  :class="classObj" @click="toggleStick"></div>
            <div class="btn close_btn no-drag" @click="close"></div>
        </div>
        <div class="header-body">main</div>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import { closeMainWindow } from '@/util/ipc';
  export default {
    name: 'ListHeader',
    props: ['roomId'],
    data() {
      return {
        // roomInfo: {},
      };
    },
    mounted() {
      this.getRoomInfo({ roomId: this.roomId })
        .catch(this.$message.error);
    },
    computed: {
      stick() { return this.$store.state.global.stick; },
      classObj() {
        return {
          stick_actived_btn: this.stick,
          stick_inactived_btn: !this.stick,
        };
      },
      ...mapGetters(['roomInfo'])
    },
    methods: {
      ...mapActions(['toggleStick', 'getRoomInfo']),
      goBack() {
        this.$router.back();
      },
      close() {
        closeMainWindow();
      }
    },
  };
</script>

<style scoped lang="scss">
    .header-wrapper{
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        /*user-select: none;*/
        .header-title{
            width: 100%;
            height: 30px;
            /*background: red;*/
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            background: rgba(128, 128, 128, 0.8);
            .roomName{
                text-align: left;
                flex-grow: 1;
                padding-left: 10px;
            }
        }
        .header-body{
            height: calc(100% - 30px);
            flex: 1;
            background: blue;
            display: none;
        }
    }

    .btn{
        display: inline-block;
        /*display: none;*/
        width: 30px;
        height: 30px;
        background-size: 100% 100%;
    }
    .stick_inactived_btn{
        background-image: url("~@/assets/button/stick_inactived.png");
    }
    .stick_actived_btn{
        background-image: url("~@/assets/button/stick_actived.png");
    }
    .close_btn{
        background-image: url("~@/assets/button/close.png");
    }
    .back_btn{
        background-image: url("~@/assets/button/back.png");
    }

</style>
