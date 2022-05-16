<script setup>
  import { ref, computed } from 'vue';
  import { useFetch } from '../composables/fetch.js';
  import { apiMsgAdd } from '../config/chat.js';

  const message = ref('');
  const messageInput = ref(null);
  const urlMsgAdd = computed(() => apiMsgAdd + message.value);
  const { fetchJson: sendMsg } = useFetch(urlMsgAdd, false);

  function addMsg() {
    sendMsg();
    message.value = '';
    messageInput.value.focus();
  }

</script>

<template>
  <form @submit.prevent="addMsg()">
    <input
      v-model="message"
      ref="messageInput"
      type="text"
      required
      maxlength="200"
    >
    <base-button>Envoyer</base-button>
  </form>
</template>

<style scoped>
  form > * {
    display: inline-block;
    margin-right: 1rem;
  }
</style>