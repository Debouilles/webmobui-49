<script setup>
  import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core';
  import { useFetch } from './composables/fetch.js';
  import { useLocalstorage } from './composables/localstorage.js';

  import TheChat from './components/TheChat.vue';
  import { apiLogin } from './config/chat.js';

  const {value: username} = useLocalstorage('username', '');
  const urlLogin = computed(() => apiLogin + username.value);

  const hasError = ref(false);
  const isLogged = ref(false);

  const { data: loginResult, fetchJson: doLogin } = useFetch(urlLogin, false);

  onMounted(() => {
    if (username.value != '') doLogin();
  })
//on utilise watcheffect pour pouvoir voir les changements, permet de faire ce qu'un await aurait permis de faire.
//watcheffect vérifie l'état actuel mais aussi les états futurs, donc on ne peut pas vérifier le .status qui n'est pas encore existant dans l'état actuel
// le  ? permet de dire qu'on fait le test seulement si la propriété existe, sinon il rend faux
  watchEffect(() => {
    if (loginResult.value?.status == 'success') {
      isLogged.value = true;
      hasError.value = false;
    } else if (loginResult.value?.status == 'error') {
      hasError.value = true;
    }
  });

  function onLogout() {
    isLogged.value = false;
    username.value = '';
  }

</script>

<template>
  <the-chat v-if="isLogged" @logout="onLogout()">

  </the-chat>

  <template v-if="!isLogged">

    <form @submit.prevent="doLogin()">
      <label>
        Nom d'utilisateur (caractères alphabétiques uniquement):
      </label>
      <input
        v-model="username"
        type="text"
        required
        pattern="[A-Za-z]+"
      >
      <p class="error" v-if="hasError">
        Erreur de connexion au chat
      </p>
      <base-button>Login</base-button>
    </form>
  </template>
</template>

<style scoped>
  .error {
    color: red;
    font-style: italic;
  }

  label, button {
    display: block;
  }

  label {
    margin-bottom: 1rem;
  }

  button {
    margin-top: 1rem;
  }
</style>