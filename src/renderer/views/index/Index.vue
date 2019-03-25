<template>
    <div class="container drag">
        <div class="title">弹幕助手（虎牙）</div>
        <el-input v-model="roomId" type="number" class="no-drag" placeholder="输入房间号"></el-input>
        <el-button class="no-drag btn" @click="toRoom">进入</el-button>
        <!--<el-radio v-model="platform" label="huya">虎牙</el-radio>-->
    </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        roomId: 11342412,
        platform: 'huya',
      };
    },
    methods: {
      toRoom() {
        // console.log(this.roomId);
        this.$router.push(`/BarrageList?roomId=${this.roomId}`);
      },
    },
  };
</script>

<style scoped>
    .container {
        height: 100%;
        text-align: center;
        padding: 0 20px;
        flex-direction: column;
        background: rgba(74, 74, 74, 0.7);
    }

    .title {
        padding-top: 30vh;
        margin-bottom: 30px;
        font-size: 25px;
        user-select: none;
        cursor: default;
        color: white;
    }

    .btn {
        width: 100px;
        margin-top: 30px;
    }
</style>
