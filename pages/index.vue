<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div class="main">
    <h1>{{ $sayHello('Tom') }}</h1>
  </div>
</template>
