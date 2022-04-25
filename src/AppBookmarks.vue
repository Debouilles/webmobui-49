<script setup>
  import { ref } from 'vue';

  import TheBookmarksList from './components/TheBookmarksList.vue';
  import BaseButton from './components/BaseButton.vue';
  import TheBookmarksAdd from './components/TheBookmarksAdd.vue';

  const addMode = ref(false);

</script>

<template>
  <base-button class="btn-add" @click="addMode = true">
    + Ajouter un nouveau favoris
  </base-button>

  <the-bookmarks-add
    v-if="addMode"
    @cancel="addMode = false"
    @added="addMode = false"
  />

  <the-bookmarks-list />
</template>

<style scoped>
  .btn-add {
    margin-bottom: 1rem;
  }
</style>