<script setup>
const res = await $fetch('/api/hello');
console.log(res);
</script>

<template>
  <div>
    <ContentDoc />
  </div>
</template>
