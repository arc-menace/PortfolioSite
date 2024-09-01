<script setup lang="ts">
import { useThemeStore } from './stores/themeStore';
import { h } from 'vue';

const themeStore = useThemeStore();

function changeTheme(event: Event) {
  const select = event.target as HTMLSelectElement;
  themeStore.setTheme(select.value);
}

// Add this new component
const ColorSquare = (props: { color: string }) => {
  return h('div', {
    style: {
      width: '50px',
      height: '50px',
      backgroundColor: props.color,
      display: 'inline-block',
      margin: '0 5px',
      border: '1px solid #000'
    }
  });
}

</script>

<template>
  <div>
    <h1>Hello World</h1>
    
    <select :value="themeStore.currentTheme" @change="changeTheme">
      <option v-for="(theme, name) in themeStore.themes" :key="name" :value="name">
        {{ theme.name }}
      </option>
    </select>

    <div class="color-squares">
      <ColorSquare :color="themeStore.currentThemeColors.background" />
      <ColorSquare :color="themeStore.currentThemeColors.text" />
      <ColorSquare :color="themeStore.currentThemeColors.primary" />
      <ColorSquare :color="themeStore.currentThemeColors.secondary" />
      <ColorSquare :color="themeStore.currentThemeColors.tertiary" />
    </div>
  </div>
</template>

<style scoped>
.color-squares {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

select {
  margin-top: 20px;
  padding: 5px;
  font-size: 16px;
}
</style>
