<script setup>
import { computed, ref } from 'vue';

import { bookmarks } from '../stores/bookmarks.js';
// import TheBookmarksEdit from './TheBookmarksEdit.vue.js';

function deleteTache(index) {
  todolists.value.splice(index, 1);
}


// function editFav(index) {
//    function addFav() {
//     todolists.value.push({
//       label: label.value,
//       tags: tags.value
//     })
//     emit('added');
//   }
// } 
const filter = ref('');

const todolistsFiltered = computed(() => {
  return todolists.value.filter(fav => fav.tags.includes(filter.value));
})

</script>

<template>

  <ul>
    <li class="filter">
      <input v-model="filter" type="text" placeholder="Filtrer par noms">
    </li>
    <li v-for="(todolist, index) of todolistsFiltered" :key="index">
    <a :href="todolist.url" target="_blank">
        {{ todolist.label }}
      </a>
     
      <span v-if="todolist.tags">
        - {{ todolist.tags }}
      </span>
      <base-button @click="editFav(index)" class="btn-edit small">
        edit
      </base-button>
      <base-button @click="deleteTache(index)" class="btn-delete small">
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