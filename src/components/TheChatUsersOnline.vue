<script setup>
  import { ref, watchEffect, onUnmounted, nextTick } from 'vue';
  import { useFetch } from '../composables/fetch.js';
  import { apiOnline } from '../config/chat.js';
//(on enlève lorsque le composant n'existe plus (les demandes toutes les 5 secondes. Comme ça on diminue le trafic réseau.))
  onUnmounted(() => {
    clearInterval(getUsersInterval);
  });

  const {data: users, fetchJson: getOnline } = useFetch(apiOnline);
//besoin de refaire la demande au serveur pour voir les nouvelles connexions toutes les 5 sec.
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