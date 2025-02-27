<template>
  <div>
    <h1>Home</h1>
    <p> <b>{{ userStore.userData?.email }}</b> is logged in</p>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";
const userStore = useUserStore();
</script>
