<template>
  <div>
    <h2>Normal Base</h2>
    <div>
      <form>
        <input type="text" v-model="gameName" placeholder="Game Name/Id" />
        <input type="text" v-model="developer" placeholder="Developer" />
        <input type="text" v-model="publisher" placeholder="Publisher" />
        <button
          @click.prevent="gameStore.addGame(developer, publisher, gameName)"
        >
          +
        </button>
      </form>
    </div>

    <div v-if="gameStore.games.length > 0">
      <ul>
        <li v-for="game in gameStore.games" :key="game.id">
          {{ game }}
          <span>
            <button @click.prevent="gameStore.deleteGame(game.id)">
              X
            </button></span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useGameStore } from "../stores/games";
const gameStore = useGameStore();
const gameName = ref("");
const developer = ref("");
const publisher = ref("");
onMounted(async () => {
  gameStore.getGames();
});
</script>
