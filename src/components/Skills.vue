<script setup lang="ts">
const isDark = useDark();
const baseUrl = 'https://skillicons.dev/icons?i=apple,arch,azure,bash,c,clion,cloudflare,css,devto,discord,docker,gcp,git,github,gitlab,gmail,go,html,idea,java,js,jenkins,kubernetes,linux,md,mongodb,mysql,nginx,pinia,postman,pycharm,py,rabbitmq,redis,spring,stackoverflow,twitter,ts,ubuntu,vim,vite,vscode,vue,webstorm,windows&perline=14';

const skillsUrl = computed(() =>
    `${baseUrl}&theme=${isDark.value ? 'dark' : 'light'}`);

</script>

<template>
  <div class="skills-container">
    <h2>⚡ Skills</h2>
    <div class="icon-image">
      <img :src="skillsUrl" alt="Skills" w="full"/>
    </div>
  </div>
</template>

<style scoped>

</style>