<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
$button-hover: #0D1543;
$button-active: #0C112E;
.button {
  height: 56px;
  border-radius: 12px;
  color: $white;
  font-weight: $fw-bold;
  background: $main-dark;
  border: none;
  cursor: pointer;

  &:hover {
    background: $button-hover;
  }

  &:active {
    background: $button-active;
  }

  &:disabled {
    background: $grey;
    color: $dark-grey;
  }
}
</style>