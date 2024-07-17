<script setup lang="ts">

const skillsUrl = 'https://skillicons.dev/icons?i=apple,arch,azure,bash,c,clion,cloudflare,css,devto,discord,docker,gcp,git,github,gitlab,gmail,go,html,idea,java,js,jenkins,kubernetes,linux,md,mongodb,mysql,nginx,pinia,postman,pycharm,py,rabbitmq,redis,spring,stackoverflow,twitter,ts,ubuntu,vim,vite,vscode,vue,webstorm,windows&theme=light&perline=14';
</script>

<template>
  <div class="skills-container">
    <h2>⚡ Skills</h2>
    <div class="icon-image">
      <img w="full" :src="skillsUrl" alt="Skills" />
    </div>
  </div>
</template>

<style scoped>

</style>