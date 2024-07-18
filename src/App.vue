<script setup lang="ts">
</script>

<template>
  <!--
    max-md: 表示在最大屏幕宽度为中等（md）或更小的设备上应用样式。
    p10 表示 padding: 2.5rem。
    max-w 表示最大宽度。5xl 通常表示一个预定义的宽度值
    ma 表示 margin: auto，用于水平和垂直居中元素。
    flex="~" 表示启用 Flexbox 布局。
    col 表示 Flexbox 方向为列方向（即垂直方向）。
    justify-center 表示在主轴（垂直方向）上居中对齐。
  -->
  <div flex="~ col justify-center" ma max-md-pt-0 max-md:p10 max-w5xl>
    <Header/>
    <Socials/>
    <Snake/>
    <Skills/>
    <Footer/>
  </div>

</template>

<style scoped>

</style>