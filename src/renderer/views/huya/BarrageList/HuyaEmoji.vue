<template>
    <span>
        <template v-for="node in nodeList">
            <span v-if="node.type === 'text'">{{node.content}}</span>
            <img v-if="node.type === 'emoji'" :src="node.src" :alt="node.alt">
        </template>
    </span>
</template>

<script>
  import parseMessage from '@/util/Huya/emoji';
  import readText from '@/util/baiduTTS';

  export default {
    name: 'HuyaEmoji',
    props: {
      text: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        nodeList: [],
      };
    },
    mounted() {
      this.nodeList = parseMessage(this.text);
      this.readMessage();
    },
    methods: {
      // 读出弹幕
      readMessage() {
        const message = this.nodeList.map(item => (item.content || item.alt)).join('');
        readText(message);
      },
    },
  };
</script>

<style scoped>

</style>
