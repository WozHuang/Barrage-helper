<template>
    <div class="warp">
        <div class="title">设置</div>
        <div class="setting-list">
            <div class="setting-item">
                <label class="left">读弹幕</label>
                <div class="right">
                    <el-checkbox v-model="readBarrage" class="no-drag"></el-checkbox>
                </div>
            </div>
            <div class="setting-item">
                <label class="left">读表情</label>
                <div class="right">
                    <el-checkbox v-model="readEmoji" class="no-drag"></el-checkbox>
                </div>
            </div>
            <div class="setting-item slider">
                <label class="left">背景色</label>
                <div class="right">
                    <el-color-picker :value="backgroundColor" show-alpha class="no-drag" @active-change="colorActiveChange"></el-color-picker>
                </div>
            </div>
        </div>
        <div class="bottom">
            <el-button @click="goback" class="no-drag">返回</el-button>
        </div>
    </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Setting',
    computed: {
      readBarrage: {
        get() {
          return this.$store.state.barrage.readBarrage;
        },
        set() {
          this.toggleReadBarrage();
        }
      },
      readEmoji: {
        get() {
          return this.$store.state.barrage.readEmoji;
        },
        set() {
          this.toggleReadEmoji();
        }
      },
      ...mapGetters(['backgroundColor']),
    },
    methods: {
      goback() {
        this.$router.back();
      },
      colorActiveChange(val) {
        this.setBackgroundColor(val);
      },
      ...mapActions(['toggleReadBarrage', 'toggleReadEmoji', 'setBackgroundColor'])
    }
  };
</script>

<style scoped lang="scss">
    @import "~@/main.scss";

    .warp {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: $font-color;

        .title {
            text-align: center;
            margin: 50px 0 40px;
        }

        .setting-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            /*justify-content: space-between;*/
            flex: 1;

            .setting-item {
                margin-bottom: 20px;
                display: flex;
                flex-direction: row;
                justify-content: center;

                .left{
                    width: 100px;
                    margin-right: 20px;
                    color: $font-color;
                }
                .right{
                    width: 50px;
                }
            }

            .slider {
                width: 100%;
            }
        }

        .bottom{
            height: 100px;
            text-align: center;
        }
    }

</style>
