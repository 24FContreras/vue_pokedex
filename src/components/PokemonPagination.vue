<script setup>
const emit = defineEmits(["getPrevious", "getNext"]);

defineProps(["previous", "next"]);
</script>

<template>
  <nav>
    <button
      :disabled="!previous"
      class="btn btn-outline-primary"
      @click="emit('getPrevious')"
    >
      Previous
    </button>
    <button
      :disabled="!next"
      class="btn btn-outline-primary"
      @click="emit('getNext')"
    >
      Next
    </button>
  </nav>
</template>
