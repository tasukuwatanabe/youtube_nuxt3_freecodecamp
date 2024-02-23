<script setup>
  const { $sayHello } = useNuxtApp();
</script>

<template>
  <div class="main">
    <h1>{{ $sayHello('Tom') }}</h1>
  </div>
</template>
