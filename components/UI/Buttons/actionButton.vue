<template>
  <button class="actionButton" @click="goTo && $router.push(goTo)">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  goTo: String
})
</script>

<style>
.actionButton .nuxt-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
<style lang="scss" scoped>
.actionButton {
  @include flexBetween;
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  border-radius: 8px;
  outline: 2px solid $grey;
  background: $white;
  font-size: $font-sm;
  font-weight: $fw-medium;
  outline-offset: -2px;

  &:disabled {
    background: $grey;
    color: $dark-grey;
    outline-offset: 0;
  }

  &:hover:not(:disabled) {
    background: $back;
    outline: 1px solid $grey;
    outline-offset: 0;
  }

  &:active:not(:disabled) {
    background: $grey;
    outline: 1px solid $grey;
  }
}

.iconText {
  padding-inline: 1rem;
  color: $main-dark;
  gap: 8px;
}
</style>
