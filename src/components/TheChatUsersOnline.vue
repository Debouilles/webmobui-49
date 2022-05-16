<script setup>
  import { ref, watchEffect, onUnmounted, nextTick } from 'vue';
  import { useFetch } from '../composables/fetch.js';
  import { apiOnline } from '../config/chat.js';

  onUnmounted(() => {
    clearInterval(getUsersInterval);
  });

  const {data: users, fetchJson: getOnline } = useFetch(apiOnline);

  const getUsersInterval = setInterval(getOnline, 5000);

</script>

<template>
  <div>
    Online :
    <span v-for="(user, index) of users" :key="index" class="username">
      {{ user.username }}
    </span>
  </div>
</template>

<style scoped>
  .username {
    display: inline-block;
    margin-right: 0.5rem;
  }
  .username:before {
      content: '[';
  }
  .username:after {
      content: ']';
  }
</style>