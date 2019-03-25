<template>
    <div class="container drag">
        <div class="title">
            弹幕助手（虎牙）
        </div>
        <el-input v-model.lazy="roomId" type="number" class="no-drag input-center" placeholder="输入房间号"></el-input>
        <el-button class="no-drag btn" @click="toRoom">进入</el-button>
        <router-link to="/Setting">
            <el-button class="no-drag btn">设置</el-button>
        </router-link>
        <!--<el-radio v-model="platform" label="huya">虎牙</el-radio>-->
    </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        platform: 'huya',
      };
    },
    computed: {
      roomId: {
        get() {
          return this.$store.getters.roomId;
        },
        set(val) {
          this.$store.dispatch('setRoomId', val);
        }
      }
    },
    methods: {
      toRoom() {
        // console.log(this.roomId);
        this.$router.push(`/BarrageList?roomId=${this.roomId}`);
      },
    },
  };
</script>

<style scoped lang="scss">
    @import "~@/main.scss";
    .container {
        height: 100%;
        text-align: center;
        padding: 0 20px;
        flex-direction: column;
    }

    .title {
        padding-top: 30vh;
        margin-bottom: 30px;
        font-size: 25px;
        user-select: none;
        cursor: default;
        color: $font-color;
    }

    .btn {
        width: 100px;
        margin-top: 30px;
    }

    /deep/.input-center input{
        text-align: center;
    }
</style>
