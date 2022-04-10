<script setup>
  import { ref, computed } from '@vue/reactivity';
import { nextTick, watch, watchEffect } from '@vue/runtime-core';
  import BaseInputNumber from './components/BaseInputNumber.vue';

  const tempSi = ref(0);

  const kelvin = computed({
    get: () => tempSi.value,
    set: val => tempSi.value = val
  });

  const celsius =  computed({
    get: () => tempSi.value - 273.15,
    set: val => tempSi.value = val + 273.15
  });

  const fahrenheit =  computed({
    get: () => tempSi.value * 1.8 - 459.67,
    set: val => tempSi.value = (val + 459.67) / 1.8
  });

  const precision = ref(2);

</script>

<template>

  <h1>Temperature converter</h1>

  <label>Precision</label>
  <base-input-number
    v-model="precision"
    :precision="0"
    min="0"
    max="10"
  />

  <label>Kelvin</label>
  <base-input-number
    v-model="kelvin"
    :precision="precision"
    unit="K"
    data-role="input"
  />

  <label>Celsius</label>
  <base-input-number
    v-model="celsius"
    :precision="precision"
    unit="°C"
  />

  <label>Fahrenheit</label>
  <base-input-number
    v-model="fahrenheit"
    :precision="precision"
    unit="°F"
  />

</template>

<style>
  * {
    box-sizing: border-box;
  }
  :root {
    font-size: 1em;
  }
</style>

<style scoped>
  label {
    display: block;
    margin: 1rem 0 0.5rem 0;
    font-size: 1.2rem;
  }

</style>
