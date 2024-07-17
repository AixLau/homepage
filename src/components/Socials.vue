<script setup>

import {ref} from "vue";

const hoverIndex = ref(null);
let hoverSpan = ref();

const socialsList = [
  {text: 'Github', icon: 'i-ri-github-fill', href: 'https://github.com/AixLau'},
  {text: 'Blog', icon: 'i-ri-book-2-fill', href: 'https://blog.aixcc.top'},
  {text: 'Mail', icon: 'i-ri-mail-fill', href: 'mailto:x@aixcc.top'},
]
const handleMouseOver = (index, text) => {
  hoverIndex.value = index;
  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.style.position = 'absolute';
  span.innerText = text;
  document.body.appendChild(span);
  const width = span.offsetWidth + 32;
  document.body.removeChild(span);
  document.documentElement.style.setProperty('--dynamic-width', `${width}px`);
};
</script>

<template>
  <div class="container">
    <div class="icon-container">
      <a v-for="(social, index) in socialsList" :key=social.text
         :class="['icon-link', { expanded: hoverIndex === index }, social.text]"
         :href=social.href
         @mouseover="handleMouseOver(index, social.text)"
         @mouseleave="hoverIndex = null">
        <i :class="social.icon"/>
        <span v-if="hoverIndex === index" ref="hoverSpan">{{ social.text }}</span>
      </a>
    </div>
  </div>
</template>

<style>
:root {
  --dynamic-width: 3rem;
}

.icon-container {
  display: flex;
  gap: 0.5rem;
}

.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 2rem;
  padding: 0 0.2rem; /* 添加水平内边距 */
  border-radius: 0.375rem;
  transition: width 0.5s ease, background-color 0.3s ease;
  text-decoration: none;
  color: #ffffff; /* 白色文字 */
  background-color: #333; /* 深灰色背景 */
}

.icon-link.expanded {
}

.icon-link.expanded {
  width: var(--dynamic-width);
}

.icon-link:hover {
  background-color: #d1d5db;
}


.Github {
  background-color: #24292e;
}

.Blog {
  background-color: #FF69B4;
}

.Mail {
  background-color: #1E90FF;
}

.Mail:hover {
  background-color: #00BFFF;
}

.Github:hover {
  background: linear-gradient(to right, #1371EF, #FC1CD5, #FCCC05);
}

.Blog:hover {
  background: linear-gradient(to right, #FDAF42, #FC51FA, #2CD4FF);
}

</style>
