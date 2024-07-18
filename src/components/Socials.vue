<script setup lang="ts">
const hoverIndex = ref(-1);
const isDark = useDark();
const toggleDarkMode = useToggle(isDark);
const showThemeText = ref(false);
const showPopup = ref(false);
const showPopupText = ref(false);
const themeMode = computed(() => isDark.value ? 'Light' : 'Dark');

const socialsList = [
  {text: 'Github', icon: 'i-ri-github-fill', href: 'https://github.com/AixLau'},
  {text: 'Blog', icon: 'i-ri-book-2-fill', href: 'https://blog.aixcc.top'},
  {text: 'Mail', icon: 'i-ri-mail-fill', href: 'mailto:x@aixcc.top'},
];

function handleMouseOver(index: number, text: string): void {
  if (index === 100) {
    showThemeText.value = true;
  } else if (index === 200) {
    showPopupText.value = true;
  } else {
    hoverIndex.value = index;
  }
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
    <a :class="['icon-link', { expanded: showThemeText }]"
       @click="toggleDarkMode()"
       @mouseleave="showThemeText = false"
       @mouseover="handleMouseOver(100, themeMode)">
      <i :class="isDark ? 'i-ri-sun-fill' : 'i-ri-moon-fill'"></i>
      <span v-if="showThemeText">{{ themeMode }}</span>
    </a>
    <a :class="['icon-link', { expanded: showPopupText }, 'applaud']"
       @click="showPopup = true"
       @mouseleave="showPopupText = false"
       @mouseover="handleMouseOver(200, '赞赏') ">
      <i class='i-ri-money-cny-circle-fill'></i>
      <span v-if="showPopupText">赞赏</span>
    </a>
    <transition name="popup">
      <div v-if="showPopup" class="popup-background" @click="showPopup = false">
        <img alt="Popup Image" class="popup-content" src="../assets/applaud.jpg"/>
      </div>
    </transition>
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
  padding: 0 0.3rem; /* 添加水平内边距 */
  border-radius: 0.375rem;
  transition: width 0.5s ease, background-color 0.3s ease;
  text-decoration: none;
  color: #ffffff; /* 白色文字 */
  background-color: #f5b1aa; /* 深灰色背景 */
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

.applaud {
  background-color: #e0a734;
}

.applaud:hover {
  background-color: #852e19;
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

.popup-background {
  display: flex; /* 使用 flex 布局，使内容在弹出层中居中对齐 */
  justify-content: center; /* 水平居中对齐 */
  align-items: center; /* 垂直居中对齐 */
  position: fixed; /* 固定定位，使元素相对于浏览器窗口定位 */
  top: 0; /* 背景覆盖整个窗口，从顶部开始 */
  left: 0; /* 背景覆盖整个窗口，从左边开始 */
  width: 100%; /* 背景的宽度占满整个窗口 */
  height: 100%; /* 背景的高度占满整个窗口 */
  border-radius: 0.375rem; /* 设置背景的圆角 */
  backdrop-filter: blur(10px); /* 应用背景模糊效果，模糊半径为 10 像素 */
  z-index: 1000; /* 设置较高的层级，使其覆盖页面其他内容 */
}

.popup-content {
  padding: 0; /* 移除内边距，使图片没有边框 */
  border-radius: 15px; /* 设置圆角 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 设置阴影效果，使弹出层内容有立体感 */
  max-width: 30%; /* 图片最大宽度为容器的 100%，以防止图片溢出 */
  height: auto; /* 高度自动，根据宽度等比例缩放 */
  display: block; /* 将图片设置为块级元素，使其独占一行 */

}

/*定义过渡动画的属性（动画持续时间和效果）*/
.popup-enter-active, .popup-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/*定义元素进入和离开时的初始状态（透明度为0，缩放比例为0.9）*/
.popup-enter-from, .popup-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/*定义元素进入和离开时的最终状态（透明度为1，缩放比例为1）*/
.popup-enter-to, .popup-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
