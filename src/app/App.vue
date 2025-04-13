<template>
  <div class="app-layout">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
@use '#app/styles/variables' as *;

.app-layout {
  min-height: 100vh;
  background-color: #e0e0e0;
  color: $color-secondary;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
}
</style>
