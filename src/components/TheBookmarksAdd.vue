<script setup>
  import { ref, watchEffect } from 'vue';

  import { bookmarks } from '../stores/bookmarks.js';
  import BaseButton from './BaseButton.vue';

  const emit = defineEmits([
    'cancel',
    'added'
  ]);

  const label = ref(null);
  const url = ref(null);

  function addFav() {
    bookmarks.value.push({
      label: label.value,
      url: url.value
    })
    emit('added');
  }

</script>

<template>
  <form @submit.prevent="addFav()">
    <input v-model="label" type="text" placeholder="label" required>
    <input v-model="url" type="url" placeholder="url" required>

    <base-button class="btn-add">
      Ajouter le favoris
    </base-button>

    <base-button class="cancel" @click="$emit('cancel')">
      Annuler
    </base-button>

  </form>
</template>

<style scoped>
  form {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(255,255,255,0.4);
    padding: 2rem;
    display: grid;
    align-content: center;
    justify-content: center;
  }

  input {
    display: block;
    font-size: 0.9rem;
    border: solid black 1px;
    padding: 0.1rem 0.3rem;
    margin: 0.5rem;
  }

  .btn-add {
    margin: 0.5rem 0;
  }

</style>