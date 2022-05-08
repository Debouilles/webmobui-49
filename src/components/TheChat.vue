<script setup>
  import { ref, computed, watchEffect, onUnmounted, nextTick } from 'vue';
  import BaseButton from './BaseButton.vue';
  import { useFetch } from '../composables/fetch.js';
  import { apiLogout, apiMsgAdd, apiMsgGet } from '../config/chat.js';

  const { fetchJson: doLogout } = useFetch(apiLogout, false);

  const message = ref('');
  const messageInput = ref(null);
  const urlMsgAdd = computed(() => apiMsgAdd + message.value);
  const { fetchJson: sendMsg } = useFetch(urlMsgAdd, false);

  const emit = defineEmits([
    'logout'
  ]);

  onUnmounted(() => {
    doLogout();
    clearInterval(getMsgInterval);
  });

  function addMsg() {
    sendMsg();
    message.value = '';
    messageInput.value.focus();
  }

  const {data: messages, fetchJson: getMsg } = useFetch(apiMsgGet, false);

  const getMsgInterval = setInterval(() => {
    getMsg();
  }, 1000);

  const allMsg = ref([]);
  const allMsgElement = ref(null);

  watchEffect(async () => {
    if (messages.value?.length > 0) {
      allMsg.value.push(...messages.value)
      await nextTick();
      allMsgElement.value.scrollTop = allMsgElement.value.scrollHeight;
    }
  });

</script>

<template>
  <div id="messages" ref="allMsgElement">
    <div v-for="msg of allMsg">
      <span class="username">{{ msg.user.username }}</span>
      <span class="message">{{ msg.message }}</span>
    </div>
  </div>
  <form @submit.prevent="addMsg()">
    <input
      v-model="message"
      ref="messageInput"
      type="text"
      required
      maxlength="200"
    >
    <base-button>Envoyer</base-button>
    <base-button class="cancel" @click.prevent="$emit('logout')">Logout</base-button>
  </form>
</template>

<style scoped>
  form > * {
    display: inline-block;
    margin-right: 1rem;
  }

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