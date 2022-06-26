<script setup>
  import { ref } from 'vue';
  import TheBookmarksList from './components/TheBookmarksList.vue';
  import TheBookmarksAdd from './components/TheBookmarksAdd.vue';
  // import TheBookmarksEdit from './components/TheBookmarksEdit.vue';

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
    @edited="addMode = false"

  />

  <the-bookmarks-list />
</template>

<style scoped>
  .btn-add {
    margin-bottom: 2rem;
    margin-top: 1.5rem;
  }
</style>