<template>
  <div>
    <h2>Realtime Database</h2>
    <input type="text" v-model="userId" />
    <input type="text" v-model="name" />
    <input type="text" v-model="email" />
    <button @click.prevent="writeUserData(userId, name, email)">
      Write to database
    </button>
  </div>
</template>

<script setup>
import { rdb } from "../firebaseConfig.mjs";
import { ref, set } from "firebase/database";
const userId = ref("");
const name = ref("");
const email = ref();

function writeUserData(userId, name, email) {
  set(ref(rdb, "users/" + userId), {
    username: name,
    email: email,
  });
}
</script>
