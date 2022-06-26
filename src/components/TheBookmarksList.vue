<script setup>
import { computed, ref } from 'vue';

import { bookmarks } from '../stores/bookmarks.js';

function deleteFav(index) {
  bookmarks.value.splice(index, 1);
}

const filter = ref('');

const bookmarksFiltered = computed(() => {
  return bookmarks.value.filter(fav => fav.tags.includes(filter.value));
})

</script>

<template>

  <ul>
    <li class="filter">
      <input v-model="filter" type="text" placeholder="Filtrer par tags">
    </li>
    <li v-for="(bookmark, index) of bookmarksFiltered" :key="index">
      <!-- : indique que c'est une valeur réactive -->
      <a :href="bookmark.url" target="_blank">
        {{ bookmark.label }}
      </a>
      <span v-if="bookmark.tags">
        - {{ bookmark.tags }}
      </span>
      <base-button @click="editFav(index)" class="btn-edit small">
        edit
      </base-button>
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

li.filter {
  list-style-type: none;
  padding-bottom: 0.5rem;
}

li.filter input {
  font-size: 0.8rem;
  padding: 0.1rem 0.3rem;
}

a {
  text-decoration: none;
  color: var(--color-deco);
}

a:hover {
  text-decoration: underline;
}

.btn-delete {
  margin-left: 0.4rem;
  background-color: rgb(184, 43, 43);
}

.btn-edit {
  margin-left: 1rem;

  background-color: #f5b53f;
}
</style>