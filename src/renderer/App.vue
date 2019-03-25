<template>
    <div id="app">
        <div class="app-content">
            <div class="background-mask" :style="backgroundClass"></div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'barrage-helper',
    mounted() {
      this.init();
    },
    computed: {
      backgroundClass() {
        return {
          background: this.$store.state.global.backgroundColor,
        };
      }
    },
    methods: {
      init() {
        this.$store.dispatch('toggleStick', { stick: false });
      }
    },
  };
</script>

<style lang="scss">
    /* CSS */
    @import "~@/main.scss";

    #app {
        height: 100%;
        border-radius: 5px;
        /*padding: 2px;*/
        /*border: 2px solid rgba(127, 127, 127, 0);*/
        padding: 2px;
        box-sizing: border-box;
        overflow: hidden;
        position: relative;
    }

    .app-content {
        height: 100%;
        box-shadow: 3px 3px 5px rgba(0,0,0,.2);
        .background-mask{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }
    }
</style>
