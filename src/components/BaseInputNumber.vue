<script setup>
  import { computed } from 'vue';
  import { round } from '../utils/math.js';


//pas obligatoire mais rajoute du contrôle sur les entrées
  const props = defineProps({
    modelValue: {
      type: [String, Number],
      required: true,
    },
    decimalPlaces: {
      type: Number,
      required: false,
      default: 2
    },
    unit: {
      type: String,
      required: false,
      // pas requis donc valeur par défaut importante
      default: ''
    }
  });

  const emit = defineEmits([
    'update:modelValue'
  ]);
//computed valeur virtuelle ell est réactive par rapport à des données existantes
  const value = computed({
    //get : injecter la valeur dans le champs // le way binding vers le haut n'est pas arrondi
    //props du coup car on a rajouté des trucs en haut
    get: () => round(props.modelValue, props.decimalPlaces),
    set: val => {
      if (isNaN(val) || val === '') return;
      emit('update:modelValue', val);
    }
  });

</script>
<!-- Si on fait correctement le nommage v-model fait le 2 way binding pour nous -->
<template>
  <input
    v-bind="$attrs"
    type="number"
    v-model="value"
  >
  <span v-show="unit">
    {{ unit }}
  </span>
</template>

<style scoped>

  input {
    display: inline-block;
    font-size: 1rem;
    border: solid black 1px;
    padding: 0 0.5rem;
  }

  span {
    display: inline-block;
    border: solid black 1px;
    background-color: #ddd;
    padding: 0 0.4rem;
    min-width: 2rem;
    text-align: center;
    border-width: 1px 1px 1px 0;
  }

</style>