<script setup lang="ts">
import {reactive} from "vue";

let user = reactive({
  name: 'Aix',
  role: 'Full Stack',
  description: 'Passionate programmer, lifelong learner, and technology enthusiast, dedicated to continuously exploring new technologies and striving for excellence.'
})
</script>

<template>
  <h1>Hello, I'm <span class="name gradient-text">{{ user.name }}.</span></h1>
  <p>
    <span class="emoji">👨‍💻 </span>
    <span class="role gradient-text">{{ user.role }}</span> Developer
  </p>
  <p>
    <span class="description">{{ user.description }}</span>
  </p>
</template>

<style scoped>

h1 {
  font-size: 3em;
  margin-bottom: 0;
}

.emoji {
  font-size: 1.5em;
}

.gradient-text {
  background: linear-gradient(to right, rgb(33, 147, 176), rgb(109, 213, 237));
  background-clip: text;
  -webkit-text-fill-color: transparent;

}

p {
  margin: 5px 0;
  font-size: 1.2em;
}

.role {
  font-weight: bold;
}
</style>