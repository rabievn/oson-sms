<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
$button-hover: #0D1543;
$button-active: #0C112E;
.button {
  height: 3.5rem;
  padding-inline: 2.5rem;
  border-radius: 0.75rem;
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