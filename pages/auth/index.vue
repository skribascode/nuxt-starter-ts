<script setup lang='ts'>
const config = useRuntimeConfig()

console.log('Runtime config:', config)
if (import.meta.server) {
  console.log('API secret:', config.apiSecret)
}
</script>

<template>
  <div class="flex flex-col items-center mx-auto w-full h-full p-4">
    <Logo />
    <h1 class="text-4xl">Index authenticated</h1>
    <p class="text-teal-500">Welcome to the jungle</p>
    <div>Check developer console!</div>
  </div>
</template>
