<template>
  <div class="flex flex-column align-items-center justify-content-center">
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <FloatLabel class="mb-3">
        <InputText id="Email" type="email" placeholder="someone@mail.com" v-model.trim="email" />
        <label for="Email">Email</label>
      </FloatLabel>
      <FloatLabel class="my-2">
        <InputText id="password" placeholder="********" type="password" v-model.trim="password" />
        <label for="Password">Password</label>
      </FloatLabel>
      <Button class="flex mx-auto" type="submit" :disabled="userStore.loadingSession">
        Continue
        <ProgressSpinner v-if="userStore.loadingSession" style="width: 2rem; height: 50px" strokeWidth="8"
          fill="var(--surface-ground)" aria-label="Custom ProgressSpinner" />
      </Button>
    </form>
    <Message severity="error" v-if="userStore.errorMsg">{{ userStore.errorMsg }}</Message>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user";

const userStore = useUserStore();

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert("Enter a valid email address and/or password with at least 6 characters");
  }
  await userStore.registerUser(email.value, password.value);
};
</script>

<style>
input {
  width: 20rem;
}
</style>
