<template>
    <div id="app">
        <div class="app-content">
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
    methods: {
      init() {
        this.$store.dispatch('toggleStick', { stick: false });
      }
    }
  };
</script>

<style rel="stylesheet">
    /* CSS */
    @import "~@/main.scss";

    #app {
        height: 100%;
        border-radius: 5px;
        /*padding: 2px;*/
        border: 2px solid rgba(127, 127, 127, 0.3);
        box-sizing: border-box;
        overflow: hidden;
    }

    .app-content {
        height: 100%;
        /*-webkit-app-region: drag;*/
    }
</style>
