<script setup>
  import { bookmarks } from '../stores/bookmarks.js';
  import BaseButton from './BaseButton.vue';

  function deleteFav(index) {
    bookmarks.value.splice(index, 1);
  }

</script>

<template>
    <ul>
      <li v-for="(bookmark, index) of bookmarks" :key="index">
        <a :href="bookmark.url" target="_blank">
          {{ bookmark.label }}
        </a>
        <base-button @click="deleteFav(index)" class="btn-delete small">
          x
        </base-button>
      </li>
    </ul>
</template>

<style scoped>
  li {
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: var(--color-deco);
  }

  a:hover {
    text-decoration: underline;
  }

  .btn-delete {
    margin-left: 1rem;
  }
</style>