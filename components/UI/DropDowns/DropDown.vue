<template>
  <div class="dropdown" ref="dropdown">
    <div class="dropdown-header" @click="toggleDropdown">
      <slot name="header"></slot>
    </div>
    <div class="dropdown-menu" v-if="isOpen">
      <slot name="menu"></slot>
    </div>
    <div class="overlay" v-if="isOpen" @click="closeDropdown"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const dropdown = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped lang="scss">
.dropdown {
  position: relative;
  display: inline-block;

  .dropdown-header {
    cursor: pointer;
  }

  .dropdown-menu {
    display: block;
    position: absolute;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 2;
    width: 100%;
    border-radius: 0.3125rem; // 5px to rem
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
}
</style>
