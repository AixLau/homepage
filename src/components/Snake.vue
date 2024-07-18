<script lang="ts" setup>
const isDark = useDark();
const snakeImageUrl = computed(() => isDark.value ?
    new URL('../assets/snake-dark.svg', import.meta.url).href :
    new URL('../assets/snake.svg', import.meta.url).href);
</script>

<template>
  <img :src="snakeImageUrl" alt="snake" w="full"/>
</template>

<style scoped>

</style>