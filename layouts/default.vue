<script setup>
// import { useAuthStore } from '@/store/auth'

// const authStore = useAuthStore()

</script>
<template>
  <div class="flex flex-col justify-center items-center w-full h-screen text-slate-700">
    <!-- <Header v-if="authStore.isLoggedIn"/> -->
    <Header />
    <slot />
  </div>
</template>
