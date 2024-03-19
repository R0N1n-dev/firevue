import { defineStore } from "pinia";
import { db } from "../firebaseConfig.mjs";
import {
  collection,
  onSnapshot,
  query,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    games: [],
  }),
  actions: {
    getGames() {
      try {
        const myDb = query(collection(db, "games"));
        onSnapshot(myDb, (querySnapshot) => {
          let myGames = [];
          querySnapshot.forEach((doc) => {
            const singleGame = {
              id: doc.id,
              developer: doc.data().developer,
              publisher: doc.data().publisher,
            };
            myGames.push(singleGame);
          });
          this.games = myGames;
        });
      } catch (error) {
        alert("Error", error.message);
      }
    },
    async addGame(developer, publisher, gameId) {
      try {
        await setDoc(doc(db, "games", gameId), {
          developer: developer,
          publisher: publisher,
        });
      } catch (error) {
        alert("Error", error.message);
      }
    },
    async deleteGame(gameId) {
      try {
        await deleteDoc(doc(db, "games", gameId));
      } catch (error) {
        alert("Error", error.message);
      }
    },
  },
});
