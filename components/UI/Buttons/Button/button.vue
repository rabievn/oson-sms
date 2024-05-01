<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.button {
  height: 56px;
  border-radius: 12px;
  color: $white;
  font-weight: $fw-bold;
  background: $main-dark;
  border: none;
  cursor: pointer;
}
</style>