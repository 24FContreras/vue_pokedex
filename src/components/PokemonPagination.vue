<script setup>
const emit = defineEmits(["getPrevious", "getNext"]);

defineProps(["previous", "next"]);
</script>

<template>
  <nav class="btn-group" role="group" aria-label="Basic example">
    <button
      type="button"
      :disabled="!previous"
      class="btn btn-light border-secondary-subtle"
      @click="emit('getPrevious')"
      aria-label="Previous"
    >
      <i class="fa-solid fa-chevron-left" aria-hidden="true"></i>
    </button>
    <button
      type="button"
      :disabled="!next"
      class="btn btn-light border-secondary-subtle"
      @click="emit('getNext')"
      aria-label="Next"
    >
      <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
    </button>
  </nav>
</template>
