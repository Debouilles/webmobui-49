<script setup>
  import { ref } from 'vue';
//   import TheBookmarksList from './components/TheBookmarksList.vue';
import TheToDoListsAdd from './components/TheToDoListsAdd.vue';
import TheToDoListsList from './components/TheToDoListsList.vue';
//   import TheBookmarksEdit from './components/TheBookmarksEdit.vue';

  const addMode1 = ref(false);

</script>

<template>
  <base-button class="btn-add" @click="addMode1 = true">
    + Ajouter une nouvelle tâche
  </base-button>

  <!-- <TheToDoListsAdd
    v-if="addMode1"
    @cancel="addMode1 = false"
    @added="addMode1 = false"

  />

  <TheToDoListsList /> -->
</template>

<style scoped>
  .btn-add {
    margin-bottom: 2rem;
    margin-top: 1.5rem;
  }
</style>