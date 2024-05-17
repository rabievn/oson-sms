<template>
  <button class="button">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.button {
  height: 3.5rem;
  padding-inline: 2.5rem;
  border-radius: 0.75rem;
  border: 1px solid $dark-grey;
  color: $main-dark;
  font-weight: $fw-bold;
  background: $white;
  cursor: pointer;

  &:hover {
    background: $back;
  }

  &:active {
    background: $grey;
  }
}
</style>