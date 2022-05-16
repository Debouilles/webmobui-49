<script setup>
  import { ref, watchEffect, onUnmounted, nextTick } from 'vue';
  import { useFetch } from '../composables/fetch.js';
  import { apiMsgGet } from '../config/chat.js';

  onUnmounted(() => {
    clearInterval(getMsgInterval);
  });

  const {data: messages, fetchJson: getMsg } = useFetch(apiMsgGet);

  const getMsgInterval = setInterval(getMsg, 1000);

  const allMsg = ref([]);
  const allMsgDom = ref(null);

  watchEffect(async () => {
    if (messages.value?.length > 0) {
      allMsg.value.push(...messages.value)
      await nextTick();
      allMsgDom.value.scrollTop = allMsgDom.value.scrollHeight;
    }
  });

</script>

<template>
  <div id="messages" ref="allMsgDom">
    <div v-for="(msg, index) of allMsg" :key="index">
      <span class="username">{{ msg.user.username }}</span>
      <span class="message">{{ msg.message }}</span>
    </div>
  </div>
</template>

<style scoped>
  #messages {
    height: 60vh;
    border: solid black 1px;
    margin-bottom: 1rem;
    padding: 0.5rem;
    overflow: auto;
  }
  .username {
    display: inline-block;
    color: var(--color-deco);
    vertical-align: top;
    margin-right: 0.3rem;
  }
  .username:before {
      content: '[';
  }
  .username:after {
      content: ']';
  }
  .message {
    display: inline-block;
    word-wrap: break-word;
    max-width: 90%;
  }
</style>