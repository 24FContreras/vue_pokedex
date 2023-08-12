import { defineStore } from "pinia";
import { ref } from "vue";

export const useLastSeenStore = defineStore("lastSeen", () => {
  const lastSeen = ref([]);

  if (localStorage.getItem("lastSeen")) {
    lastSeen.value = JSON.parse(localStorage.getItem("lastSeen"));
  }

  const updateLastSeen = (poke) => {
    const indexInArray = lastSeen.value.findIndex(
      (pokemon) => pokemon.id === poke.id
    );

    if (indexInArray !== -1) {
      lastSeen.value.splice(indexInArray, 1);
    }

    if (lastSeen.value.length === 6) {
      lastSeen.value.pop();
    }

    lastSeen.value.unshift(poke);
    localStorage.setItem("lastSeen", JSON.stringify(lastSeen.value));
  };

  return { lastSeen, updateLastSeen };
});
