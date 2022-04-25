<script setup>

</script>

<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
  button {
    border-radius: 1rem;
    border: none;
    background: var(--color-deco);
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    color: white;
  }

  .cancel {
    background: blueviolet;
  }

  .small {
    font-size: 0.6rem;
  }
</style>