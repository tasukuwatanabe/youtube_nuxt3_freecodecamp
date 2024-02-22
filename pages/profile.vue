<script setup>
definePageMeta({
  layout: 'custom'
});

const { sayHello } = useUtils();
sayHello();
</script>

<template>
  <div class="CustomPage">
    <p>Custom Page</p>
  </div>
</template>
