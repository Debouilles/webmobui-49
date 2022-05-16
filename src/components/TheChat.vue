<script setup>
  import { onUnmounted } from 'vue';
  import { useFetch } from '../composables/fetch.js';
  import { apiLogout } from '../config/chat.js';
  import TheChatMessages from './TheChatMessages.vue';
  import TheChatAddForm from './TheChatAddForm.vue';
  import TheChatUsersOnline from './TheChatUsersOnline.vue';

  const { fetchJson: doLogout } = useFetch(apiLogout, false);

  const emit = defineEmits([
    'logout'
  ]);

  onUnmounted(() => {
    doLogout();
  });


</script>

<template>
  <the-chat-users-online class="online"/>
  <the-chat-messages class="messages"/>
  <the-chat-add-form />
  <base-button @click.prevent="$emit('logout')" class="cancel">
    Logout
  </base-button>
</template>

<style scoped>
  .online {
    margin-bottom: .5rem;
  }
  .messages {
    height: 60vh;
    margin-bottom: 1rem;
  }
  .cancel {
    float: right;
  }
</style>