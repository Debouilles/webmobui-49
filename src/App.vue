<script setup>
import { ref, computed } from 'vue';

import TheNav from './components/TheNav.vue';
import AppHome from './AppHome.vue';
import AppTempConverter from './AppTempConverter.vue';
import AppBookmarks from './AppBookmarks.vue';
import AppChat from './AppChat.vue';
import AppCurrencyConverter from './AppCurrencyConverter.vue';


const routes = {
  '#home': {
    label: 'Accueil',
    component: AppHome,
  },
  '#tempConverter': {
    label: 'Températures',
    component: AppTempConverter,
  },
  '#bookmarks': {
    label: 'Favoris',
    component: AppBookmarks,
  },
  '#chat': {
    label: 'Chat',
    component: AppChat,
  },

  '#currencyConverter': {
    label: 'Convertisseur de monnaies',
    component: AppCurrencyConverter,
  },

};

const hash = ref(window.location.hash);

window.addEventListener('hashchange', () => hash.value = window.location.hash);

const curHash = computed(() => routes[hash.value] ? hash.value : Object.keys(routes)[0]);
const curComponent = computed(() => routes[curHash.value].component);
</script>

<template>
  <header>
    <h1>Webmobui</h1>
  </header>

  <the-nav :routes="routes" :curHash="curHash"></the-nav>

  <main>
    <template v-for="(route, hash) of routes">
      <div v-show="hash == curHash">
        <component :is="route.component" />
      </div>
    </template>
  </main>
</template>

<style scoped>
header {
  background-color: #553986;
  color: white;
  text-align: center;
  height: 80px;
}

h1 {
  font-size: 1.5rem;
  padding: 1rem;
  color: var(--color-deco);
  

}

h2 {
  font-size: 1rem;
  padding: 0.3rem;
}

main {
  padding: 1rem;
}
</style>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

:root {
  font-size: 1.3em;
  --color-deco: rgb(245, 181, 63);
}

input {
  font-size: 0.9em;
}
</style>