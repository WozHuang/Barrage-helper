<template>
    <div class="barrage-item">
        <span class="">
            <span class="nickName">{{content.sendNick}}：</span>
            <span class="content"><huya-emoji :text="content.content" :key="content.content"></huya-emoji></span>
        </span>
    </div>
</template>

<script>
  import HuyaEmoji from '@/views/huya/BarrageList/HuyaEmoji';
  export default {
    name: 'BarrageItem',
    components: { HuyaEmoji },
    props: {
      content: {
        type: Object,
        default: {},
      },
    },
  };
</script>

<style scoped lang="scss">
    @import "~@/main.scss";
    .barrage-item {
        padding: 5px;
        word-break: break-all;
        user-select: none;
        font-size: 15px;
    }
    .nickName{
        color: $main-blue;
    }
    .content{
        color: $font-color;
    }
</style>
