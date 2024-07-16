<template>
  <div class="container">
    <div class="icon-container">
      <a v-for="socials in socialsList" :key=socials.text
         class="icon-link"
         :href=socials.href>
        <i :class="socials.icon" ></i> {{ socials.text }}
      </a>
    </div>
  </div>
</template>

<script setup>
const socialsList = [
  {text: 'Github', icon: 'i-ri-github-fill', href: 'https://github.com/AixLau'},
  {text: 'Blog', icon: 'i-ri-book-2-fill', href: 'https://blog.aixcc.top'},
  {text: 'Mail', icon: 'i-ri-mail-fill', href: 'mailto:x@aixcc.top'},
]
</script>

<style>
.icon-container {
  display: flex;
  margin: 0 -0.3rem;
}

.icon-link {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.2rem;
  border-radius: 0.375rem;
  transition: color 0.2s, background-color 0.2s;
  text-decoration: none;
  color: #1f2937; /* 灰色文字 */
  background-color: #e5e7eb; /* 灰色背景 */
}

.icon-link:hover {
  background-color: #d1d5db; /* 深灰色背景 */
}

</style>
