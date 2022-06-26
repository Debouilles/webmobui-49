<script setup>
  import { ref, watchEffect } from 'vue';

  import { bookmarks } from '../stores/bookmarks.js';

  const emit = defineEmits([
    'cancel',
    'added',
    'edited'
  ]);

  const label = ref(null);
  const url = ref(null);
  const tags = ref(null);

  function editFav() {
    bookmarks.value.push({
      label: label.value,
      url: url.value,
      tags: tags.value
    })
    emit('edited');
  }

</script>

<template>
  <form @submit.prevent="editFav()">
    <fieldset>
      <legend>Éditer le favoris</legend>
      <label>Label</label>
      <input v-model="label" type="text" placeholder="label" >
      <label>Url</label>
      <input v-model="url" type="url" placeholder="url" >
      <label>Tags</label>
      <input v-model="tags" type="text" placeholder="tags" >

      <base-button class="btn-edit">
        ~ éditer le favoris
      </base-button>

      <base-button class="cancel" @click="$emit('cancel')">
        ↶ Annuler
      </base-button>
    </fieldset>
  </form>
</template>

<style scoped>
  form {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(255,255,255,0.75);
    padding: 2rem;
    display: grid;
    align-content: center;
    justify-content: center;
  }

  fieldset {
    background: white;
    padding: 1rem;
  }

  legend {
    color: var(--color-deco);
    font-weight: bold;
  }

  input {
    display: block;
    font-size: 0.9rem;
    border: solid black 1px;
    padding: 0.1rem 0.3rem;
    margin: 0.5rem;
    min-width: 20rem;
  }

  .btn-add {
    display: block;
    margin: 1rem 0 0.5rem 0;
  }

</style>