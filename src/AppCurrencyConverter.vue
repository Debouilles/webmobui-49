<script setup>
import { ref, computed } from 'vue';
import BaseInputNumber from './components/BaseInputNumber.vue';


//base en CHF------------------------------------
const monnaie = ref(0);

const chf = computed({
    get: () => monnaie.value,
    set: val => monnaie.value = val
});

const eur = computed({
    get: () => monnaie.value / 1.01,
    set: val => monnaie.value = val / 1.01
});



const precision = ref(2);

</script>

<template>

    <label>Choisir la précision</label>
    <base-input-number v-model="precision" :decimal-places="3" min="0" max="6" />

    <label>chf</label>
    <base-input-number v-model="chf" :decimal-places="precision" unit="CHF" data-role="input" />

    <label>eur</label>
    <base-input-number v-model="eur" :decimal-places="precision" unit="€" />




</template>

<style scoped>
label {
    display: block;
    margin: 1rem 0 0.5rem 0;
    font-size: 1.2rem;
}
</style>
