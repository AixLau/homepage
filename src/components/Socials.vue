<script setup lang="ts">
const hoverIndex = ref(-1);
const isDark = useDark();
const toggleDarkMode = useToggle(isDark);
const showThemeTxt = ref(false);
const themeMode = computed(() => isDark.value ? 'Light' : 'Dark');

const socialsList = [
  {text: 'Github', icon: 'i-ri-github-fill', href: 'https://github.com/AixLau'},
  {text: 'Blog', icon: 'i-ri-book-2-fill', href: 'https://blog.aixcc.top'},
  {text: 'Mail', icon: 'i-ri-mail-fill', href: 'mailto:x@aixcc.top'},
];

function handleMouseOver(index: number, text: string): void {
  index == 100 ? showThemeTxt.value = true : hoverIndex.value = index;
  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.style.position = 'absolute';
  span.innerText = text;
  document.body.appendChild(span);
  const width = span.offsetWidth + 32;
  document.body.removeChild(span);
  document.documentElement.style.setProperty('--dynamic-width', `${width}px`);
}
</script>

<template>
  <div class="icon-container">
    <a v-for="(social, index) in socialsList" :key=social.text
       :class="['icon-link', { expanded: hoverIndex === index }, social.text]"
       :href="social.href || '#'"
       @mouseover="handleMouseOver(index, social.text)"
       @mouseleave="hoverIndex = -1">
      <i :class="social.icon"/>
      <span v-if="hoverIndex === index">{{ social.text }}</span>
    </a>
    <a :class="['icon-link', { expanded: showThemeTxt }]"
       @click="toggleDarkMode()"
       @mouseleave="showThemeTxt = false"
       @mouseover="handleMouseOver(100, themeMode)">
      <i :class="isDark ? 'i-ri-sun-fill' : 'i-ri-moon-fill'"></i>
      <span v-if="showThemeTxt">{{ themeMode }}</span>
    </a>
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
  background-color: #e0a734; /* 深灰色背景 */
  overflow: hidden; /* 确保文本溢出隐藏 */
  white-space: nowrap; /* 确保文本不换行 */
}

.icon-link.expanded {
  width: var(--dynamic-width);
}

.icon-link:hover {
  background-color: #4c668d;
}


.Github {
  background-color: #24292e;
}

.Blog {
  background-color: #ffa400;
}

.Mail {
  background-color: #12c2e9;
}

.Mail:hover {
  background-color: #00BFFF;
}

.Github:hover {
  background: linear-gradient(to right, #12c2e9, #6dd5ed, #b32cee);

}

.Blog:hover {
  background: linear-gradient(to right, #8360c3, #2ebf91);
}
</style>
